import {useSelector} from 'react-redux';

import {RiskLine2} from '../RiskLine2/RiskLine2';

const AppearanceTwo = () => {
    const {identifications} = useSelector(state => state.textReducer);

    return (
        <div>
            {/*<ExpertLine expert={expertsApp.category1}/>*/}
            {identifications.map(identification => identification.category === 1 &&
                <RiskLine2 risk={identification} id={identification.id} is={-1}/>)}

            {identifications.map(identification => identification.category === 2 &&
                <RiskLine2 risk={identification} id={identification.id} is={-1}/>)}

            {identifications.map(identification => identification.category === 3 &&
                <RiskLine2 risk={identification} id={identification.id} is={-1}/>)}

            {identifications.map(identification => identification.category === 4 &&
                <RiskLine2 risk={identification} id={identification.id} is={-1}/>)}
        </div>
    );
};

export {AppearanceTwo};