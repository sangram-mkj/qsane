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


function getOnly(param){
    let url = new URL(document.location).searchParams
    return url.get(param)
}




var qsane = {
    getQuery,
    getLocation,
    getPathname,
    getQuery,
    getSearch,
    getOnly
};


export default qsane;