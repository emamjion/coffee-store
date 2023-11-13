import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner-background flex items-center justify-end text-white'>
            <div className='md:mr-[335px] px-4 md:px-0'>
                <h1 className='text-5xl mb-4 heading'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='mb-8'>
                    It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.
                </p>
                <button className='px-5 py-2 rounded-md bg-[#E3B577] text-black font-[Rancho] text-xl'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;