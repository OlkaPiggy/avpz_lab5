import {NavLink} from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.links}>
            <NavLink to={'source'}>Джерела</NavLink>
            <NavLink to={'identification'}>Ідентифікація</NavLink>
            <NavLink to={'appearance'}>Поява</NavLink>
            <NavLink to={'loss'}>Втрати</NavLink>
            <NavLink to={'planning'}>Планування</NavLink>
        </header>
    );
};

export {Header};