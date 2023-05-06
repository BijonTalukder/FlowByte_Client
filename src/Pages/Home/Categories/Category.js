import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import BookingModal from './BookingModal/BookingModal';
import CategoryData from './CategoryData';

const Category = () => {
    const {setBooked,booked} = useContext(AuthContext);
    // const [booked,setBooked]=useState('')
    const category=useLoaderData()
    return (
        <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
           
            {
                category.map(c=><CategoryData data={c}></CategoryData>)
                
               
            }
            {
              booked &&  <BookingModal ></BookingModal>

            }
           
            
        </div>
    );
};

export default Category;