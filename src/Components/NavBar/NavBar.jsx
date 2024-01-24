import { useContext, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";


const NavBar = () => {
    const navigate = useNavigate()
    const email = useRef()
    const password = useRef()

    const { user, logOutuser, logInUser } = useContext(Context)

    const handlelogOut = () => {
        logOutuser()
        navigate("/login")

    }

    const handlelogIn = (e) => {
        e.preventDefault()
        const loginEmail = email.current.value
        const loginPassword = password.current.value
        logInUser(email,password)
        .then(res=>{
            console.log(res);
            navigate("/")
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <section className="border-b-2 border-gray-600 bg-blue-600">
            <div className="flex justify-around gap-10">
                <div className="my-2">
                    <h1 className="text-3xl font-bold ">ZingZest <br /> <span className="ml-10">Seller Center</span></h1>
                </div>

                {
                    user ?
                        <div className="my-auto flex gap-5">
                            <ul className="flex gap-5 text-xl font-semibold">
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-white rounded-xl" : ""} to={'/'}><li className="p-1">Home</li></NavLink>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-white rounded-xl" : ""} to={'/allItems'}><li className="p-1">All Items</li></NavLink>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-white rounded-xl" : ""} to={'/addItems'}><li className="p-1">Add Items</li></NavLink>
                            </ul>
                            <button onClick={handlelogOut} className="btn btn-sm font-semibold">Log Out</button>
                        </div>
                        :
                        <div className="my-auto space-x-3">
                            <input ref={email} type="text" placeholder="Enter Your Email" className="border-2 border-gray-600 w-64 p-1 rounded-xl" name="" id="" />
                            <input ref={password} type="password" placeholder="Enter Your Password" className="border-2 border-gray-600 w-64 p-1 rounded-xl" name="" id="" />
                            <button onClick={handlelogIn} className="btn btn-sm">LogIn</button>
                        </div>
                }
            </div>
        </section>
    );
};

export default NavBar;