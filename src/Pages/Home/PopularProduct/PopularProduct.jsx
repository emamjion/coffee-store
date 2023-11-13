import React, { useEffect, useState } from 'react';
import { FaCoffee, FaEye, FaPen, FaTrash } from "react-icons/fa";
import './PopularProduct.css';

const PopularProduct = () => {
    const [popularProduct, setPopularProduct] = useState([]);
    useEffect(() => {
        fetch('popularProduct.json')
        .then(res => res.json())
        .then(data => setPopularProduct(data))
    }, [])
    
    return (
        <div className='mt-[120px] popularProduct-bg'>
            <div className='flex items-center flex-col'>
                <span className='mb-2'> ---Sip & Savor--- </span>
                <h1 className='text-5xl text-[#331A15] font-semibold font-[Rancho]'>Our Popular Products</h1>
                <button className='mt-4 flex items-center gap-1 border-2 border-[#331A15] px-5 py-2 bg-[#E3B577]'>
                    <span className='text-white font-[Rancho]'>Add Coffee</span>
                    <span> < FaCoffee /> </span>
                </button>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 md:gap-6 md:px-60 mx-3 md:mx-0'>
                {
                    popularProduct.map(pp => <div
                        key={pp.id}
                        className='bg-[#F5F4F1] w-full md:h-[300px] rounded-lg'
                    >
                        <div className='md:flex items-center justify-between p-4 md:p-6 text-center md:text-left'>
                            <img src={pp.image} className='mx-auto md:mx-0' />
                            <div className='space-y-2'>
                                <div className='text-sm'>
                                    <span>Name: </span>
                                    <span className='text-[#5C5B5B]'>{pp.name}</span>
                                </div>
                                <div className='text-sm'>
                                    <span>Chef: </span>
                                    <span className='text-[#5C5B5B]'>{pp.chef}</span>
                                </div>
                                <div className='text-sm'>
                                    <span>Price: </span>
                                    <span className='text-[#5C5B5B]'>{pp.price} Taka</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center md:justify-normal flex-row md:flex-col gap-4 md:gap-0 mt-6 md:mt-0 md:space-y-3'>
                                <span className='bg-[#D2B48C] w-10 h-10 flex items-center justify-center rounded-md text-white'> < FaEye /> </span>
                                <span className='bg-[#3C393B] w-10 h-10 flex items-center justify-center rounded-md text-white'> < FaPen /> </span>
                                <span className='bg-[#EA4744] w-10 h-10 flex items-center justify-center rounded-md text-white'> < FaTrash /> </span>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularProduct;