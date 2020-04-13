const getObjectProperty = (obj, path, defaultValue) => {
  if (path === undefined) {
    return obj;
  }
  try {
    return path.split(".").reduce((o, i) => o[i], obj);
  } catch (e) {
    if (e instanceof TypeError)
      return defaultValue !== undefined ? defaultValue : undefined;
    throw e;
  }
};

export default getObjectProperty;
