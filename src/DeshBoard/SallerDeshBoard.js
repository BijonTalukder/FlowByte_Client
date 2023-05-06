import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';
import NavBar from '../NavBar/NavBar';

const SallerDeshBoard = () => {
    const { user } = useContext(AuthContext)
    const [imgurl, imgsetUrl] = useState({})
    let today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let categoryId
    let imageurl;
    const imageHostKey = process.env.REACT_APP_imagebb_key
    console.log(imageHostKey)

    const handleProduct = event => {
        event.preventDefault()
        const form = event.target;
        const sallerName = form.sallerName.value;
        const name = form.name.value;
        const rePrice = form.rePrice.value;
        const orPrice = form.orPrice.value;
        const usetime = form.usetime.value;
        const image = form.img.files[0];
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData)
                if (imageData.success) {
                    console.log(imageData.data.url)
                    imgsetUrl(imageData)
                    imageurl = imageData.data.url;


                    const time = date;
                    console.log(imageurl)
                    console.log(imgurl.data?.url)
                    if (name.includes('ooppo')) {
                        categoryId = 1;
            
                    }
                    else if (name.includes('vivo')) {
                        categoryId = 2;
                    }
                    else {
                        categoryId = 3;
                    }
                    console.log(imageurl)
                    const products = {
                        sallerName,
                        name,
                       
                        orPrice,
                        rePrice,
                        usetime,
                     
                        time,
                        categoryId,
                        img: imageData.data.url,
                        email:user.email
            
                    }
                    console.log(products)
                    fetch('https://used-products-resale-server-bijontalukder.vercel.app/category', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(products)
            
                    })
                        .then(res => res.json())
                .then(data => {
                    console.log(data)
                toast.success('Product added !!')
                })
                }
            })


        // const time = date;
        // console.log(imageurl)
        // console.log(imgurl.data?.url)
        // if (name.includes('oppo')) {
        //     categoryId = 1;

        // }
        // else if (name.includes('vivo')) {
        //     categoryId = 2;
        // }
        // else {
        //     categoryId = 3;
        // }
        // console.log(imageurl)
        // const products = {
        //     sallerName,
        //     name,
        //     rePrice,
        //     orPrice,
        //     usetime,
        //     time,
        //     categoryId,
        //     img: imgurl.data?.url

        // }
        // console.log(products)
        // fetch('https://used-products-resale-server-bijontalukder.vercel.app/category', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(products)

        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))

    }

    return (
        <div className='flex flex-col align-middle items-center justify-center '>
            {/* <NavBar></NavBar> */}
            <h2 className='text-2xl text-cyan-700 my-5'>added your salleing product information</h2>

            <form className='grid grid-cols-1 gap-7  border p-9 justify-center' onSubmit={handleProduct}>
                <input type="text" name='sallerName' defaultValue={user.displayName} placeholder="saller Name" className="input input-bordered w-full max-w-xs" />

                <input type="text" name='name' placeholder="Brand name" className="uppercase input input-bordered w-full max-w-xs" />

                <input name="rePrice" type='text' placeholder="salling Price" className="input input-bordered w-full max-w-xs" />
                <input name="orPrice" type='text' placeholder="Orginal Price" className="input input-bordered w-full max-w-xs" />
                <input name="usetime" type='text' placeholder=" using time" className="input input-bordered w-full max-w-xs" />
                <input type="file" name='img' className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
                <button type='submit' className="btn btn-primary">Added</button>
            </form>

        </div>
    );
};

export default SallerDeshBoard;