let state = initState();
let game = initGameObject();
  
   const availableKeys = [
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
    'ArrowUp',
    'Space',

   ]
 

 document.addEventListener('keydown', (e) =>{
      if(availableKeys.includes(e.code)){
          state.keys[e.code] = true;
      }
 });

 document.addEventListener('keyup', (e) =>{
    if(availableKeys.includes(e.code)){
        state.keys[e.code] = false;
    }
});


game.startGame.addEventListener("click", () => {
  game.startGame.classList.add("hidden");
  game.gameScreen.classList.remove("hidden");

  start(state, game);
});
