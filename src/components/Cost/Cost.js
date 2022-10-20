import {useSelector} from 'react-redux';
import {useEffect} from 'react';

import css from './Cost.module.css';

const Cost = () => {
    const {costOfProject} = useSelector(state => state.textReducer);

    useEffect(() => {
        document.getElementById('before1').value = '' + costOfProject.category1.beforeCost;
        document.getElementById('before2').value = '' + costOfProject.category2.beforeCost;
        document.getElementById('before3').value = '' + costOfProject.category3.beforeCost;
        document.getElementById('before4').value = '' + costOfProject.category4.beforeCost;
        document.getElementById('after1').value = '' + costOfProject.category1.afterCost;
        document.getElementById('after2').value = '' + costOfProject.category2.afterCost;
        document.getElementById('after3').value = '' + costOfProject.category3.afterCost;
        document.getElementById('after4').value = '' + costOfProject.category4.afterCost;
        change();
    }, [costOfProject.category1.beforeCost, costOfProject.category2.beforeCost, costOfProject.category3.beforeCost,
        costOfProject.category4.beforeCost, costOfProject.category1.afterCost, costOfProject.category2.afterCost,
        costOfProject.category3.afterCost, costOfProject.category4.afterCost])

    const change = () => {
        const beforeItems = document.getElementsByClassName(css.before);
        const beforeItem = document.getElementById('beforeAll');
        const afterItems = document.getElementsByClassName(css.after);
        const afterItem = document.getElementById('afterAll');

        let sum = 0;
        for (const item of beforeItems) {
            sum += +item.value;
        }
        beforeItem.innerText = "" + sum.toFixed(2);

        let sum2 = 0;
        for (const item of afterItems) {
            sum2 += +item.value;
        }
        afterItem.innerText = "" + sum2.toFixed(2);
    }

    return (
        <div className={css.costDiv}>
            <div className={`${css.flex} ${css.numbers}`}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            <div className={`${css.flex}`}>
                <div className={css.title}>{costOfProject.general.title1}:</div>
                <div className={`${css.flex}`}>
                    <div id={'beforeAll'} className={css.gBefore}>{costOfProject.general.generalBefore}</div>
                    <div className={css.before} id={'before1'}>{costOfProject.category1.beforeCost}</div>
                    <div className={css.before} id={'before2'}>{costOfProject.category2.beforeCost}</div>
                    <div className={css.before} id={'before3'}>{costOfProject.category3.beforeCost}</div>
                    <div className={css.before} id={'before4'}>{costOfProject.category4.beforeCost}</div>
                    <div>тис.грн</div>
                </div>
            </div>
            <div className={`${css.flex}`}>
                <div className={css.title}>{costOfProject.general.title2}:</div>
                <div className={`${css.flex}`}>
                    <div id={'afterAll'} className={css.gAfter}>{costOfProject.general.generalAfter.toFixed(2)}</div>
                    <div className={css.after} id={'after1'}>{costOfProject.category1.afterCost.toFixed(2)}</div>
                    <div className={css.after} id={'after2'}>{costOfProject.category2.afterCost.toFixed(2)}</div>
                    <div className={css.after} id={'after3'}>{costOfProject.category3.afterCost.toFixed(2)}</div>
                    <div className={css.after} id={'after4'}>{costOfProject.category4.afterCost.toFixed(2)}</div>
                    <div>тис.грн</div>
                </div>
            </div>
        </div>
    );
};

export {Cost};