import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../../Appwrite/Auth";
import { logout } from "../../Store/AuthSlice";

export default function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout()); 
            })
            .catch((error) => {
                console.error("Logout Error:", error);
            });
    };

    return (
        <button 
            onClick={logoutHandler}  
            className="inline-block px-6 py-2  hover:bg-blue-700 duration-200 text-white rounded-full"
        >
            Logout
        </button>
    );
}
