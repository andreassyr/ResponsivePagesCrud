import * as Api from '../api.js';

/**
 * 
 * @param {type} dispatch
 * @param {type} state
 * @returns {jqXhr}
 */
export function fetchPagesList( {commit, dispatch, state}){
    return Api.getPagesList().then((data, textStatus, jqXhr) => {
        commit('setPages', data);
    }, (jqXhr, error) => {
        
    });
}

/**
 @typedef PageDetails
 @type {object}
 @property {number} id - an ID.
 @property {string} title - the page title.
 @property {string} description - a page description.
 @property {number} type - one of three numbers Menu(0),Events(1),Content(2).
 @property {date} publishedOn - when the page was first created.
 @param {PageDetails} pageDetails
 */
export function createNewPage( {dispatch, state}, pageDetails){

}