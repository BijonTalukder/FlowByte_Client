import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import ChechoutForm from './ChechoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_pk);
const Payment = () => {
    const data = useLoaderData();
    console.log(data)
   

    return (
        <div className='mx-auto'>
       <h3 className='text-3xl'> payment for {data.itemName}</h3>
       <p>Please Pay {data.price} $</p>
       <div className='w-96 my-12'>
       <Elements stripe={stripePromise}>
      <ChechoutForm 
      data={data}
      />
    </Elements>
       </div>
        </div>
    );
};

export default Payment;