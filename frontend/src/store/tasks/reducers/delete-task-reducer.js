export default (state, payload) => ({
  ...state,
  direction: payload.data
});
