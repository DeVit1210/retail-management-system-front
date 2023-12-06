import React from 'react';
import ManagerMenu from "./manager/menu/ManagerMenu";
import CashierMenu from "./cashier/menu/CashierMenu";
import UserData from "./UserData";
import {useSelector} from "react-redux";

const Header = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const role = useSelector(state => state.auth.role)

    const checkRole = () => {
        console.log("header - checkRole - " + isAuth)
        if (isAuth) {
            if (role === "CASHIER") {
                return <ManagerMenu/>
            } else if (role === "NETWORK_MANAGER" || role === "COFFEE_SHOP_MANAGER") {
                return <ManagerMenu/>
            }
        }
        return undefined;
    }

    const checkAuthorization = () => {
        if (isAuth) return <UserData username={role}/>
    }

    return (
        <header>
            <div>
                <img src={""}/>
            </div>
            {
                checkRole()
            }
            {
                checkAuthorization()
            }
        </header>
    )
}

export default Header;