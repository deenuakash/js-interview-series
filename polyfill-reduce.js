if (!Array.prototype.myReduce) {
  //checks if `myReduce` is already defined on `Array.prototype
  Array.prototype.myReduce = function (cb, init) {
    // Check if 'this' is undefined or null
    if (this === undefined || this === null)
      throw new Error("myReduce() cannot be called on undefined or null");
    // Check if cb is a function
    if (typeof cb !== "function")
      throw new Error("myReduce() needs a callback function");
    let acc = init !== undefined ? init : this[0]; // Initialize accumulator 'acc'
    let start = init !== undefined ? 1 : 0; // Determine the starting index based on 'init'
    for (let i = start; i < this.length; i++) {
      acc = cb(acc, this[i]);
    }
    return acc;
  };
}

console.log([1, 2, 3, 5].myReduce((acc, cur) => acc + cur, 0));
