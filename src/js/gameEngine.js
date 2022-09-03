function start(state, game) {
  game.createSuperman(state.superman);
  window.requestAnimationFrame((timestamp) => gameLoop(state, game, timestamp));
}

function gameLoop(state, game, timestamp) {
  const { superman} = state;
  const { supermanElement} = game;

  game.scoreScreen.textContent = `${state.score}PTS.`;
  game.healthScreen.textContent = `${state.superman.health}HP`;
  game.gameOverScreen.innerHTML = `<h2>Game Over!<br> Score:${state.score}pts.</h2>`;
  game.levelScreen.textContent = `${state.level}LV`;
  
  // Level's state
  
  if(state.score === 250){
    state.level = 2
    state.robotStats.speed = 3;
    state.robotStats.width = 120 ;
    state.robotStats.height = 100;

    
  
  }
  
  if(state.score === 500){
    state.level = 3;
    state.robotStats.speed = 4;
    
  }
  
  
  if(state.score === 750){
   state.level = 4;
    state.robotStats.speed = 4;
    state.robotStats.width = 140 ;
    state.robotStats.height = 120;

    
  }
  
  
  if(state.score ===  1000){
    state.level = 5;
    state.robotStats.speed = 6;
    
  }

  if(state.score ===  1250){
    state.level = 6;
    state.robotStats.speed = 6.5;
    state.robotStats.width = 160;
    state.robotStats.height = 140;

    
  }
  
  if(state.score ===  1750){
    state.level = 7;
    state.robotStats.speed = 7;
    state.robotStats.width = 180;
    state.robotStats.height = 160;

    
  }

  if(state.score ===  2000){
    state.level = 8;
    state.robotStats.speed = 7.5;
    state.robotStats.width = 180;
    state.robotStats.height = 160;

    
  }

  if(state.score ===  2500){
    state.level = 9;
    state.robotStats.speed = 7.5;
    state.robotStats.width = 200;
    state.robotStats.height = 180;

  }
  
  
  if(state.score ===  3000){
    state.level = 10;
    state.robotStats.speed = 8;
    state.robotStats.width = 200;
    state.robotStats.height = 180;

  }
  
  
  
  
  
  
  
  
  
  modifySupermanPosition(state, game);
  
  
  if(state.keys.Space){
  

   
    
    if(timestamp > state.laser.nextSpawnTimestamp){
      game.createLaserBlast(superman, state.laser);
      state.laser.nextSpawnTimestamp = timestamp + state.laser.firRate;
    }
   } else {
    // game.supermanElement.style.backgroundImage = 'url("./img/superman-stand.png")';

   }
  
 // Green Cripto
  if (timestamp > state.green.nextSpawnTimestamp) {
    game.createGreenCripto(state.green);
    state.green.nextSpawnTimestamp = timestamp + Math.random() * state.green.maxSpawnInterval;

}


let greenCriptorElement = document.querySelectorAll('.green-cripto');
greenCriptorElement.forEach(cripto => {
    let startY = parseInt(cripto.style.top);
    if(detectCollision(supermanElement,cripto)){
      state.superman.speed = 3;
      state.laser.speed = 3;

      setTimeout(() => {
        state.superman.speed = 7;
        state.laser.speed = 15;

      },'6000')
      cripto.remove();

    } 
   startY < game.gameScreen.offsetHeight ? 
   cripto.style.top = startY + state.green.speed + 'px' :
   cripto.remove();
 
  
});

 // Red Cripto

 if (timestamp > state.red.nextSpawnTimestamp) {
  game.createRedCripto(state.red);
  state.red.nextSpawnTimestamp = timestamp + Math.random() * state.red.maxSpawnInterval;

}


let redCriptorElement = document.querySelectorAll('.red-cripto');
redCriptorElement.forEach(cripto => {
    let startY = parseInt(cripto.style.top);
    if(detectCollision(supermanElement,cripto)){
      state.superman.speed = 10;
      state.laser.speed =30;

      setTimeout(() => {
        state.superman.speed = 7;
        state.laser.speed = 15;

      },'5000')
      cripto.remove();

    } 
   startY < game.gameScreen.offsetHeight ? 
   cripto.style.top = startY + state.red.speed + 'px' :
   cripto.remove();
 
  
});


  // Robots
  if (timestamp > state.robotStats.nextSpawnTimestamp) {
    game.createRobots(state.robotStats);
    state.robotStats.nextSpawnTimestamp =
      timestamp + Math.random() * state.robotStats.maxSpawnInterval;
  }
   let robotElements = document.querySelectorAll('.robot');
  document.querySelectorAll(".robot").forEach((robot) => {
    let startX = parseInt(robot.style.left);

    if(detectCollision(supermanElement,robot)){
      supermanElement.classList.remove('superman')
      supermanElement.classList.add('superman-blink')
      setTimeout(() => {
      supermanElement.classList.remove('superman-blink')
      supermanElement.classList.add('superman')
      },'200');
        state.superman.health -= 10;
        robot.remove();
       
   }

    startX > 0 ? 
    robot.style.left = startX - state.robotStats.speed + "px" : 
    robot.remove();
  
    
  });
  


    
  
     document.querySelectorAll('.laser').forEach(laser => {
       let  startX  = parseInt(laser.style.left);
     robotElements.forEach((robot) => {
           if(detectCollision(robot,laser,)){
            const audio = new Audio('/src/img/blast.mp3');
                    audio.play();
            state.score += state.killScore;
            robot.style.backgroundImage = 'url("/src/img/blast.png")';
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

    let hasCollision = !(first.top > second.bottom || first.bottom < second.top || first.right < second.left || first.left > second.right)

    return hasCollision;
}