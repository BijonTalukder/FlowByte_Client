import React, { useState } from 'react';
import AllData from './AllData';
import Banner from './Banner/Banner'
import Categories from './Categories/Categories';
import InfoSection from './InfoSection/InfoSection';

const Home = () => {
    // const [booked,setBooked]=useState('')
    return (
        <div>
            <section className='mb-3'>
                <Banner></Banner>
                
            </section>
            <section>
                <InfoSection></InfoSection>

            </section>
            <section>
                <Categories ></Categories>
            </section>
            <section>
                <AllData ></AllData>
            </section>
            
            
        </div>
    );
};

export default Home;