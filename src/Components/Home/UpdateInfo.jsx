import React from 'react';
import { IoMdClose } from "react-icons/io";


const UpdateInfo = ({ data }) => {
    // console.log(data);

    const handleupdate = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const number = from.number.value
        const address = from.address.value
        const update = { name, email, number, address }
        console.log(update);
    }

    const handlemodalclose = () => {
        document.getElementById(`${data}`).style.display = "none"
    }
    return (
        <section className='space-y-5'>
            <button onClick={handlemodalclose} className='flex ml-auto text-2xl border-2'><IoMdClose /></button>
            <h1 className='text-2xl font-semibold text-center mb-5'>Update Your Info </h1>
            <form method='dialog' action="" onSubmit={handleupdate}>
                <div className='flex my-5 gap-10'>
                    <div >
                        <label htmlFor='name'>Name:</label> <br />
                        <input type="text" name="name" className='border-2 border-gray-200 rounded-xl p-2 w-64' id="" />
                    </div>
                    <div>
                        <label htmlFor='name'>Email:</label> <br />
                        <input type="text" name="email" className='border-2 border-gray-200 rounded-xl p-2 w-64' id="" />
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
                <div className='text-center'>
                    <button className='btn bg-blue-700 text-white hover:bg-blue-700'>Update</button>
                </div>
            </form>
        </section>
    );
};

export default UpdateInfo;