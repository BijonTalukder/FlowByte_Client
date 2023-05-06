import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingModal from './Categories/BookingModal/BookingModal';
import CategoryData from './Categories/CategoryData';

const AllData = () => {
    const [datas,setData]=useState([])
    const {setBooked,booked} = useContext(AuthContext);
    useEffect(()=>{
        fetch('https://used-products-resale-server-bijontalukder.vercel.app/all')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                datas.map(data=><CategoryData data={data}></CategoryData>)
            }
             {
              booked &&  <BookingModal ></BookingModal>

            }
            
        </div>
    );
};

export default AllData;