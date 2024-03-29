function initGameObject() {
  const startGame = document.querySelector(".start-game");
  const gameScreen = document.querySelector(".game-screen");
  const scoreScreen =  document.querySelector(".score");
  const healthScreen =  document.querySelector(".health");
  const levelScreen = document.querySelector(".level");
  const gameOverScreen =  document.querySelector(".game-over");
  const gameOverScreenText =  document.querySelector(".game-over--text");



  return {
    startGame,
    gameScreen,
    scoreScreen,
    healthScreen,
    gameOverScreen,
    gameOverScreenText,
    levelScreen,
    

    
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
    },

    createLaserBlast(superman,laser) {
     let laserElement  = document.createElement("div");
     laserElement.classList.add('laser');
     laserElement.style.left = superman.startX + (superman.width - 55) + "px";
     laserElement.style.top = superman.startY + superman.height / 200 + "px";

     laserElement.style.width = laser.width + "px";
     laserElement.style.height = laser.height + "px";

     gameScreen.appendChild(laserElement);
     return laserElement;
    },



   
   createGreenCripto(stats) {
    const greenCriptorElement = document.createElement('div');
    greenCriptorElement.classList.add('green-cripto');
    greenCriptorElement.style.width = stats.width + 'px';
    greenCriptorElement.style.height = stats.height + 'px';
    greenCriptorElement.style.left =  Math.floor(Math.random() * (gameScreen.offsetWidth - stats.width)) + 'px'
    greenCriptorElement.style.top =   0 - stats.height + 'px';
    gameScreen.appendChild(greenCriptorElement);

    return greenCriptorElement

   },

   createRedCripto(stats) {
    const redCriptorElement = document.createElement('div');
    redCriptorElement.classList.add('red-cripto');
    redCriptorElement.style.width = stats.width + 'px';
    redCriptorElement.style.height = stats.height + 'px';
    redCriptorElement.style.left =  Math.floor(Math.random() * (gameScreen.offsetWidth - stats.width)) + 'px'
    redCriptorElement.style.top =   0 - stats.height + 'px';
    gameScreen.appendChild(redCriptorElement);

    return redCriptorElement;
   },



    createRobots(stats){
        let robotElement = document.createElement("div");
        robotElement.classList.add('robot');
        robotElement.style.width = stats.width + "px";
        robotElement.style.height = stats.height + "px";
        robotElement.style.left = gameScreen.offsetWidth - stats.width + "px"; 
        robotElement.style.top = Math.floor(Math.random() * (gameScreen.offsetHeight - stats.height + 10)) + "px";

        gameScreen.appendChild(robotElement);
           return robotElement;
    },


 
  
  };
}
