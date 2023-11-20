const win = window;

function getQuery(){
    return location.href
}

function getLocation() {
    return location
}

function getPathname() {
    return location.pathname
}

function getSearch() {
    return location.search
}


var qsane = {
    getQuery,
    getLocation,
    getPathname,
    getQuery,
    getSearch
};


export default qsane;