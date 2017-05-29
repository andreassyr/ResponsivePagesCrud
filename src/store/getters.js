export function getPages(state)
{
    return state.pages;
}

export function getPageById(state)
{
    return function (id) {
        id = parseInt(id);

        for (let i = 0; i < state.pages.length; i++)
        {
            if (state.pages[i].id === id)
                return state.pages[i];
        }

        return null;
    }
}

export function getPageEvents(state)
{
    return state.pageEvents;
}

