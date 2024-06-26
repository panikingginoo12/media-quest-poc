import { roboto_condensed } from '@/utils/fonts';

const PostTypeLeague = ({ league }: { league: string }) => {
  return (
    <div className={`${roboto_condensed.className} bg-yellow-main px-1.5 py-1 text-dark-003 rounded-[5px] font-extrabold text-[11px] md:text-xs uppercase`}>{league}</div>
  )
}

export default PostTypeLeague