
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
        laser: {
              width:25,
              height:25,
              speed:15,
        },
        keys:{
            'ArrowLeft':false,
            'ArrowDown':false,
            'ArrowRight':false,
            'ArrowUp':false,
            'Space':false,
        }

        

    }
    return state;
}
