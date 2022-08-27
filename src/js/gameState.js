
function initState(){
    const state = {
        gameover:false,
        score:0,
        level:1,
        killScore:10,
        superman: {
            width: 250,
            height: 80,
            startX:100,
            startY:200,
            speed:7,
            health:100,
        },

        robotStats:{
           width:100,
           height:100,
           nextSpawnTimestamp:0,
           maxSpawnInterval:1500,
           speed:2,
        },
        clouds:{
            width:250,
            height:200,
            nextSpawnTimestamp:0,
            maxSpawnInterval:4000,
            speed:4,
        },

        laser: {
              width: 90,
              height:90,
              speed:15,
              nextSpawnTimestamp:0,
              firRate:250,
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
