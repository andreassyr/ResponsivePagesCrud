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


