import {useSelector} from 'react-redux';
import {RiskLine} from '../RiskLine/RiskLine';
import {ExpertLine} from '../ExpertLine/ExpertLine';

const AppearanceOne = () => {
    const {identifications, expertsApp} = useSelector(state => state.textReducer);

    return (
        <div>
            <ExpertLine expert={expertsApp.category1} mas={expertsApp.category1.mas} is={-1}/>
            {identifications.map(identification => identification.category === 1 &&
                <RiskLine risk={identification} id={identification.id} category={''} is={-1}/>)}

            <ExpertLine expert={expertsApp.category2} mas={expertsApp.category2.mas} is={-1}/>
            {identifications.map(identification => identification.category === 2 &&
                <RiskLine risk={identification} id={identification.id} category={''} is={-1}/>)}

            <ExpertLine expert={expertsApp.category3} mas={expertsApp.category3.mas} is={-1}/>
            {identifications.map(identification => identification.category === 3 &&
                <RiskLine risk={identification} id={identification.id} category={''} is={-1}/>)}

            <ExpertLine expert={expertsApp.category4} mas={expertsApp.category4.mas} is={-1}/>
            {identifications.map(identification => identification.category === 4 &&
                <RiskLine risk={identification} id={identification.id} category={''} is={-1}/>)}
        </div>
    );
};

export {AppearanceOne};