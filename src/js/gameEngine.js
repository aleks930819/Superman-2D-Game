
function start(state,game){
    game.createSuperman(state.superman);

    window.requestAnimationFrame(gameLoop.bind(null,state,game));
}


function gameLoop(state,game){
    const {superman} = state;
    const {supermanElement} = game;

        if(state.keys.ArrowLeft){
           superman.startX -= superman.speed;
        }


        
        if(state.keys.ArrowDown){
            superman.startY += superman.speed;
         }

         
        if(state.keys.ArrowRight){
            superman.startX += superman.speed;
         }
 
 
         
         if(state.keys.ArrowUp){
             superman.startY -= superman.speed;
          }
  
 
 

     supermanElement.style.left =  superman.startX + 'px';
     supermanElement.style.right =  superman.startX + 'px';
     supermanElement.style.bottom =  superman.startX + 'px';

     supermanElement.style.top =  superman.startY  + 'px';

 
  window.requestAnimationFrame(gameLoop.bind(null,state,game));
}