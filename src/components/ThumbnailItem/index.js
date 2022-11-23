import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem, changeImage} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = thumbnailItem

  const onclickImage = () => {
    changeImage(imageUrl, imageAltText)
  }

  return (
    <li className="list-container">
      <button type="button" className="button-style" onClick={onclickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
