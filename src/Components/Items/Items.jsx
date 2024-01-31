import React from 'react';
import useFetch1 from '../Hooks/useFetch1';
import { NavLink } from 'react-router-dom';

const Items = () => {
    const [data, refetch] = useFetch1("items")
    return (
        <section>
            <h1 className='text-4xl font-semibold text-center lg:my-10 my-5'>Your All Products</h1>
            <div className='flex flex-wrap justify-center gap-10'>
                {
                    data == "l" ?
                        "loading"
                        :
                        data.map((element, idx) => <ProductInfo key={idx} card={element}></ProductInfo>)

                }
            </div>

        </section>
    );
};

const ProductInfo = ({ card }) => {
    return (
        <section className="">
            <div className="card border-2 border-gray-600 w-96 p-3">
                <img src={card?.allImages[0]} className=" w-full h-80 object-contain rounded-2xl mb-5" alt="" />
                <h1 className="text-xl "><span className="font-bold">Name : </span>{card?.name}</h1>
                <h1 className="text-xl "><span className="font-bold">Brand :</span> {card?.brand}</h1>
                <p className="text-xl"><span className="font-bold">Price :</span> {card?.price}</p>
                <NavLink to={`${card._id}`} ><button className="btn bg-gray-400 hover:bg-blue-600 hover:text-white w-full text-lg my-2">Details</button></NavLink>
            </div>
        </section>
    )
}


export default Items;