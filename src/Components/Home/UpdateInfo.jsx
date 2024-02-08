import axios from 'axios';
import React, { useContext } from 'react';
import { IoMdClose } from "react-icons/io";
import { Context } from '../ContextAPI/ContextAPI';
import useAxios, { AxiosSource } from '../Axios/useAxios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const UpdateInfo = () => {
    const {user} = useContext(Context)
    const axiosLink = useAxios(AxiosSource)

    const handleupdate = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const number = from.number.value
        const address = from.address.value
        const image = from.image.files[0]
        if(image){
            axios.post('https://api.imgbb.com/1/upload?key=890925a8320c10ec4aec72015adb4563', {image},
            {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })
            .then(res => {
                const hostImage = res.data.data.display_url
                const update = { name, email, number, address, hostImage }
                axiosLink.put("/seller-users", update)
                .then(res=>{
                    // console.log(res.data);
                    Swal.fire({
                        icon: "success",
                        title: "Add your Info ",
                        text: "Successfully add your info",
                    });
                    // navigate("/")
                })
                .catch(error=>{
                    console.log(error);
                })
            })
            .catch(error => {
                console.log(error);
            })
        }else{
            const update = { name, email, number, address }
            console.log(update);
                axiosLink.patch("/seller-users", update)
                .then(res=>{
                    // console.log(res.data);
                    Swal.fire({
                        icon: "success",
                        title: "Add your Info ",
                        text: "Successfully add your info",
                    });
                    // navigate("/")
                })
                .catch(error=>{
                    console.log(error);
                })
        }

    }

    const handlemodalclose = () => {
        document.getElementById('modal').style.display = "none";
    }
    return (
        <section className='space-y-5'>
            <button onClick={handlemodalclose} className='flex ml-auto text-2xl border-2'><IoMdClose /></button>
            <h1 className='text-2xl font-semibold text-center mb-5'>Update Your Info </h1>
            <form  action="" onSubmit={handleupdate}>
                <div className='flex my-5 gap-10'>
                    <div >
                        <label htmlFor='name'>Name:</label> <br />
                        <input  type="text" name="name" className='border-2 border-gray-200 rounded-xl p-2 w-64' id="" />
                    </div>
                    <div>
                        <label htmlFor='name'>Email:</label> <br />
                        <input type="text" readOnly value={user?.email} name='email' className='border-2 border-gray-200 rounded-xl p-2 w-64' id="" />
                    </div>
                </div>
                <div className='flex my-5 gap-10'>
                    <div >
                        <label htmlFor='name'>Phone Number:</label> <br />
                        <input type="number" name="number" className='border-2 border-gray-200 rounded-xl p-2 w-64' id="" />
                    </div>
                    <div>
                        <label htmlFor='name'>Shop Address:</label> <br />
                        <input type="text" name="address" className='border-2 border-gray-200 rounded-xl p-2 w-64' id="" />
                    </div>
                </div>
                <div className='my-5'>
                    <label htmlFor="">Upload Your image</label> <br />
                    <input type="file" name='image' />
                </div>
                <div className='text-center'>
                    <button className='btn bg-blue-700 text-white hover:bg-blue-700'>Update</button>
                </div>
            </form>
        </section>
    );
};

export default UpdateInfo;