import { getApi } from "./api";

export const actions = store => ({
  addComponent: (state, type) => {
    const newValue = {
      components: state.components.concat({
        type
      })
    };
    const api = getApi();
    api.field.setValue(newValue);
    return newValue;
  }
});
