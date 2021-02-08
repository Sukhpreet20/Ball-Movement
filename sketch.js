var hypnoticBall;
var database;
var position;
function setup(){
    createCanvas(500,500);
    
    database = firebase.database();
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";

    //reading from firebase ball in our hypnoticBall
    // JS arrow function - ()=>{}
    database.ref('ball/position').on("value", (data)=>{
           position =  data.val();
           hypnoticBall.x = position.x;
           hypnoticBall.y = position.y; 
    } );
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

//updating to the firebase ball(x, y)
function changePosition(x,y){
    //JSON {'key': value}
    database.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y
    });
   
}
