import css from './Checkbox.module.css';

const Checkbox = ({item, change}) => {

    const changeItem = (e) => change(item.id)

    return (
        <div className={css.checkbox}>
            <label >
                <input type={'checkbox'} onChange={changeItem} checked={item.value}></input>
                <div>{item.text}</div>
            </label>
        </div>
    );
};

export {Checkbox};