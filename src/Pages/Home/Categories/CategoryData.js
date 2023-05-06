import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const CategoryData = ({data}) => {
  const {setBooked}= useContext(AuthContext)
    const {name,img,sallerName,location,rePrice,orPrice,usetime,time} = data;
    console.log(data.length)
    return (
        <div className="my-4 card w-25 bg-base-100 shadow-xl">
  <figure><img className='max-h-56' src={img} alt="mobile" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className='grid grid-cols-2 text-left'>
      <p>Saller:{sallerName}</p>
      <p>Location:{location}</p>
      <p >Regular Price:<span >{orPrice}</span></p>
      <p>Price: {rePrice}</p>
      <p>{time}</p>
      <p>Used: {usetime} year</p>

    </div>
    <div className="card-actions justify-end">
    <label htmlFor="my-modal-3" onClick={()=>setBooked(data)}  className="btn btn-success">Buy Now</label>

     

    </div>
  </div>
</div>
    );
};

export default CategoryData;