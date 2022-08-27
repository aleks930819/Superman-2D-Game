let state = initState();
let game = initGameObject();

game.startGame.addEventListener("click", () => {
  game.startGame.classList.add("hidden");
  game.gameScreen.classList.remove("hidden");

  start(state, game);
});
