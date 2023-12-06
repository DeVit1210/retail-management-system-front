import React from 'react';
import {NavLink} from "react-router-dom";

const ManagerMenu = () => {
    return (
        <div>
            <div><NavLink to={'/productLines'}>Ассортимент</NavLink></div>
            <div><NavLink to={'/stocks'}>Запасы</NavLink></div>
            <div><NavLink to={'/recipes'}>Рецепты</NavLink></div>
            <div><NavLink to={'/transfers'}>Трансферы</NavLink></div>
            <div><NavLink to={'/money'}>Деньги</NavLink></div>
            <div><NavLink to={'/stuff'}>Сотрудники</NavLink></div>
            <div><NavLink to={'/shifts'}>Смены</NavLink></div>
            <div><NavLink to={'/profitability'}>Рентабельность</NavLink></div>
            <div><NavLink to={'orders'}>Заказы</NavLink></div>
            <div><NavLink to={'retailPoints'}>Точки продажи</NavLink></div>
            <div><NavLink to={'supplies'}>Поставки</NavLink></div>
            <div><NavLink to={'suppliers'}>Контрагенты</NavLink></div>
        </div>
    )
}

export default ManagerMenu;