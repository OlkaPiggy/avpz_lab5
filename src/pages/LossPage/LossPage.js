import {useState} from 'react';
import {Cost, LossOne, LossTwo} from '../../components';
import css from '../AppearancePage/AppearancePage.module.css';

const LossPage = () => {
    const [trigger, setTrigger] = useState(false);
    return (
        <div>
            {!trigger && <div>
                <Cost/>
                <LossOne/>
            </div>}
            {trigger && <div>
                <Cost/>
                <LossTwo/>
            </div>}

            <div className={css.buttons}>
                <button className={css.button} onClick={() => setTrigger(false)}>Повернутись до вводу
                </button>
                <button className={css.button} onClick={() => {
                    setTrigger(true);
                    window.scroll({top: 0});
                }}>Обчислити
                </button>
            </div>
        </div>
    );
};

export {LossPage};