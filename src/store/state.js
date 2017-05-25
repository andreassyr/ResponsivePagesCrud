import * as getters from './getters.js';
import * as actions from './actions.js';

const state = {
    pages: []
};

const mutations = {
    setPages(state, pages)
    {
        state.pages = pages;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

