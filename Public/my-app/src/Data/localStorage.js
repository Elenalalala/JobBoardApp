export const loadState = () => {
  try {
    const serialState = localStorage.getItem("appState");
    if (serialState === null) {
      console.error("fail to get app state");
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("appState", serialState);
  } catch (err) {
    console.log(err);
  }
};
