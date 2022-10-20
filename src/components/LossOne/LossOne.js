import {useSelector} from 'react-redux';

import {ExpertLine} from '../ExpertLine/ExpertLine';
import {RiskLine} from '../RiskLine/RiskLine';

const LossOne = () => {
    const {identifications, expertsApp, costOfProject} = useSelector(state => state.textReducer);
    return (
        <div>
            <ExpertLine expert={expertsApp.category1} mas={expertsApp.category1.mas2} is={1}/>
            {identifications.map(identification => identification.category === 1 &&
                <RiskLine risk={identification} id={identification.id} category={costOfProject.category1} is={1}/>)}

            <ExpertLine expert={expertsApp.category2} mas={expertsApp.category2.mas2} is={12}/>
            {identifications.map(identification => identification.category === 2 &&
                <RiskLine risk={identification} id={identification.id} category={costOfProject.category2} is={12}/>)}

            <ExpertLine expert={expertsApp.category3} mas={expertsApp.category3.mas2} is={21}/>
            {identifications.map(identification => identification.category === 3 &&
                <RiskLine risk={identification} id={identification.id} category={costOfProject.category3} is={21}/>)}

            <ExpertLine expert={expertsApp.category4} mas={expertsApp.category4.mas2} is={32}/>
            {identifications.map(identification => identification.category === 4 &&
                <RiskLine risk={identification} id={identification.id} category={costOfProject.category4} is={32}/>)}
        </div>
    );
};

export {LossOne};