import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const activeClassName = 'menu__item-active';

const Menu = () => {
    return (
        <nav className="menu">
            <Router>
                <NavLink to="/" exact className="menu__item" activeClassName={ activeClassName }>Гоночн​ое такси</NavLink>
                <NavLink to="/drift" exact className="menu__item" activeClassName={ activeClassName }>Дрифт-такси</NavLink>
                <NavLink to="/timeattack" exact className="menu__item" activeClassName={ activeClassName }>Гонка ​​​​​​Time Attack</NavLink>
                <NavLink to="/forza" exact className="menu__item" activeClassName={ activeClassName }>Forza Karting Sochi</NavLink>
            </Router>
        </nav>
    );
};

export default Menu;

