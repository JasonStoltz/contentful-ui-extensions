import { getApi } from "./api";

export const actions = store => ({
  addComponent: (state, initialState) => {
    const newValue = {
      components: state.components.concat(initialState)
    };
    const api = getApi();
    api.field.setValue(newValue);
    return newValue;
  },
  removeComponent: (state, index) => {
    const componentsCopy = state.components.slice(0);
    componentsCopy.splice(index, 1);
    const newValue = {
      components: componentsCopy
    };
    const api = getApi();
    api.field.setValue(newValue);
    return newValue;
  }
});
