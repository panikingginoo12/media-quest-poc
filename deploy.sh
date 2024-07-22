#!/bin/bash -e

# Ensure required environment variables are set
if [ -z "$BUCKET" ]; then
  echo "Error: BUCKET environment variable is not set."
  exit 1
fi

if [ -z "$DISTRIBUTION_ID" ]; then
  echo "Error: DISTRIBUTION_ID environment variable is not set."
  exit 1
fi

yarn build

OUT_DIR=out

# Sync all files except .html with cache control for static assets
aws s3 sync $OUT_DIR s3://$BUCKET/ \
  --delete \
  --exclude "*.html" \
  --cache-control max-age=31536000,public

# Upload HTML files with no-cache headers
aws s3 cp $OUT_DIR s3://$BUCKET/ \
  --exclude "*" \
  --include "*.html" \
  --cache-control max-age=0,no-cache,no-store,must-revalidate \
  --recursive

# Rename .html files to remove the .html extension
find $OUT_DIR -type f -name "*.html" | while read -r html_file; do
  relative_path="${html_file#$OUT_DIR/}"
  file_name="${relative_path%.html}"
  
  aws s3 mv s3://$BUCKET/$relative_path s3://$BUCKET/$file_name
done

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*"
