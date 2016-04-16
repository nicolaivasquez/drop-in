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
    if (store.state.ready) {
      store.state.ready = false;
      // get all cells in column
      const topCellRow = Math.min.apply(null, [store.state.start.rows].concat(store.state.active
        .filter(cell => cell.col === col)
        .map(cell => cell.row)));
      if (topCellRow > 0) {
        let start = 0;
        const ghosting = setInterval(() => {
          if (start < topCellRow - 1) {
            const ghostCell = { row: start, col, player: store.state.turn };
            store.state.ghost = [ghostCell];
            start++;
          } else {
            store.state.ghost = [];
            clearInterval(ghosting);
            store.state.active.push({
              row: topCellRow - 1,
              col,
              player: store.state.turn,
            });
            if (this.isWinner({
              row: topCellRow - 1,
              col,
            }, store.state.turn)) {
              alert('Winner');
            } else {
              store.state.ready = true;
              store.state.turn = 1 - store.state.turn;
            }
          }
        }, 300);
      }
    }
  },
  isWinner(cell, turn) {
    function cellObj(row, col) {
      return {
        row,
        col,
      };
    }
    function fourLine(c, offset1, offset2, offset3) {
      return store.isActiveOfTurn(cellObj(c.row, c.col), turn)
        && store.isActiveOfTurn(cellObj(c.row + offset1[0], c.col + offset1[1]), turn)
        && store.isActiveOfTurn(cellObj(c.row + offset2[0], c.col + offset2[1]), turn)
        && store.isActiveOfTurn(cellObj(c.row + offset3[0], c.col + offset3[1]), turn);
    }
    function isWinnerY(c) {
      return fourLine(c, [1, 0], [2, 0], [3, 0]);
    }
    function isWinnerX(c) {
      return fourLine(c, [0, -1], [0, -2], [0, -3])
        || fourLine(c, [0, 1], [0, -1], [0, 2])
        || fourLine(c, [0, 2], [0, 1], [0, -1])
        || fourLine(c, [0, 3], [0, 2], [0, 1]);
    }
    function isWinnerD(c) {
      return fourLine(c, [1, 1], [2, 2], [3, 3])
        || fourLine(c, [-1, -1], [1, 1], [2, 2])
        || fourLine(c, [-2, -2], [-1, -1], [1, 1])
        || fourLine(c, [-3, -3], [-2, -2], [-1, -1])
        || fourLine(c, [1, -1], [2, -2], [3, -3])
        || fourLine(c, [-1, 1], [1, -1], [2, -2])
        || fourLine(c, [-2, 2], [-1, 1], [1, -1])
        || fourLine(c, [-3, 3], [-2, 2], [-1, 1]);
    }
    return isWinnerY(cell) || isWinnerX(cell) || isWinnerD(cell);
  },
};

export default dropIn;
