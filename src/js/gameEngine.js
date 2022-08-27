
function start(state,game){
    game.createSuperman(state.superman);

    window.requestAnimationFrame(gameLoop.bind(null,state,game));
}


function gameLoop(state,game){
window.requestAnimationFrame(gameLoop);
}