if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    // Check if 'this' is undefined or null
    if (this === undefined || this === null)
      throw new Error("myMap() cannot be called on undefined or null");
    // Check if cb is a function
    if (typeof cb !== "function")
      throw new Error("myMap() needs a callback function");

    const result = []; // initialize a result array to store result
    let computedValue;
    for (let i = 0; i < this.length; i++) {
      computedValue = cb(this[i], i, this); // compute the function
      result.push(computedValue); // push the value
    }
    return result;
  };
}

console.log([1, 2, 3, 4, 5].myMap((val) => val * 2));
