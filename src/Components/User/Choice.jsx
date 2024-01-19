import React from 'react';
import register from "../../../public/registration.png"
import support from "../../../public/help-desk.png"
import growth from "../../../public/diagram.png"
import payment from "../../../public/calendar.png"

const Choice = () => {
    return (
        <section className='lg:my-12 my-8'>
            <h1 className='text-4xl font-bold text-center my-2'>Why you choice us?</h1>
            <h1 className='text-4xl font-bold text-center my-2'>Why you sell your product?</h1>
            <div className='lg:my-10 my-5 flex flex-wrap justify-center gap-10'>
                <div id='choice' className='flex'>
                    <img className='w-20' src={register} alt="" />
                    <h1>Free Registration</h1>
                </div>
                <div className='flex'>
                    <img className='w-20' src={growth} alt="" />
                    <h1>Business Growth</h1>
                </div>
                <div className='flex'>
                    <img className='w-20' src={payment} alt="" />
                    <h1>Timely Payment</h1>
                </div>
                <div className='flex'>
                    <img className='w-20' src={support} alt="" />
                    <h1>24/7 Support System </h1>
                </div>
            </div>

        </section>
    );
};

export default Choice;