import { useContext, useEffect, useRef, useState } from "react";
import seller from "../../../public/seller.json";
import Lottie from "lottie-react";
import UpdateInfo from "./UpdateInfo";
import { Context } from "../ContextAPI/ContextAPI";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import Products from "./Products";
import { useParams } from "react-router-dom";
import useFetch2 from "../Hooks/useFetch2";
import businessOnline from "../../../public/businessOnline.json"



const Home = () => {

    const { user } = useContext(Context)
    const axiosLink = useAxios(AxiosSource)
    const [sellerUser, setSellerUser] = useState([])
    const email = user?.email
    // const [data, refetch] = useFetch2("seller-users",email,"sorta-b")
    // console.log(data);
    useEffect(() => {
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
    }, [axiosLink, email])

    // console.log(sellerUser);

    const handlemodal = () => {
        document.getElementById("modal").style.display = "block"
    }

    return (
        <section className="relative">
            {/* //! Seller Banner Section   */}
            <div className="flex flex-wrap lg:py-10  justify-around">
                <div className="lg:w-2/4 text-center">

                    <div className=" rounded-xl border-2 border-gray-300 bg-gray-50 flex flex-wrap h-fit p-2 justify-center lg:gap-10">
                        {
                            sellerUser?.image ?
                                <img className="relative w-60 h-60 rounded-full object-contain bg-white" src={sellerUser.image} alt="" />
                                :
                                <img className="relative w-60 h-60 rounded-full object-contain bg-white" src="https://i.ibb.co/vqxpV3k/no-profile.png" alt="" />
                        }
                        <div className="text-3xl my-auto  border-black font-bold">
                            <h1 className="text-4xl my-3">Welcome Back</h1>
                            {
                                sellerUser ?

                                    <p>{sellerUser.name}</p>
                                    :
                                    ""
                            }</div>
                    </div>

                    {/* //! Seller Product details section */}

                    <div className="">

                        <Products name={sellerUser?.name}></Products>
                    </div>

                </div>
                <div className="lg:w-1/4 h-fit border-2 space-y-2 border-gray-300 bg-gray-50 rounded-2xl p-3 ">
                    <div className="my-5">
                        <h1 className="text-2xl font-semibold text-center">Make Your Shop Online</h1>
                        <Lottie animationData={businessOnline}></Lottie>
                    </div>
                    <div className="flex my-5 justify-between text-2xl font-semibold"><h1>Your Info</h1> <button onClick={handlemodal} className="text-blue-700 underline">Edit</button></div>
                    <dialog id="modal" className="my-auto rounded-2xl bg-opacity-25 top-0 p-5">
                        <UpdateInfo data={"modal"} ></UpdateInfo>
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