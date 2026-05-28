interface ItemProps {
  image?: string;
  title: string;
  description?: string;
  count: number;  
}

export default function Item({ image, title, description, count }: ItemProps) {
  return(
    <>
      <img src={image} />
      <div className="itemHeader">
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
      <p>{count}</p>
    </>
  )
}