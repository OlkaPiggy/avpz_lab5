import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import css from '../RiskLine/RiskLine.module.css';
import css2 from './ExpertLine.module.css';

import {todoActions} from '../../store/text.slice';

const {setSumOfExperts, setSumOfExperts2} = todoActions;

const ExpertLine = ({expert, mas, is}) => {
    const [sum, setSum] = useState(0);
    const [trigger, setTrigger] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        const elems = document.getElementsByClassName(expert.title);
        let a = 0;
        for (const elem of elems) {
            a += +elem.value;
        }
        setSum(a);

        if (is < 0) {
            dispatch(setSumOfExperts({id: expert.id, sum: a}));
        } else {
            dispatch(setSumOfExperts2({id: expert.id, sum: a}));
        }
    }, [trigger]);

    return (
        <div className={`${css.flex} ${css.line} ${css2.line}`}>
            <div className={`${css.flex} ${css.text}`}>
                <div>#</div>
                <div>{expert.title}</div>
            </div>
            <div className={css.inputs}>
                {mas.map(value => <input
                                            type="number"
                                            className={expert.title}
                                            min={0.}
                                            max={10}
                                            step={1}
                                            defaultValue={value}
                                            onChange={() => setTrigger(trigger + 1)}
                />)}
            </div>
            <div className={css.average}>{sum}</div>
        </div>
    );
};

export {ExpertLine};