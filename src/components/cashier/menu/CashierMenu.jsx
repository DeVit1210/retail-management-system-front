import React from 'react';
import {NavLink} from "react-router-dom";

const CashierMenu = () => {
    return (
        <div>
            <div><NavLink to={"/sales"}>Продажа</NavLink></div>
            <div><NavLink to={"/history"}>История</NavLink></div>
            <div><NavLink to={"/shiftStats"}>Статистика смены</NavLink></div>
        </div>
    )
}

export default CashierMenu;