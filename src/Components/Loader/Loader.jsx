import React from 'react';
import { ColorRing } from 'react-loader-spinner'


const Loader = () => {
    return (
        <section className='mx-auto absolute left-[40%] top-[15%] text-center'>
            
            <ColorRing
                visible={true}
                height="500"
                width="500"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["blue", "blue", "blue", "blue", "blue"]}
            />
        </section>
    );
};

export default Loader;