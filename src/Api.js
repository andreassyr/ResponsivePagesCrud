/**
 * 
 * @returns {jqXHR}
 */
export function getPagesList()
{
    return $.ajax({
        url: '/api/ResponsivePages',
        dataType: 'json'
    });
}

/**
 * 
 * @param {number} pageId
 * @returns {jqXHR}
 */
export function getSinglePage(pageId)
{
    return $.ajax({
        url: '/api/ResponsivePages/' + pageId,
        dataType: 'json'
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
 /
 
 /**
 * 
 * @param {number} pageId
 * @param {PageDetails} pageDetails
 * @returns {jqXHR}
 */
export function updatePage(pageId, pageDetails)
{
    return $.ajax({
        url: '/api/ResponsivePages/' + {pageId},
        method: 'PUT',
        dataType: 'json',
        data: pageDetails
    });
}

/**
 * 
 * @param {PageDetails} pageDetails
 * @returns {jqXHR}
 */
export function createPage(pageDetails)
{
    return $.ajax({
        url: '/api/ResponsivePages',
        method: 'POST',
        dataType: 'json',
        data: pageDetails
    });
}

/**
 * 
 * @param {number} pageId
 * @returns {jqXHR}
 */
export function deletePage(pageId)
{
    return $.ajax({
        url: '/api/ResponsivePages/' + pageId,
        method: 'DELETE',
        dataType: 'json'
    });
}


