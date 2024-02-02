import React from 'react';
import { ColorRing } from 'react-loader-spinner'


const Loader = () => {
    return (
        <section className='mx-auto text-center'>
            
            <ColorRing
                visible={true}
                height="300"
                width="300"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["blue", "blue", "blue", "blue", "blue"]}
            />
        </section>
    );
};

export default Loader;