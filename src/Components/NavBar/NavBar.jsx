import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <section className="border-b-2 border-gray-600 bg-blue-600">
            <div className="flex justify-around gap-10">
                <div className="">
                    <h1 className="text-3xl font-bold ">ZingZest <br /> <span className="ml-10">Seller Center</span></h1>
                </div>
                <div className="my-auto">
                    <ul className="flex gap-5 text-xl font-semibold">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-white rounded-xl" : ""} to={'/'}><li className="p-1">Home</li></NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-white rounded-xl" : ""} to={'/allItems'}><li className="p-1">All Items</li></NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-white rounded-xl" : ""} to={'/addItems'}><li className="p-1">Add Items</li></NavLink>
                    </ul>
                </div>
                <div className="my-auto space-x-3">
                    <input type="text" className="border-2 border-gray-600 w-64 p-1 rounded-xl" name="" id="" />
                    <input type="text" className="border-2 border-gray-600 w-64 p-1 rounded-xl" name="" id="" />
                    <button className="btn btn-sm">LogIn</button>
                </div>
            </div>
        </section>
    );
};

export default NavBar;