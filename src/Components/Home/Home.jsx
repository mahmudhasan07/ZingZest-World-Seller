import { useContext, useEffect, useRef, useState } from "react";
import seller from "../../../public/seller.json";
import Lottie from "lottie-react";
import UpdateInfo from "./UpdateInfo";
import { Context } from "../ContextAPI/ContextAPI";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import Products from "./Products";
import { useParams } from "react-router-dom";



const Home = () => {

    const { user } = useContext(Context)
    const axiosLink = useAxios(AxiosSource)
    const [sellerUser, setSellerUser] = useState([])
    const id = useParams()
    // console.log(user);
    useEffect(() => {
        const email = user?.email
        if (email) {
            axiosLink.get(`/seller-users/${email}`,)
                .then((res) => {
                    // console.log(res);
                    setSellerUser(res.data)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [axiosLink, user])

    // console.log(sellerUser);

    const handlemodal = () => {
        document.getElementById("modal").style.display = "block"
    }

    return (
        <section className="relative">
            {/* //! Seller Banner Section   */}
            <div className="flex lg:my-10  justify-around">
                <div className="w-2/4">

                    <div className=" rounded-xl border-2 border-gray-300 bg-gray-200 flex h-fit p-2 gap-10">
                        {
                            sellerUser?.image ?
                                <img className="relative w-60 h-60 rounded-full object-contain bg-white" src={sellerUser.image} alt="" />
                                :
                                <img className="relative w-60 h-60 rounded-full object-contain bg-white" src="https://i.ibb.co/vqxpV3k/no-profile.png" alt="" />
                        }
                        <h1 className="text-3xl my-auto  border-black font-bold">
                            <h1 className="text-4xl my-3">Welcome Back</h1>
                            {
                                sellerUser ?

                                    <p>{sellerUser.name}</p>
                                    :
                                    ""
                            }</h1>
                    </div>

                    {/* //! Seller Product details section */}

                    <div className="my-10 ">
                        <h1 className="text-3xl font-bold text-center my-10">Your Products</h1>
                        <Products name={sellerUser?.name}></Products>
                    </div>

                </div>
                <div className="w-1/4 h-fit border-2 space-y-2 border-gray-300 rounded-2xl p-3 bg-gray-200">
                    <div className="flex my-5 justify-between text-2xl font-semibold"><h1>Your Info</h1> <button onClick={handlemodal} className="text-blue-700 underline">Edit</button></div>
                    <dialog id="modal" className="my-auto rounded-2xl bg-opacity-25 top-0 p-5">
                        <UpdateInfo data={"modal"} name={sellerUser?.name}></UpdateInfo>
                    </dialog>
                    <h1 className="text-xl font-semibold">Name</h1>
                    <p className="text-lg">
                        {
                            sellerUser?.name ?
                                sellerUser?.name
                                :
                                "No Name"
                        }
                    </p>
                    <h1 className="text-xl font-semibold">Email</h1>
                    <p className="text-lg">
                        {
                            sellerUser?.email ?
                                sellerUser.email
                                :
                                "No Email"
                        }
                    </p>
                    <h1 className="text-xl font-semibold">Mobile Number </h1>
                    <p className="text-lg">
                        {
                            sellerUser?.number ?
                                sellerUser.number
                                :
                                "No Number"
                        }
                    </p>

                    <h1 className="text-xl font-semibold">Shop Address </h1>
                    <p className="text-lg">
                        {
                            sellerUser?.address ?
                                sellerUser.address
                                :
                                "No Address"
                        }
                    </p>

                    <div>
                        <Lottie animationData={seller}></Lottie>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Home;