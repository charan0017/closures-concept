// declared an outer function
function funcCounter() {
    // declared a variable which is holded by this outer function function
    const map = new Map();

    // declared an inner function which gets returned when the outer function is called
    // and this inner function will have closure scope of the outer function variables
    // so when this inner function is called, it is going to have access to the outer function variables
    // and the inner function does the state management for the outer function variables when called upon
    return function(pathWhereItsCalled) {
        if (map.has(pathWhereItsCalled)) {
            map.set(pathWhereItsCalled, map.get(pathWhereItsCalled) + 1);
        }
        else {
            map.set(pathWhereItsCalled, 1);
        }

        console.log(`${pathWhereItsCalled} was called ${map.get(pathWhereItsCalled)} times`);

        return map.get(pathWhereItsCalled);
    }
}

// called the outer variable function that will return the inner function at the run time
// when this module is imported somewhere
module.exports = funcCounter();
