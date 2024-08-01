import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

const CartItem =(props) =>{
    const {cartItemDetails} = props 
    const {imageUrl, title, price, quantity} = cartItemDetails

    return(
        <li className="cart-item">
            <img className="cart-image" src={imageUrl} alt={title} />
            <div className="cart-item-details-container">
                <div className="cart-property-title-container">
                <p className="property-cart-title">{title}</p>
                </div>
                <div className="quantity-container">
                <button type="button" className="quantity-controller-button">
                    <BsDashSquare color="#52606D" size={12} />
                </button>
                <p className="cart-quantity">{quantity}</p>
                <button type="button" className="quantity-controller-button">
                    <BsPlusSquare color="#52606D" size={12} />
                </button>
                </div>
                <div className="price-delete-container">
                <p className="cart-price">Rs {price * quantity}/-</p>
                </div>
            </div>
            <button className="delete-button" type="button">
                <AiFillCloseCircle color="#616E7C" size={20} />
            </button>
        </li>
    )
}

export default CartItem