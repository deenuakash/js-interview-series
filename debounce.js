//The function is executed only after a specified period of inactivity. Useful for scenarios where you want to execute a function only once after the user has stopped performing actions.

const debounce = (fn, delay) => {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const res = () => {
  console.log("Debounced");
};

const debouncedFn = debounce(res, 1000);

window.addEventListener("resize", debouncedFn);
