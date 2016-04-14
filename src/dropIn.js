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
};

export default dropIn;
