import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch2 from '../Hooks/useFetch2';
import { } from "./Items.css";
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import useAxios, { AxiosSource } from '../Axios/useAxios';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemsInfo = () => {
    const id = useParams()
    const [data, refetch] = useFetch2("item", id?.id)
    const [imageNum, setimageNum] = useState(0)
    const axiosLink = useAxios(AxiosSource)
    // console.log(data);
    useEffect(() => {
        AOS.init()
    }, [])



    const handleDelete =(id)=>{
        console.log(id);
        axiosLink.delete(`/delete-item/${id}`)
        .then(res=>{
            // console.log(res);
            toast('Successfully delete your product 🗑️🗑️', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        })
        .catch(err=>{
            console.log(err);
        })
        

    }

    return (
        <section>
            {
                data == "l" ?
                    "loading"
                    :
                    <div>
                        <div className='flex mt-10 flex-wrap justify-around gap-10 '>
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-delay={300}
                                data-aos-easing="ease-in-sine" className='lg:w-1/3 bg-slate-50  rounded-2xl pb-4'>
                                <img id='card-image' className='lg:w-72 w-52 p-2 mx-auto mb-7 rounded-2xl' src={data.allImages[imageNum]} alt="" />
                                <div className='flex overflow-auto gap-10 border-t-2 py-1 justify-center'>
                                    {
                                        data?.allImages.map((element, idx) => <img key={idx} onClick={() => setimageNum(idx)} className='w-24 h-20 object-contain cursor-pointer' src={element}></img>)
                                    }
                                </div>

                            </div>
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-delay={400}
                                data-aos-easing="ease-in-sine" className=' lg:w-1/3 p-2 space-y-2'>
                                <h1 className='lg:text-2xl text-xl font-bold'>{data.name}</h1>
                                <h1 className='text-xl font-semibold'><span>Brand: </span>{data.brand}</h1>
                                <p className='text-xl font-semibold'><span>Price: </span>{data.price}</p>
                                <p className='text-xl font-semibold'><span>Quantity: </span>{data.quantity}</p>
                                <p className='text-xl font-semibold'><span>Size: </span>{data.size.map((element, idx) => <span key={idx}>{element},</span>)}</p>
                                <p className='text-xl font-semibold'><span>Color: </span>{data.color}</p>
                                <p className='text-xl font-semibold'><span>Product Added Date: </span>{data.pAddTime}</p>
                                <div className='lg:space-x-3 space-y-2 '>
                                    <button  className='btn lg:text-lg bg-gray-300 hover:bg-blue-600 hover:text-white'>Update Product</button>
                                    <button onClick={()=>handleDelete(data?._id)} className='btn lg:text-lg bg-gray-300 hover:bg-blue-600 hover:text-white'>Delete Product</button>
                                </div>
                            </div>
                        </div>
                    
                        <div className='ml-10 py-10'>
                            <h1 className='text-3xl font-semibold underline'>Product Features</h1>
                            {
                                data.details.map((item, idx) =>
                                    <li data-aos="fade-right"
                                        data-aos-delay={(idx+1)*250}
                                        data-aos-easing="ease-in-sine" className='my-2' key={idx}>{item}</li>)
                            }
                        </div>
                        
                    </div>
            }
        </section>
    );
};

export default ItemsInfo;