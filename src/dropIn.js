import store from './store';

function getColumns(col) {
  const columns = [];
  for (let i = 0; i < store.state.start.rows; i++) {
    columns.push({
      row: i,
      col,
    });
  }
  return columns;
}

const dropIn = {
  previewColumn(col) {
    store.state.selected = getColumns(col);
  },
  removePreview() {
    store.state.selected = [];
  },
  selectColumn(col) {
    // get all cells in column
    const topCellRow = Math.min.apply(null, [store.state.start.rows].concat(store.state.active
      .filter(cell => cell.col === col)
      .map(cell => cell.row)));
    if (topCellRow > 0) {
      let start = 0;
      const ghosting = setInterval(() => {
        if (start < topCellRow - 1) {
          store.state.ghost = [{
            row: start,
            col,
          }];
          start++;
        } else {
          store.state.ghost = [];
          clearInterval(ghosting);
          store.state.active.push({
            row: topCellRow - 1,
            col,
          });
        }
      }, 500);
    }
  },
};

export default dropIn;
