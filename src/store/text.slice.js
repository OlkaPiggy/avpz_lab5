import {createSlice} from '@reduxjs/toolkit';

import {init} from '../config';

const initialState = {
    sources: init.sources,
    identifications: init.identifications,
    expertsApp: init.expertsApp,
    costOfProject: init.costOfProject,
    tips: init.tips
}

const textSlice = createSlice({
    name: 'textSlice',
    initialState,
    reducers: {
        changeValueI: (state, action) => {
            const item = state.identifications.find(item => item.id === action.payload.id);

            item.value = !item.value;
        },
        changeValueS: (state, action) => {
            const item = state.sources.find(item => item.id === action.payload.id);

            item.value = !item.value;
        },
        changeExpertsApp: (state, action) => {
            const item = state.identifications.find(item => item.id === action.payload.id);

            item.expertDefaultValues = action.payload.mas;
        },
        changeExpertsApp2: (state, action) => {
            const item = state.identifications.find(item => item.id === action.payload.id);

            item.expertDefaultValues2 = action.payload.mas;
        },
        changeCostBefore: (state, action) => {
            for (let i in state.costOfProject) {
                if (state.costOfProject[i].id === action.payload.id) {
                    state.costOfProject[i].beforeCost = action.payload.sum.toFixed(2);
                }
            }
        },
        changeCategoryCost: (state, action) => {
            for (let i in state.costOfProject) {
                if (state.costOfProject[i].id === action.payload.id) {
                    state.costOfProject[i].costs[action.payload.index] = action.payload.item.toFixed(2);
                }
            }
        },
        changeCostAfter: (state, action) => {
            for (let i in state.costOfProject) {
                if (state.costOfProject[i].id !== 5) {
                    let sum = 0;
                    for(let j of state.costOfProject[i].costs2) {
                        sum += +j;
                    }
                    state.costOfProject[i].afterCost = state.costOfProject[i].beforeCost + sum;
                }
            }
        },
        countDopCosts: (state, action) => {
            for (let i in state.costOfProject) {
                if (state.costOfProject[i].id === action.payload.id) {
                    state.costOfProject[i].costs2[action.payload.index] = +action.payload.result;
                }
            }
        },
        setSumOfExperts: (state, action) => {
            for (let i in state.expertsApp) {
                if (state.expertsApp[i].id === action.payload.id) {
                    state.expertsApp[i].sum = action.payload.sum;
                }
            }
        },
        setSumOfExperts2: (state, action) => {
            for (let i in state.expertsApp) {
                if (state.expertsApp[i].id === action.payload.id) {
                    state.expertsApp[i].sum2 = action.payload.sum;
                }
            }
        }
    }
})

const textReducer = textSlice.reducer;

const {
    changeValueI,
    changeValueS,
    changeExpertsApp,
    setSumOfExperts,
    setSumOfExperts2,
    changeCostBefore,
    changeCostAfter,
    changeExpertsApp2,
    changeCategoryCost,
    countDopCosts
} = textSlice.actions;

export const todoActions = {
    changeValueI,
    changeValueS,
    changeExpertsApp,
    setSumOfExperts,
    setSumOfExperts2,
    changeCostBefore,
    changeCostAfter,
    changeExpertsApp2,
    changeCategoryCost,
    countDopCosts
};

export default textReducer;