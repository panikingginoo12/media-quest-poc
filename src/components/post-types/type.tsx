import { roboto_condensed } from '@/utils/fonts';

const PostType = ({ type }: { type: string }) => {
  return (
    <div className={`${roboto_condensed.className} bg-blue-main px-1.5 py-1 text-light-main rounded-[5px] font-extrabold text-[11px] md:text-xs uppercase`}>{type}</div>
  )
}

export default PostType