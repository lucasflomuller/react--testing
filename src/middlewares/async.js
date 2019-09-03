export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.then) return next(action);

  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
