import {useState} from 'react';

import {AppearanceOne, AppearanceTwo} from '../../components';

import css from './AppearancePage.module.css';

const AppearancePage = () => {
    const [trigger, setTrigger] = useState(false);
    return (
        <div>
            {!trigger && <AppearanceOne/>}
            {trigger && <AppearanceTwo/>}

            <div className={css.buttons}>
                <button className={css.button} onClick={() => setTrigger(false)}>Повернутись до вводу
                </button>
                <button className={css.button} onClick={() => {
                    setTrigger(true);
                    window.scroll({top: 0});
                }}>Рахувати
                </button>
            </div>
        </div>
    );
};

export {AppearancePage};