

const Card = ({title, url, image}) => {
  return (
    
      <a 
    rel="noreferrer"
    target="_blank"
    href={url}>
      <li>
        <span>{title}</span>
        <img src={image} alt={title} />
      </li>
    </a>
   
  )
}

export default Card