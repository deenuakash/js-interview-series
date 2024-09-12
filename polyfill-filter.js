if (!Array.prototype.myFilter) {
  //checks if `myReduce` is already defined on `Array.prototype
  Array.prototype.myFilter = function (cb) {
    // Check if 'this' is undefined or null
    if (this === undefined || this === null)
      throw new Error("myFilter() cannot be called on undefined or null");
    // Check if cb is a function
    if (typeof cb !== "function")
      throw new Error("myFilter() needs a callback function");

    const result = []; // initialize a result array to store result
    let isTrue;
    for (let i = 0; i < this.length; i++) {
      isTrue = cb(this[i], i, this); // compute the function
      if (isTrue) {
        result.push(this[i]); // push the value if condition passes
      }
    }
    return result;
  };
}

console.log([1, 2, 3, 4, 5].myFilter((val) => val % 2 === 0));
