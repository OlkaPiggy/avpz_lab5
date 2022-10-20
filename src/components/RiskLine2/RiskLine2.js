import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {todoActions} from '../../store/text.slice';

import css from '../RiskLine/RiskLine.module.css';
import css2 from './RiskLine2.module.css';

const {countDopCosts, changeCostAfter} = todoActions;

const RiskLine2 = ({risk, category, is}) => {
    const [mas, setMas] = useState([]);
    const [status, setStatus] = useState('');
    const [result, setResult] = useState(0);
    const {expertsApp} = useSelector(state => state.textReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const mas1 = [];
        let sum = 0, resultA = 0;

        if (risk.value !== false) {
            if (is < 0) {
                for (let i = 0; i < risk.expertDefaultValues.length; i++) {
                    mas1.push((risk.expertDefaultValues[i] * expertsApp[`category${risk.category}`].mas[i]).toFixed(2))
                }
            } else {
                for (let i = 0; i < risk.expertDefaultValues2.length; i++) {
                    mas1.push((risk.expertDefaultValues2[i] * expertsApp[`category${risk.category}`].mas2[i]).toFixed(2))
                }
            }

            setMas(mas1);

            for (const i of mas1) {
                sum += +i;
            }

            if (is < 0) {
                resultA = (sum / (expertsApp[`category${risk.category}`].sum));
            } else {
                resultA = (sum / (expertsApp[`category${risk.category}`].sum2) * category.costs[risk.id - is]);
            }

            setResult(resultA);

            if (is > -1) {
                dispatch(countDopCosts({id: category.id, index: risk.id - is, result: resultA}));
                dispatch(changeCostAfter({id: category.id}));

                if (resultA < 500) {
                    setStatus('Низька')
                } else if (resultA > 500 && resultA < 1000) {
                    setStatus('Середня')
                } else {
                    setStatus('Висока')
                }
            }
            else {
                    if (resultA < 0.1) {
                        setStatus('Дуже низька')
                    } else if (resultA >= 0.1 && resultA < 0.25) {
                        setStatus('Низька')
                    } else if (resultA >= 0.25 && resultA < 0.5) {
                        setStatus('Середня')
                    } else if (resultA >= 0.5 && resultA < 0.75) {
                        setStatus('Висока')
                    } else {
                        setStatus('Дуже висока')
                    }
                }
            }
        }, [])

    return (
        <div className={`${css.flex} ${css.line}`}>
            <div className={`${css.flex} ${css.text}`}>
                <div>{risk.id}</div>
                <div>{risk.text}</div>
            </div>
            {mas && mas.map(item => <div className={css2.showDiv}>{item}</div>)}
            {is > -1 && <div className={css.riskDiv}>
                <div className={`${risk.category}.${is}`}>{result.toFixed(2)}</div>
            </div>}
            <div className={css2.status}>{status}</div>
        </div>
    );
};

export {RiskLine2};