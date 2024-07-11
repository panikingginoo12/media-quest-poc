import AWS from 'aws-sdk';
import { FC } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  posts: Post[];
}

const fetchPosts = async (): Promise<Post[]> => {
  AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  const lambda = new AWS.Lambda();
  const functionName = process.env.AWS_LAMBDA_ARN;

  if (!functionName) {
    throw new Error('AWS_LAMBDA_ARN environment variable is not set');
  }

  const params = {
    FunctionName: functionName,
  };

  try {
    const result = await lambda.invoke(params).promise();

    if (!result.Payload) {
      return [];
    }

    const posts = JSON.parse(result.Payload as string);
    return JSON.parse(posts.body);
  } catch (error) {
    console.error('Error invoking Lambda:', error);
    return []; // Return an empty array if there's an error
  }
};

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Async function to fetch data and render the component
const PostsPage = async () => {
  const posts = await fetchPosts();

  return <Posts posts={posts} />;
};

export default PostsPage;
