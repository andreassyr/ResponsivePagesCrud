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
 * @param {PageDetails} pageDetails
 * @returns {jqXHR}
 */
export function updatePage(pageDetails)
{
    return $.ajax({
        url: '/api/ResponsivePages/' + pageDetails.id,
        contentType: "application/json; charset=utf-8",
        method: 'PUT',
        dataType: 'json',
        data: JSON.stringify(pageDetails)
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
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(pageDetails)
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


