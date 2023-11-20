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

function testFunction(){
    return 'Hello World'
}


var qsane = {
    getQuery,
    getLocation,
    getPathname,
    getQuery,
    getSearch,
    testFunction
};


export default qsane;