# qsane
A Javascript library to get all the things you may require from your URL bar.

Currently this package has these functions available & ready to use anywhere using npm:
    getQuery,
    getLocation,
    getPathname,
    getQuery,
    getSearch,
    getOnly
All the names are self explanatory & returns exactly what is mentioned in the function name.

The getOnly function requires a param. If you need the value of a specific query from your url, then you can pass that exact query name & it will return the value.
Suppose your URL is: 'https://www.something.com/newPage?name=qsane?valid=true
If you need the value of only 'name', then you can call getOnly('name') and you'll get 'qsane' as the output.

Any contributions are welcome.
