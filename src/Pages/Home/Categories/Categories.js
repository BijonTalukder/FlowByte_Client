import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
   // pass TLijSUwWzwZpJ7iF
   //name FlowByte
    const categories=[
        {
            "categoryId":1,
            "name":"Apple",
            "catName":"fruite",          
            "img": "https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg",
            "location":"dhaka",
            "rePrice":"10000",
            "orPrice":"20000",
            "usetime":"1",
            "sallerName":"bijon",
            "time":""
        },
        {
            "categoryId":1,
            "name":"Orange",
            "catName":"fruite",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg",
            "location":"dhaka",
            "rePrice":"10000",
            "orPrice":"20000",
            "usetime":"1",
            "sallerName":"bijon",
            "time":""
        },
        {
            "categoryId":1,
            "name":"Banana",
            "catName":"fruite",
            "img": "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg",
            "location":"dhaka",
            "rePrice":"10000",
            "orPrice":"20000",
            "usetime":"1",
            "sallerName":"bijon",
            "time":""
        },
        {
            "categoryId":1,
            "name":"watermelon",
            "catName":"fruite",
            "img": "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/11/watermelon-1296x728-header-1.jpg?w=1155&h=1528",
            "location":"dhaka",
            "rePrice":"10000",
            "orPrice":"20000",
            "usetime":"1",
            "sallerName":"bijon",
            "time":""
        },
      
        {
            "categoryId":2,
            "name":"fish",
            "catName":"fish",
            "img":"https://pngimg.com/uploads/fish/fish_PNG25174.png",
            "location":"dhaka",
            "rePrice":"10000",
            "orPrice":"20000",
            "usetime":"1",
            "sallerName":"bijon",
            "time":""
        },
        {
            "categoryId":2,
            "name":"",
            "catName":"fish",
            "img":"https://pngimg.com/uploads/fish/fish_PNG25172.png",
            "location":"dhaka",
            "rePrice":"10000",
            "orPrice":"20000",
            "usetime":"1",
            "sallerName":"bijon",
            "time":""
        },
        {
            "categoryId":3,
            "name":"moshur dal",
            "catName":"dal",
            "img":"https://chaldn.com/_mpimage/moshur-dal-deshi-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47048&q=low&v=1&m=400",
          "location":"dhaka",
           "rePrice":"10000",
           "orPrice":"20000",
        "usetime":"1",
       "sallerName":"bijon",
          "time":""
        },
        {
            "categoryId":3,
            "catName":"dal",
            "name":"Mug dal",
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXDIHEZerTjJsht_yKf5BFyygTEC3Sz7a6Q&usqp=CAU",
           "location":"dhaka",
           "rePrice":"10000",
           "orPrice":"2000",
        "usetime":"1",
        "sallerName":"bijon",
       "time":""
        }

    ]
    return (
        <div className='grid gap-8   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            

           
                
            <Link className=' px-12 py-5 rounded-sm bg-red-200'   to='/category/1'>OPPO</Link>

           
           
            <Link  className=' px-12 py-5 rounded-sm bg-lime-700' to='/category/2'>VIVO</Link>

           
            <Link to='/category/3' className=' px-12 py-5 rounded-lg bg-blue-600'>
            HUAWEI
            </Link>
            
        </div>
    );
};

export default Categories;