import {useDispatch, useSelector} from 'react-redux';

import {Checkbox} from '../../components';

import {todoActions} from '../../store/text.slice';
import {useEffect, useState} from 'react';

import css from './SourcePage.module.css';

const {changeValueS} = todoActions;

const SourcePage = () => {
    const {sources} = useSelector(state => state.textReducer);
    const [sum, setSum] = useState(0.00);
    const [trigger, setTrigger] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        let numOfItems = 0;
        for (const source of sources) {
            if (source.value === true) {
                numOfItems++;
            }
        }

        setSum((numOfItems * 5.56).toFixed(2));
    }, [trigger])

    const change = (id) => {
        dispatch(changeValueS({id}));
        setTrigger(trigger + 1)
    }

    return (
        <div>
            {sources.map(source => <Checkbox item={source} key={source.text} change={change}/>)}
            <div className={css.sum}>{sum}</div>
        </div>
    );
};

export {SourcePage};