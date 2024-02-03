import React, { useContext, useState } from 'react';
import useFetch1 from '../Hooks/useFetch1';
import { NavLink } from 'react-router-dom';
import { Context } from '../ContextAPI/ContextAPI';
import Loader from '../Loader/Loader';
import {} from "./items.css"
import { ColorRing } from 'react-loader-spinner';
import useFetch2 from '../Hooks/useFetch2';

const Items = () => {
    const {user} = useContext(Context)
    const [sort, setsort] = useState("default")
    const [data, refetch] = useFetch2("items",user?.email,sort)


    const handleSort =(e)=>{
        e.preventDefault
        const data = e.target.value
        console.log(data);
        setsort(data)
    }

    return (
        <section>
            <h1 className='text-4xl font-semibold text-center lg:my-10 my-5'>Your All Products</h1>
                {/* <Loader></Loader> */}

                <div className='flex justify-end mr-14'>
                    <select onChange={handleSort} className='border-2 p-2 font-semibold rounded-xl border-gray-400' name="" id="">
                    <option value="default">Default</option>
                    <option value="sorta-b">Latest Product</option>
                    <option value="sortb-a">Oldest Product</option>

                    </select>
                </div>
            
            <div className='flex flex-wrap justify-center my-10 gap-10'>
                {
                    data == "l" ?
                    <Loader></Loader>
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
            <div className="card border-2 border-gray-600 h-full w-80 p-3">
                <img  src={card?.allImages[0]} className=" w-64 h-64 mx-auto object-contain rounded-2xl mb-5" alt="" />
                <h1 className="text-xl "><span className="font-bold">Name : </span>{card?.name}</h1>
                <h1 className="text-xl "><span className="font-bold">Brand :</span> {card?.brand}</h1>
                <p className="text-xl"><span className="font-bold">Price :</span> {card?.price}</p>
                <NavLink className={"mt-auto"} to={`${card._id}`} ><button className="btn bg-gray-400 hover:bg-blue-600 hover:text-white w-full text-lg my-2">Details</button></NavLink>
            </div>
        </section>
    )
}


export default Items;