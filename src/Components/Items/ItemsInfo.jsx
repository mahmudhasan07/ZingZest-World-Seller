import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch2 from '../Hooks/useFetch2';
import {  } from "./Items.css";

const ItemsInfo = () => {
    const id = useParams()
    const [data, refetch] = useFetch2("item", id?.id)
    const [imageNum, setimageNum] = useState(0)
    console.log(data);
    return (
        <section>
            {
                data == "l" ?
                    "loading"
                    :
                    <div>
                        <div className='flex mt-10 justify-center gap-36'>
                            <div className='w-1/3 '>
                                <img id='card-image' className='w-72 p-2 mx-auto mb-7 rounded-2xl' src={data.allImages[imageNum]} alt="" />
                                <div className='flex gap-10 border-2 justify-center'>
                                    {
                                        data?.allImages.map((element, idx) => <img key={idx} onClick={()=>setimageNum(idx)} className='w-24 h-20 object-contain' src={element}></img>)
                                    }
                                </div>

                            </div>
                            <div className=' w-1/3 p-2 space-y-2'>
                                <h1 className='text-2xl font-bold'>{data.name}</h1>
                                <h1 className='text-xl font-semibold'><span>Brand: </span>{data.brand}</h1>
                                <p className='text-xl font-semibold'><span>Price: </span>{data.price}</p>
                                <p className='text-xl font-semibold'><span>Quantity: </span>{data.quantity}</p>
                                <p className='text-xl font-semibold'><span>Size: </span>{data.size.map((element, idx) => <span key={idx}>{element},</span>)}</p>
                                <p className='text-xl font-semibold'><span>Color: </span>{data.color}</p>
                                <p className='text-xl font-semibold'><span>Product Added Date: </span>{data.pAddTime}</p>
                                <div className='space-x-3'>
                                    <button className='btn text-lg bg-gray-300 hover:bg-blue-600 hover:text-white'>Update Product</button>
                                    <button className='btn text-lg bg-gray-300 hover:bg-blue-600 hover:text-white'>Delete Product</button>
                                </div>
                            </div>
                        </div>
                        <div className='ml-10 mt-10'>
                            <h1 className='text-3xl font-semibold underline'>Product Features</h1>
                            {
                                data.details.map((item, idx)=> <li className='my-2' key={idx}>{item}</li>)
                            }
                        </div>
                    </div>
            }
        </section>
    );
};

export default ItemsInfo;