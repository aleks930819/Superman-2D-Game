
function start(state,game){
    game.createSuperman(state.superman);

    window.requestAnimationFrame(gameLoop.bind(null,state,game));
}


function gameLoop(state,game){
    const {superman} = state;
    const {supermanElement} = game;

        if(state.keys.ArrowLeft){
           superman.startX = Math.max(superman.startX - superman.speed,0);
        }


        
        if(state.keys.ArrowDown){
            superman.startY = Math.min(superman.startY + superman.speed, game.gameScreen.offsetHeight  - superman.height);
         }

         
        if(state.keys.ArrowRight){

             superman.startX = Math.min(superman.startX + superman.speed, game.gameScreen.offsetWidth - superman.width);
         }
 
 
         
         if(state.keys.ArrowUp  && superman.startY > 0){
             superman.startY  = Math.max(superman.startY - superman.speed,0);
          }
  
 
 

     supermanElement.style.left =  superman.startX + 'px';
     supermanElement.style.right =  superman.startX + 'px';
     supermanElement.style.bottom =  superman.startX + 'px';

     supermanElement.style.top =  superman.startY  + 'px';

 
  window.requestAnimationFrame(gameLoop.bind(null,state,game));
}