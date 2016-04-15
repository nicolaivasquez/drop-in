const store = {
  state: {
    selected: [],
    active: [],
    ghost: [],
    start: {
      rows: 6,
      columns: 6,
    },
  },
  isSelected(obj) {
    return this.state.selected.filter(sel => sel.row === obj.row && sel.col === obj.col).length > 0;
  },
  isActive(obj) {
    return this.state.active.filter(sel => sel.row === obj.row && sel.col === obj.col).length > 0;
  },
  isGhost(obj) {
    return this.state.ghost.filter(sel => sel.row === obj.row && sel.col === obj.col).length > 0;
  },
};

export default store;
