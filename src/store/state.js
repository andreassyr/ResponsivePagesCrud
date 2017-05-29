import * as getters from './getters.js';
import * as actions from './actions.js';

const state = {
    //keep the ResponsivePages from the server to be accesible for all
    pages: [],
    /**
     * Events relative to ResponsivePages
     * such as Created, Deleted, Edited
     * 
     * @typedef {Object} PageEvent
     * @property {string} type - What type of event happened such as Created, Deleted, Edited
     * @property {boolean} success - If the event was a success or an error
     * @property {string} message - An arbitary message to show to the user
     * 
     * PageEvent[]
     */
    pageEvents: []
};

const mutations = {
    setPages(state, pages)
    {
        state.pages = pages;
    },
    addPage(state, page)
    {
        state.pages.push(page);
    },
    deletePage(state, page)
    {
        state.pages = state.pages.filter(function (storedPage) {
            return page.id !== storedPage.id;
        });
    },
    editPage(state, page)
    {
        state.pages = state.pages.map(function(storedPage){
            if(page.id === storedPage.id)
            {
                storedPage=page;
            }
            
            return storedPage;
        });
    },
    /**
     * 
     * @param {Object} state
     * @param {PageEvent} pageEvent
     * @returns {undefined}
     */
    addPageEvent(state, pageEvent) {
        state.pageEvents.push(pageEvent);
    },
    clearPageEvents(state)
    {
        state.pageEvents = [];
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

