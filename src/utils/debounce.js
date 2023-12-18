/**
 * The debounce function is a higher-order function that delays the execution of a given function until
 * a certain amount of time has passed without any further invocations.
 * @param func - The `func` parameter is the function that you want to debounce. It is the function
 * that will be called after the delay has passed without any further invocations.
 * @param delay - The `delay` parameter is the amount of time in milliseconds that the `func` function
 * should be delayed before being executed.
 * @returns The debounce function returns a new function that will execute the provided `func` after a
 * specified `delay` has passed without the new function being called again.
 */
function debounce(func, delay) {
  let timeoutId;
  return function() {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };
}

export default debounce