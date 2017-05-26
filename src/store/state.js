import * as getters from './getters.js';
import * as actions from './actions.js';

const state = {
    pages: []
};

const mutations = {
    setPages(state, pages)
    {
        state.pages = pages;
    },
    deletePage(state, page)
    {
        state.pages = state.pages.filter(function(storedPage){
            return page.id !== storedPage.id;
        });
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

