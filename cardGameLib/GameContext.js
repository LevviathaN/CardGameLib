function GameContext() {
  this.gcCardSize = 50;
  this.gcCardAspectRatioW = 4;
  this.gcCardAspectRatioH = 5;
  this.gcCardAspectRatio = this.gcCardAspectRatioH/this.gcCardAspectRatioW;
  this.gcPlayers = []; //array
  this.gcEnemyPlayersQtt = 1;
  this.gcTurnTimeout = 0;
  this.gcDraggedCard = null;
}

const gameContextProto = new GameContext();