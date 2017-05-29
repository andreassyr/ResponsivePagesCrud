import * as Api from '../api.js';
import PageEventTypes from '../commons/page-event-types.js';
import moment from 'moment';
/**
 * 
 * @param {function} commit
 * @param {type} state
 * @returns {jqXhr}
 */
export function fetchPagesList( {commit, dispatch, state}){
    var $def = $.Deferred();

    Api.getPagesList().then((data, textStatus, jqXhr) => {

        data = data.map(function (page) {
            page.publishedOn = moment.utc(page.publishedOn);
            return page;
        });

        commit('setPages', data);
        $def.resolve();
    }, (jqXhr, error) => {
        $def.reject();
    });

    return $def.promise();
}
/**
 * @param {number} pageId
 * @param {function} commit
 * @param {object} state
 * @returns {undefined}
 */
export function deletePage( {commit, state}, pageId){
    var $def = $.Deferred();
    var pageEvent = {
        type: PageEventTypes.deleted,
        success: true,
        message: ''
    };

    Api.deletePage(pageId).then((data, textStatus, jqXhr) => {

        commit('deletePage', data);
        pageEvent.message = 'Page deleted successfully';
        $def.resolve(pageEvent);
    }, (jqXhr, error) => {

        pageEvent.message = 'Page could not be deleted please try again later';
        pageEvent.success = false;
        $def.reject(pageEvent);
    }).always(() => {
        commit('addPageEvent', pageEvent);
    });

    return $def.promise();
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
export function createNewPage( {commit, state}, pageDetails){
    var $def = $.Deferred();
    var pageEvent = {
        type: PageEventTypes.created,
        success: true,
        message: ''
    };

    Api.createPage(pageDetails).then((data, textStatus, jqXhr) => {
        commit('addPage', data);
        pageEvent.message = 'Page created successfully';
        $def.resolve(pageEvent);
    }, (jqXhr, error) => {
        pageEvent.message = 'Could not create page please try again later';
        pageEvent.success = false;
        $def.reject(pageEvent);
    }).always(() => {
        commit('addPageEvent', pageEvent);
    });

    return $def.promise();
}

export function updatePage( {commit, state}, pageDetails){
    var $def = $.Deferred();
    var pageEvent = {
        type: PageEventTypes.edited,
        success: true,
        message: ''
    };

    Api.updatePage(pageDetails).then(() => {
        commit('editPage', data);
        pageEvent.message = 'Page updated!';
        $def.resolve(pageEvent);
    }, () => {
        pageEvent.message = 'Could not update page!';
        pageEvent.success = false;
        $def.reject(pageEvent);
    }).always(() => {
        commit('addPageEvent', pageEvent);
    });

    return $def.promise();
}

export function clearPageEvents( {commit, state})
        {
            commit('clearPageEvents');
        }