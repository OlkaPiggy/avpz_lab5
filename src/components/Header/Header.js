import {NavLink} from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.links}>
            <NavLink to={'source'}>Джерела ризиків</NavLink>
            <NavLink to={'identification'}>Ідентифікація ризиків</NavLink>
            <NavLink to={'appearance'}>Аналіз ризиків</NavLink>
            <NavLink to={'loss'}>Обчислення втрат</NavLink>
            <NavLink to={'planning'}>Планування ризиків</NavLink>
        </header>
    );
};

export {Header};