import {  } from "./Registration.css";
import { useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Registration = () => {
    const [password, setPassword] = useState("password")
    const [match, setMatch] = useState("")
    const captcha = useRef()

    useEffect(() => {
        loadCaptchaEnginge(6, "black", "white")
    }, [])

    const handleCaptcha = (e) => {
        // e.preventDefault()
        // const from = e.target
        const captchas = captcha.current.value
        console.log(captchas.length);
        if (captchas.length == 6) {
            if (validateCaptcha(captchas) === true) {
                setMatch("Captcha matched ")
            } else {
                setMatch("Captcha doesn't match")
            }
        } if (captchas.length == 0) {
            setMatch("")
        }

    }
    return (
        <section className="my-5 bg-gray-600 relative h-fit">
            <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,256L48,250.7C96,245,192,235,288,229.3C384,224,480,224,576,208C672,192,768,160,864,170.7C960,181,1056,235,1152,261.3C1248,288,1344,288,1392,288L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div id="login_banner" className="flex justify-around relative">
                <div>
                    <h1>Welcome to Our ZingZest Seller Center</h1>
                </div>
                <div>
                    <h1>Registration Here</h1>
                    <form action="z-50">
                        <div className="">
                            <label htmlFor="" className="">Your Name</label> <br />
                            <input type="text" className="  border-2 border-gray-600 w-80 p-2 rounded-xl" />
                        </div>
                        <div className="">
                            <label htmlFor="" className="from">Your Email</label> <br />
                            <input type="text" className="inputFrom  border-2 border-gray-600 w-80 p-2 rounded-xl" />
                        </div>
                        <div className="">
                            <label htmlFor="" className="from">Enter Your Captcha</label> <br />
                            <LoadCanvasTemplate ></LoadCanvasTemplate>
                            <input type="text" ref={captcha} onChange={() => handleCaptcha()} className="inputFrom  border-2 border-gray-600 w-80 p-2 rounded-xl" />
                            <span className="text-red-600 font-semibold">{match}</span>
                        </div>
                        <div className="">
                            <label htmlFor="" className="from">Your Password</label> <br />
                            <div className="flex ">
                                <input type={password} className="inputFrom  border-2 border-gray-600 w-80 p-2 rounded-xl" />
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
                <div className="border-black w-full border-2 absolute">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>

        </section >
    );
};

export default Registration;