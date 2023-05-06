import React, { useEffect, useState } from 'react';
import {CardElement,useStripe,useElements}  from '@stripe/react-stripe-js'
import toast from 'react-hot-toast';

const ChechoutForm = ({data}) => {
    const {rePrice,email} = data;
    const [clientSecret,setClientSecret ] = useState('')
    const [cardError,setCartError] = useState('')
    const stripe = useStripe()
    const elements=useElements()
    const payment= ()=>{
      toast.success('Order Done')

    }

    useEffect(()=>{
      fetch("http://localhost:5000/create-payment-intent",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({rePrice})

      })
      .then(res=>res.json())
      .then(data=>setClientSecret(data))

    },[rePrice])
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
      
            return;
          }
          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }
          const {error ,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
          })
          if(error){
            setCartError(error.message)
          }
          else{
            setCartError(' ')
          }
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: 'Jenny Rosen',
                  email:email
                },
              },
            },
          );
          if(confirmError){
            setCartError(confirmError.message)
            return;

          }

    }
    return (
        <div className=' rounded-sm p-7 mx-auto bg-slate-200' >
                <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-sm mt-4 btn-primary'onClick={payment} type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    <p className='text-red-500'>{cardError}</p>
            
        </div>
    );
};

export default ChechoutForm;