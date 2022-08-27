function initGameObject() {
  const startGame = document.querySelector(".start-game");
  const gameScreen = document.querySelector(".game-screen");

  return {
    startGame,
    gameScreen,
    createSuperman(initialState) {
      let supermanElement = document.createElement("div");
      supermanElement.classList.add("superman");

      supermanElement.style.width = initialState.width + "px";
      supermanElement.style.height = initialState.height + "px";

      supermanElement.style.left = initialState.startX + "px";
      supermanElement.style.top = initialState.startY + "px";


      this.supermanElement = supermanElement;
      gameScreen.appendChild(supermanElement);
      return supermanElement;
    }
  };
}
