//The function is executed at most once every specified period of time. Useful for scenarios where you want to limit how often a function is executed but still ensure it runs regularly.

const throttle = (fn, delay) => {
  let throttle = true;
  return function (...args) {
    if (throttle) {
      fn.apply(this, args);
      throttle = false;
      setTimeout(() => {
        throttle = true;
      }, delay);
    }
  };
};

const res = () => {
  console.log("Throttled");
};

const throttledFn = throttle(res, 1000);

window.addEventListener("scroll", throttledFn);
