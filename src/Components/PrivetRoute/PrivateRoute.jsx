import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import { useNavigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { loading, user, logOutUser } = useContext(Context)
    const navigate = useNavigate()
    if (loading) {
        <h1>loading</h1>
    }
    if (user) {
        return children
    }
    else {
        navigate("/login")
    }
};

export default PrivateRoute;