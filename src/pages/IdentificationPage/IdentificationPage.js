import {useDispatch, useSelector} from 'react-redux';
import {Checkbox} from '../../components';

import {todoActions} from '../../store/text.slice';

import css from './IdentificationPage.module.css'

const {changeValueI} = todoActions;

const IdentificationPage = () => {
    const dispatch = useDispatch();
    const {identifications} = useSelector(state => state.textReducer);

    const change = (id) => dispatch(changeValueI({id}));

    return (
        <div className={css.show}>
            {identifications.map(identification => <Checkbox item={identification} key={identification.id} change={change}/>)}
        </div>
    );
};

export {IdentificationPage};