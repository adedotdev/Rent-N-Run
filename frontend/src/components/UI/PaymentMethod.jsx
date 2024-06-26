import React from 'react'
import masterCard  from '../../assets/all-images/master-card.jpg'
import paypal from '../../assets/all-images/paypal.jpg'
import '../../styles/payment-method.css'

const PaymentMethod = () => {
  return <>
 
  <div className="payment mt-3 d-flex align-items-center justify-content-between">
    <label htmlFor="" className="d-flex align-itens-center gap-2">
        <input type="radio" name="" id="" /> Credit Card
    </label>

    <img src={masterCard} alt="" />
  </div>

  <div className="payment mt-3 d-flex align-items-center justify-content-between">
    <label htmlFor="" className="d-flex align-itens-center gap-2">
        <input type="radio" name="" id="" /> PayPal
    </label>

    <img src={paypal} alt="" />
  </div>
  <div className='payment text-end mt-5'>
    <button>
       Reserve Now 
    </button>
  </div>
  </>
}

export default PaymentMethod
