import Header from '../Header'
import CartListView from '../CartListView'
import Popup from "reactjs-popup"
import Payment from '../Payment'

import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <div className="cart-content-container">
        <h1 className="cart-heading">My Cart</h1>
        <CartListView />
      </div>
    </div>
    <div className='cost-container'>
        <h1 className='total-cost'>Total Costs: <span>Rs 0/-</span></h1>
        <Popup model trigger={
          <div>
          <button type='button' className='check-btn'>
            Checkout
          </button>
          </div>
        }
        position="bottom-left"
        >
            {close => <Payment close={close} />}
        </Popup>
    </div>
  </>
)

export default Cart
