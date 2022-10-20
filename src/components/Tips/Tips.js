import {Tip} from '../Tip/Tip';

const Tips = ({problems, tips}) => {

    return (
        <div>
            {problems && problems.map(item => <Tip item={item} key={item.id} tips={tips}/>)}
        </div>
    );
};

export {Tips};