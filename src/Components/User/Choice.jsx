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
            <div className='lg:my-16 my-5 flex flex-wrap justify-center gap-10'>
                <div id='choice' className='flex'>
                    <img className='w-24' src={register} alt="" />
                    <h1 className='text-2xl text-center mx-5 font-semibold my-auto'>Free  <br />Registration</h1>
                </div>
                <div className='flex'>
                    <img className='w-24' src={growth} alt="" />
                    <h1 className='text-2xl text-center mx-5 font-semibold my-auto'>Business <br /> Growth</h1>
                </div>
                <div className='flex'>
                    <img className='w-24' src={payment} alt="" />
                    <h1 className='text-2xl text-center mx-5 font-semibold my-auto'>Timely <br /> Payment</h1>
                </div>
                <div className='flex'>
                    <img className='w-24' src={support} alt="" />
                    <h1 className='text-2xl text-center mx-5 font-semibold my-auto'>24/7 Support <br /> System </h1>
                </div>
            </div>

        </section>
    );
};

export default Choice;