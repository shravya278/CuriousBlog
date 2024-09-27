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
    <div class="card w-full glass">
    <figure>
      <img style={{minHight:'400px'}} className={'w-full'}
        src={coverImage.node.sourceUrl}
        alt={title} />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <Date dateString={date} />
      <Avatar author={author} />
      <p>{title}</p>
      <div class="card-actions justify-end">
        <Link class="btn btn-primary" href={`/posts/${slug}`}>Learn more!</Link>
      </div>
    </div>
  </div>
  )
}
