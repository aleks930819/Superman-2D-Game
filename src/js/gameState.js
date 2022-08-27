
function initState(){
    const state = {
        superman: {
            width: 250,
            height: 80,
            startX:100,
            startY:200,
            speed:7,
        },

        robotStats:{
           width:200,
           height:50,
           nextSpawnTimestamp:0,
           maxSpawnInterval:1500,
           speed:8,
        },
        keys:{
            'ArrowLeft':false,
            'ArrowDown':false,
            'ArrowRight':false,
            'ArrowUp':false,
        }

        

    }
    return state;
}
