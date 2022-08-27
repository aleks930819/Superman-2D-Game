function start(state, game) {
  game.createSuperman(state.superman);

  window.requestAnimationFrame((timestamp) => gameLoop(state, game, timestamp));
}

function gameLoop(state, game, timestamp) {
  const { superman } = state;
  const { supermanElement } = game;

  game.scoreScreen.textContent = `${state.score}PTS.`;
  game.healthScreen.textContent = `${state.superman.health}HP`;
  game.gameOverScreen.innerHTML = `<h2>Game Over!<br> Score:${state.score.toFixed(0)}pts.</h2>`;
  game.levelScreen.textContent = `${state.level}LV`;

 if(state.score === 250){
   state.level = 2;
   
   state.robotStats.speed = 3;
  }
  
  if(state.score === 500){
    state.level = 3;
  state.robotStats.width = 400;
  state.robotStats.speed = 4;

}
  

if(state.score === 750){
  state.level = 4;
  state.robotStats.speed = 5;
  state.robotStats.width = 700;

}
  

if(state.score ===  1000){
  state.level = 5;
  state.robotStats.speed = 6;

}
  
   
  
 
  modifySupermanPosition(state, game);
  

   if(state.keys.Space){

     if(timestamp > state.laser.nextSpawnTimestamp){
        game.createLaserShout(superman, state.laser);
        state.laser.nextSpawnTimestamp = timestamp + state.laser.firRate;
     }
   }
    
  if (timestamp > state.robotStats.nextSpawnTimestamp) {
    game.createRobots(state.robotStats);
    state.robotStats.nextSpawnTimestamp =
      timestamp + Math.random() * state.robotStats.maxSpawnInterval;
  }
   let robotElements = document.querySelectorAll('.robot');
  document.querySelectorAll(".robot").forEach((robot) => {
    let startX = parseInt(robot.style.left);
    if(detectCollision(supermanElement,robot,game)){
        state.superman.health -= 10;
        robot.remove();
        
 
       
       
   }

    startX > 0 ? robot.style.left = startX - state.robotStats.speed + "px" : robot.remove();
  
    
  });
    
     document.querySelectorAll('.laser').forEach(laser => {
       let  startX  = parseInt(laser.style.left);
     robotElements.forEach((robot) => {
           if(detectCollision(robot,laser,)){
            state.score += state.killScore;
            robot.style.backgroundImage = 'url("/src/img/blast.png")';
            console.log(robot);
            setTimeout(() =>{
              robot.remove();
            },'250'  );
            laser.remove();

        
           }
     });
   startX >  game.gameScreen.offsetWidth ? laser.remove() : laser.style.left = startX + state.laser.speed + "px";
     });
   
  supermanElement.style.left = superman.startX + "px";
  supermanElement.style.right = superman.startX + "px";
  supermanElement.style.bottom = superman.startX + "px"; 
  supermanElement.style.top = superman.startY + "px";
  if(state.superman.health === 0){
    game.gameScreen.classList.add("hidden");
     game.gameOverScreen.classList.remove("hidden");
  }  else {

       window.requestAnimationFrame(gameLoop.bind(null, state, game));
   }
}

function modifySupermanPosition(state, game) {
  const { superman } = state;

  if (state.keys.ArrowLeft) {
    superman.startX = Math.max(superman.startX - superman.speed, 0);
  }

  if (state.keys.ArrowDown) {
    superman.startY = Math.min(
      superman.startY + superman.speed,
      game.gameScreen.offsetHeight - superman.height
    );
  }

  if (state.keys.ArrowRight) {
    superman.startX = Math.min(
      superman.startX + superman.speed,
      game.gameScreen.offsetWidth - superman.width
    );
  }

  if (state.keys.ArrowUp && superman.startY > 0) {
    superman.startY = Math.max(superman.startY - superman.speed, 0);
  }
}

function  detectCollision(objectA,objectB){
    let first =  objectA.getBoundingClientRect();
    let second =  objectB.getBoundingClientRect();

    let hasCollision = !(first.top > second.top || first.bottom < second.top || first.right  < second.left || first.left > second.right);

    return hasCollision;
}