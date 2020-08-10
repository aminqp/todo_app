let timeout = null;

const autoCompleteFilter = (
  data = [],
  search = null,
  cb = () => null,
  time = 400
) => {
  try {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!search) {
        return data;
      }
      const rg = new RegExp(search.toLowerCase());
      const tmp = data.filter((item) => rg.test(item.label.toLowerCase()));
      cb(tmp);
    }, time);
  } catch (e) {
    return data;
  }
};

export default autoCompleteFilter;
