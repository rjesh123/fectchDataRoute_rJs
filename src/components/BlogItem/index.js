import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogData

  return (
    <Link to={`/blogs/${id}`} className="link-item-container">
      <div className="blog-item-container">
        <img src={imageUrl} alt="alt" className="blog-item-img" />
        <div className="blog-item-description">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt="author" className="author-img" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
