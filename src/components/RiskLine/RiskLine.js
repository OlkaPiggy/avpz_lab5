import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {todoActions} from '../../store/text.slice';

import css from './RiskLine.module.css';

const {changeExpertsApp, changeExpertsApp2, changeCostBefore, changeCategoryCost} = todoActions;

const RiskLine = ({risk, category, is}) => {
    const [average, setAverage] = useState(0);
    const [trigger, setTrigger] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        const elems = document.getElementsByClassName(risk.id);
        const item = document.getElementsByClassName(`${risk.category}.${is}`)[risk.id - is];
        let a = 0;

        for (const elem of elems) {
            a += +elem.value;
        }
        if(is < 0)
            setAverage((a / elems.length).toFixed(3));
        else
            setAverage(((a / elems.length) * +item.value).toFixed(2));
    }, [trigger]);

    const change = () => {
        const elems = document.getElementsByClassName(risk.id);
        const mas = [];

        for (const elem of elems) {
            mas.push(+elem.value);
        }

        if(is < 0) {
            dispatch(changeExpertsApp({id: risk.id, mas}));
        } else {
            dispatch(changeExpertsApp2({id: risk.id, mas}));
            const elem = document.getElementsByClassName(`${risk.category}.${is}`)[risk.id - is];
            dispatch(changeCategoryCost({id: risk.id, index: risk.id - is, item: +elem.value}));
        }

        setTrigger(trigger + 1);
    }

    const change2 = () => {
        const items = document.getElementsByClassName(`${risk.category}.${is}`);

        let sum = 0;

        for (const item of items) {
            sum += +item.value;
        }

        dispatch(changeCostBefore({id: category.id, sum: sum}));
        change();
    }

    return (
        <div className={`${css.flex} ${css.line}`}>
            <div className={`${css.flex} ${css.text}`}>
                <div>{risk.id}</div>
                <div>{risk.text}</div>
            </div>

            {(is > -1) && <div className={css.riskDiv}><input type="number" min={0.00} step={0.01} defaultValue={category.costs[risk.id - is]}
                                      onChange={change2} className={`${risk.category}.${is}`}/></div>}

            <div className={css.inputs}>
                {(is < 0) && risk.expertDefaultValues.map((value, index) => <input id={`${value * index}`}
                                                                       className={risk.id}
                                                                       type="number"
                                                                       min={0.00}
                                                                       max={1.00}
                                                                       step={0.01}
                                                                       defaultValue={value}
                                                                       onChange={change}
                />)}
                {(is > -1) && risk.expertDefaultValues2.map((value, index) => <input id={`${value * index}`}
                                                                                  className={risk.id}
                                                                                  type="number"
                                                                                  min={0.00}
                                                                                  max={1.00}
                                                                                  step={0.01}
                                                                                  defaultValue={value}
                                                                                  onChange={change}
                />)}
            </div>

            <div className={css.average}>{average}</div>
        </div>
    );
};

export {RiskLine};