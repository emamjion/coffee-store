import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import PopularProduct from '../PopularProduct/PopularProduct';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner/>
            {/* about */}
            <About/>
            {/* Our Popular product section */}
            <PopularProduct/>
        </div>
    );
};

export default Home;