import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (    
    <div className="card w-full glass">
    <figure>
      <img style={{minHeight:'400px'}} className={'w-full'}
        src={coverImage.node.sourceUrl}
        alt={title} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <Date dateString={date} />
      <Avatar author={author} />
      <p>{title}</p>
      <div className="card-actions justify-end">
        <Link className="btn btn-primary" href={`/posts/${slug}`}>Learn more!</Link>
      </div>
    </div>
  </div>
  )
}
