import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import BookingModal from '../Pages/Home/Categories/BookingModal/BookingModal';

const DeshBoard = () => {
    const [orders, setOrder] = useState([])
    const { user } = useContext(AuthContext)
    // const []=useAdmin()
    useEffect(() => {

        fetch(`https://used-products-resale-server-bijontalukder.vercel.app/booking?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [user.email])
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                       {
                        orders.map((order,index)=> <tr>
                            <th>{index+1}</th>
                            <td>{order.name}</td>
                            <td>{order.itemName}</td>
                            <td>{order.price}</td>
                            {
                                // user/payment/:id
                                order.price && !order.paid && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-primary btn-sm'>Pay</button></Link>
                            }
                            {
                          order.price && !order.paid && <span className='text-success'>Paid</span>


                            }
                        </tr>
)
                       }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default DeshBoard;