import { } from "./Registration.css";
import { useContext, useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import trolley from "../../../public/torlley.png"
import bag from "../../../public/shopping bag.png"
import Choice from "./Choice";
import { Context } from "../ContextAPI/ContextAPI";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Registration = () => {
    const [password, setPassword] = useState("password")
    const [match, setMatch] = useState("")
    const axiosLink = useAxios(AxiosSource)
    const { createUser, logOutUser } = useContext(Context)


    useEffect(() => {
        loadCaptchaEnginge(6, "black", "white")
    }, [])

    const handleRegistration = (e) => {
        e.preventDefault()
        const form = e.target

        const name = form.name.value
        // const image = form.image.files
        const email = form.email.value
        const password = form.password.value
        const code = form.code.value
        // console.log(image);
        if (validateCaptcha(code) === true) {
            setMatch("")
            createUser(email, password)
                .then(res => {
                    console.log(res);
                    
                    axiosLink.post('/seller-users', { name, email })
                        .then(res => {
                            logOutUser()
                            Swal.fire({
                                icon: "success",
                                title: "Registration",
                                text: "Successfully you register in our website"
                            });


                        })
                        .catch(error => {
                            console.log(error);
                        })


                })
                .catch(error => {
                    console.log(error);
                })

        }
        else {
            setMatch("Captcha doesn't match")
        }
    }


    return (
        <section className="py-5 ">
            <div className="border-2 lg:py-10 py-5 bg-slate-200 border-gray-400 relative">
                <svg className="absolute top-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0040ff" fillOpacity="1" d="M0,224L18.5,224C36.9,224,74,224,111,234.7C147.7,245,185,267,222,272C258.5,277,295,267,332,261.3C369.2,256,406,256,443,213.3C480,171,517,85,554,80C590.8,75,628,149,665,165.3C701.5,181,738,139,775,106.7C812.3,75,849,53,886,64C923.1,75,960,117,997,160C1033.8,203,1071,245,1108,266.7C1144.6,288,1182,288,1218,282.7C1255.4,277,1292,267,1329,261.3C1366.2,256,1403,256,1422,256L1440,256L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
                <div id="login_banner" className="flex flex-wrap justify-around relative">
                    <div className=" w-96 my-auto ">
                        <h1 id="bannerh1" className="text-5xl text-black font-extrabold">Welcome to Our ZingZest Seller Center</h1>
                        <p className="text-xl font-semibold my-6 text-black ">World Largest Online Shop. We promise, we will delivery your product to the customer as they seen in the image</p>
                        <div id="images" className="relative">
                            <img src={bag} className="w-32 border-gray-500" alt="" />
                            <img className="w-44 lg:absolute md:absolute top-1/2 left-1/4 mx-auto " src={trolley} alt="" />
                        </div>
                    </div>
                    <div>

                        <h1 className="text-3xl text-black font-semibold my-5">Registration Here</h1>
                        <form onSubmit={handleRegistration} className="backdrop-blur-md text-black ">
                            <div className="">
                                <label htmlFor="" className="">Your Name</label> <br />
                                <input type="text" name="name" className="  border-2 border-gray-600 w-80 p-2 rounded-xl" />
                            </div>
                            <div className="">
                                <label htmlFor="" className="from">Your Email</label> <br />
                                <input type="text" name="email" className="inputFrom  border-2 border-gray-600 w-80 p-2 rounded-xl" />
                            </div>
                            {/* <div className="">
                                <label htmlFor="" className="from">Your Image</label> <br />
                                <input type="file" name="image" className="inputFrom  border-2 border-gray-600 w-80 p-2 rounded-xl" />
                            </div> */}
                            <div className="">
                                <label htmlFor="" className="">Enter Your Captcha</label> <br />
                                <LoadCanvasTemplate ></LoadCanvasTemplate>
                                <input type="text" name="code" className="border-2 border-gray-600 w-80 p-2 rounded-xl" /> <br />
                                <span className="text-red-600 font-semibold">{match}</span>
                            </div>
                            <div className="">
                                <label htmlFor="" className="from">Your Password</label> <br />
                                <div className="flex ">
                                    <input type={password} name="password" className="border-2 border-gray-600 w-80 p-2 rounded-xl" />
                                    {
                                        password == "password" ?
                                            <FaEye onClick={() => setPassword("text")} className="my-auto text-xl -ml-8 z-50"></FaEye>
                                            :
                                            <FaEyeSlash onClick={() => setPassword("password")} className="my-auto text-xl -ml-8 z-50"></FaEyeSlash>
                                    }
                                </div>
                            </div>
                            <div>
                                <p className="text-blue-700 font-semibold">Forget password??</p>
                            </div>
                            <div>
                                <button className="btn">Registration</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="">
                <Choice></Choice>
            </div>
        </section >
    );
};

export default Registration;