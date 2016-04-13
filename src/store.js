export default {
  state: {
    selected: [
      { row: 1, col: 3 },
      { row: 2, col: 4 },
      { row: 0, col: 5 },
    ],
  },
  isSelected(obj) {
    return this.state.selected.filter(sel => sel.row === obj.row && sel.col === obj.col).length > 0;
  },
};
