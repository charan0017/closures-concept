// getting the inner function from the module which has the lexical scope of the outer function variables
const funcCounter = require('./funcCounter');

function func1() {
    funcCounter(`${__dirname}/${__filename}/${func1.name}`);
}

function func3() {
    funcCounter(`${__dirname}/${__filename}/${func3.name}`);
}

func1();
func3();
func1();
func1();
