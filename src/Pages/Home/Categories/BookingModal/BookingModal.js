import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast'

const BookingModal = () => {
  
  let today = new Date();
  const  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


  const {user,booked,setBooked}= useContext(AuthContext)
  const handleBooking=event=>{
    event.preventDefault()
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const phone=form.phone.value;
    const location =form.location.value;
    const price=form.price.value;
    console.log(name,email,phone,location)
    const bookedDatabase={
      itemName:booked.name,
      name,
      email,
      phone,
      location,
      price
      
    }
    fetch('https://used-products-resale-server-bijontalukder.vercel.app/booking',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(bookedDatabase)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        toast.success('Booking successfull')
        setBooked(null)
      }
      form.reset()
    })

  }
  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Congratulations</h3>
          <div className='w-full'>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mx-auto'>
            <input type="text" disabled placeholder="Type here" value={booked.name} className="input input-bordered w-full max-w-xs" />
           
            <input name='name' disabled defaultValue={user?.displayName} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
            <input type='email' disabled defaultValue={user?.email} name='email' placeholder="email" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='phone' placeholder="phone" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='price' defaultValue={booked.rePrice} placeholder="Price" className="input input-bordered w-full max-w-xs" />

            <input type="text" name='location' placeholder="location" className="input input-bordered w-full max-w-xs" />
            <button className="input input-bordered w-full max-w-sm btn-success" type='submit'>Submit</button>
          </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default BookingModal;