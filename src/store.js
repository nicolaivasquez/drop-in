const store = {
  state: {
    selected: [],
    active: [],
    ghost: [],
    start: {
      rows: 6,
      columns: 6,
      players: [
        'A',
        'B',
      ],
    },
    ready: true,
    turn: 0,
    scores: {
      A: 0,
      B: 0,
    },
    win: [],
  },
  isSelected(obj) {
    return this.state.selected.filter(sel => sel.row === obj.row && sel.col === obj.col).length > 0;
  },
  isActive(obj) {
    return this.state.active.filter(sel => sel.row === obj.row && sel.col === obj.col).length > 0;
  },
  isActiveOfTurn(obj, turn) {
    return this.state.active.filter(sel => sel.row === obj.row && sel.col === obj.col
      && sel.player === turn).length > 0;
  },
  isGhost(obj) {
    return this.state.ghost.filter(sel => sel.row === obj.row && sel.col === obj.col).length > 0;
  },
  cellPlayerClass(obj) {
    const cell = this.state.active.filter(sel => sel.row === obj.row && sel.col === obj.col);
    if (cell.length === 0) {
      return '';
    }
    return cell[0].player === 0 ? 'playerA' : 'playerB';
  },
  cellGhostClass(obj) {
    const cell = this.state.ghost.filter(sel => sel.row === obj.row && sel.col === obj.col);
    if (cell.length === 0) {
      return '';
    }
    return cell[0].player === 0 ? 'playerA' : 'playerB';
  },
  isActivePlayer(turn) {
    return this.state.turn === turn;
  },
  getScorePlayer(player) {
    return this.state.scores[player];
  },
  playerIsWinner(player) {
    this.state.scores[player] += 1;
  },
  winningCell(obj) {
    return this.state.win.filter(sel => sel.row === obj.row && sel.col === obj.col).length > 0;
  },
};

export default store;
