import css from './Tip.module.css';

const Tip = ({item, tips}) => {
    return (
        <div className={css.flex}>
            <div className={css.problem}>{item.id}. {item.text}</div>
            <div className={css.tip}>
                <select>
                    {tips.map(tip => <option key={tip.id} value={tip.text}>{tip.text}</option>)}
                </select>
            </div>
        </div>
    );
};

export {Tip};