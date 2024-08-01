import "./index.css"

const RentCard =(props) =>{
    const {propertyData} = props
    const {imageUrl, title, description, price} = propertyData

    return(
        <li className="rentItem">
            <img src={imageUrl} alt="rent" className="property-image"/>
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
            <div className="price-button">
            <p className="price">Rs {price}/-</p>
            <button className="button">Add to Cart</button>
            </div>
        </li>
    )
}

export default RentCard