import React from 'react';
import about1 from '../../../assets/images/icons/1.png';
import about2 from '../../../assets/images/icons/2.png';
import about3 from '../../../assets/images/icons/3.png';
import about4 from '../../../assets/images/icons/4.png';

const About = () => {
    return (
        <div className='bg-[#ECEAE3] md:h-[300px]'>
            <div className='md:flex items-center justify-around md:px-60 h-full px-4 pt-6 md:pt-0 space-y-6'>
                <div>
                    <img src={about1} />
                    <h1 className='mt-4 text-2xl font-[Rancho]'>Awesome Aroma</h1>
                    <p className='mt-2 text-sm'>
                        You will definitely be a fan of the design <br /> & aroma of your coffee
                    </p>
                </div>
                <div>
                    <img src={about2} />
                    <h1 className='mt-4 text-2xl font-[Rancho]'>High Quality</h1>
                    <p className='mt-2 text-sm'>
                        We served the coffee to you maintaining <br /> the best quality
                    </p>
                </div>
                <div>
                    <img src={about3} />
                    <h1 className='mt-4 text-2xl font-[Rancho]'>Pure Grades</h1>
                    <p className='mt-2 text-sm'>
                        The coffee is made of the green coffee <br /> beans which you will love
                    </p>
                </div>
                <div className='pb-6 md:pb-0'>
                    <img src={about4} />
                    <h1 className='mt-4 text-2xl font-[Rancho]'>Proper Roasting</h1>
                    <p className='mt-2 text-sm'>
                        Your coffee is brewed by first roasting <br /> the green coffee beans
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;