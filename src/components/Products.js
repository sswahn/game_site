

export default function Products({ data }) {
  return (
    <div className="products">
      {data.user.uploads.map((upload, index) => {
        const url = `/games/${upload.title.toLowerCase().replaceAll(' ', '-')}`
        return (
          <div className="item" key={index}>
            <a href={url}>
              <img src={upload.title_art} alt={upload.title_art} />
            </a>
            <p>
              <span>{upload.title}</span>
              <span>{upload.price}</span>
            </p>
          </div>
      )})}
    </div>
  )
}