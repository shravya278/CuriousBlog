import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <>
    <div>
      <figure>
      <img style={{minHeight:'400px'}} className={'w-full'}
        src={coverImage.node.sourceUrl}
        alt={title} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <Avatar author={author} />
      <div className="card-actions justify-end">
        <Link className="btn btn-primary" href={`/posts/${slug}`}>Learn more!</Link>
      </div>
    </div>
    </div>


    </>
  )
}
