const getObjectProperty = (obj, path, defaultValue) => {
  const checkForDefaultValue = value =>
    value !== undefined ? value : undefined;

  if (path === undefined) {
    return obj;
  }
  try {
    const value = path.split('.').reduce((o, i) => o[i], obj);
    return value !== undefined ? value : checkForDefaultValue(defaultValue);
  } catch (e) {
    if (e instanceof TypeError) return checkForDefaultValue(defaultValue);
    throw e;
  }
};

export default getObjectProperty;
