function receivesAFunction(callbackFunction) {
    callbackFunction()
    return callbackFunction;
}

function returnsANamedFunction() {
    return receivesAFunction;
}



function returnsAnAnonymousFunction() {
    return function () {
        console.log("anony");
    }
}

