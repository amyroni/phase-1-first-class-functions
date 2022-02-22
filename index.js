function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  const namedFunction = function () {
    console.log("Hi");
  };
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("Anonymous");
  };
}