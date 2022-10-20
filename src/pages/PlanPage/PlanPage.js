import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {Tips} from '../../components';

const PlanPage = () => {
    const [problems, setProblems] = useState([]);

    const {identifications, tips} = useSelector(state => state.textReducer);

    useEffect(() => {
        const mas = []
        for (const item of identifications) {
            if (item.value === true) {
                mas.push(item);
            }
        }

        setProblems([...mas]);
    }, [])

    return (
        <div>
            <Tips problems={problems} tips={tips}/>
        </div>
    );
};

export {PlanPage};