import {useContext, useState} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const paymentOptionsList = [
  {
    id: 'CARD',
    displayText: 'Card',
    isDisabled: true,
  },
  {
    id: 'NET BANKING',
    displayText: 'Net Banking',
    isDisabled: true,
  },
  {
    id: 'UPI',
    displayText: 'UPI',
    isDisabled: false,
  },
  {
    id: 'WALLET',
    displayText: 'Wallet',
    isDisabled: true,
  },
]
const Payment = () => {
  const {cartList} = useContext(CartContext)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const updatePaymentMethod = event => {
    const {id} = event.target
    setPaymentMethod(id)
  }

  const onOrderPlaced = () => setIsOrderPlaced(true)

  const getTotalPrice = () =>
    cartList.reduce((acc, item) => acc * item.quantity * item.price, 0)

  const renderPaymentMethodInput = () => (
    <ul className="payment-method-inputs">
      {paymentOptionsList.map(eachMethod => (
        <li key={eachMethod.id} className="payment-method-input-container">
          <input
            className="payment-method-input"
            id={eachMethod.id}
            type="radio"
            name="paymentMethod"
            disabled={eachMethod.isDisabled}
            onChange={updatePaymentMethod}
          />
          <label
            className={`payment-method-label ${
              eachMethod.isDisabled ? 'disabled-label' : ''
            }`}
            htmlFor={eachMethod.id}
          >
            {eachMethod.displayText}
          </label>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="payments-container">
      {isOrderPlaced ? (
        <p className="success-message">
          Your Booking is Confirmed
        </p>
      ) : (
        <>
          <h1 className="payment-details">Payment Details</h1>
          <p className="payment-method">Payment Method</p>
          {renderPaymentMethodInput()}
          <div>
            <p className="booking-details">Booking Details</p>
            <p>Quantity: {cartList.length}</p>
            <p>Total Price: RS {getTotalPrice()}/-</p>
          </div>
          <button
            type="button"
            className="book-button"
            disabled={paymentMethod === ''}
            onClick={onOrderPlaced}
          >
            Confirm Booking
          </button>
        </>
      )}
    </div>
  )
}
export default Payment
