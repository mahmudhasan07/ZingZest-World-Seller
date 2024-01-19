import React from 'react';

const UpdateInfo = () => {
    return (
        <section className='space-y-5'>
            <h1>Update Your Info </h1>
            <form action="">
                <div className='flex my-5 gap-10'>
                <div >
                    <label htmlFor='name'>Name:</label> <br />
                    <input type="text" name="name" className='border-2 border-gray-200 rounded-xl p-2 w-64' id="" />
                </div>
                <div>
                    <label htmlFor='name'>Email:</label> <br />
                    <input type="text" name="name" className='border-2 border-gray-200 rounded-xl p-2 w-64' id="" />
                </div>
                </div>
                <div className='flex my-5 gap-10'>
                <div >
                    <label htmlFor='name'>Phone Number:</label> <br />
                    <input type="text" name="name" className='border-2 border-gray-200 rounded-xl p-2 w-64' id="" />
                </div>
                <div>
                    <label htmlFor='name'>Shop Address:</label> <br />
                    <input type="text" name="name" className='border-2 border-gray-200 rounded-xl p-2 w-64' id="" />
                </div>
                </div>
                <div>
                    <button className='btn'>Update</button>
                </div>
            </form>
        </section>
    );
};

export default UpdateInfo;