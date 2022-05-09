export const TILE_STATUSES = {
    DEAD: "dead",
    ALIVE: "alive",
};

export function createBoard(boardSize) {
    const board = [];
  
    for (let x = 0; x < boardSize; x++) {
      const row = [];
      for (let y = 0; y < boardSize; y++) {
        const element = document.createElement("div");
        element.dataset.status = TILE_STATUSES.DEAD;
        const tile = {
          element,
          x,
          y,
          get status() {
            return this.element.dataset.status;
          },
          set status(value) {
            this.element.dataset.status = value;
          },
        };
        row.push(tile);
      }
      board.push(row);
    }
    console.log(board);
    return board;
}

export function markTile(tile) {
    if (tile.status === TILE_STATUSES.DEAD)
        return tile.status = TILE_STATUSES.ALIVE;

    return tile.status = TILE_STATUSES.DEAD;
  }