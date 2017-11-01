export const actions = store => ({
  addComponent: (state, type) => {
    return {
      components: state.components.concat({
        type
      })
    }
  },
});