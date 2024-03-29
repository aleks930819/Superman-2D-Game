
function initState(){
    const state = {
        gameOver:false,
        score:0,
        level:1,
        killScore:10,
        superman: {
            width: 189,
            height: 250,
            startX:100,
            startY:200,
            speed:7,
            health:100,
        },

        robotStats:{
           width:100,
           height:80,
           nextSpawnTimestamp:0,
           maxSpawnInterval:1500,
           speed:2,
        },
  
          green:{
            width: 54,
            height: 43,
            nextSpawnTimestamp: 11000,
            maxSpawnInterval: 15000,
            startInterval: 15000,
            speed: 3,
         },

         red:{
            width: 54,
            height: 43,
            nextSpawnTimestamp: 15000,
            maxSpawnInterval: 15000,
            startInterval: 15000,
            speed: 3.5,
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
