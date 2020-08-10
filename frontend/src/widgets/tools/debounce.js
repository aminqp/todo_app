let timeout;
const debounce = (func, wait, immediate) => () => {
  const context = this; const
    // eslint-disable-next-line no-undef
    args = arguments;
  const later = () => {
    timeout = null;
    if (!immediate) func.apply(context, args);
  };
  const callNow = immediate && !timeout;
  clearTimeout(timeout);
  timeout = setTimeout(later, wait);
  if (callNow) func.apply(context, args);
};

export default debounce;
