import {useSelector} from 'react-redux';

import {RiskLine2} from '../RiskLine2/RiskLine2';

const LossTwo = () => {
    const {identifications, costOfProject} = useSelector(state => state.textReducer);

    return (
        <div>
            {/*<ExpertLine expert={expertsApp.category1}/>*/}
            {identifications.map(identification => identification.category === 1 &&
                <RiskLine2 risk={identification} id={identification.id} category={costOfProject.category1} is={1}/>)}

            {identifications.map(identification => identification.category === 2 &&
                <RiskLine2 risk={identification} id={identification.id} category={costOfProject.category2} is={12}/>)}

            {identifications.map(identification => identification.category === 3 &&
                <RiskLine2 risk={identification} id={identification.id} category={costOfProject.category3} is={21}/>)}

            {identifications.map(identification => identification.category === 4 &&
                <RiskLine2 risk={identification} id={identification.id} category={costOfProject.category4} is={32}/>)}
        </div>
    );
};

export {LossTwo};