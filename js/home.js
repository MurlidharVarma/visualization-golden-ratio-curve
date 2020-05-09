let SPIRAL;
let COLORS = ['black','red','magenta','orangered','navy','green'];
let NO_OF_SPIRALS = 2;
let angleIncrement=30;
let STROKE_WEIGHT = 2;
FRAME_RATE=60;
let height, width, CANVAS;

function configChange(){
    angleIncrement = parseInt(document.querySelector("#angleIncrement").value);
    NO_OF_SPIRALS = parseInt(document.querySelector("#curveNumbers").value);
    STROKE_WEIGHT = parseInt(document.querySelector("#thickness").value);

    document.querySelector("#curveNumbersValue").innerText = document.querySelector("#curveNumbers").value;
    document.querySelector("#thicknessValue").innerText = document.querySelector("#thickness").value;
    document.querySelector("#angleIncrementValue").innerText = document.querySelector("#angleIncrement").value;
    FRAME_RATE=60;
    calcCanvasSize();
    resizeCanvas(width,height)
    redraw();
  }

function setup(){
    calcCanvasSize();
    CANVAS = createCanvas(width, height);
    CANVAS.parent('canvas-container');
    angleMode(DEGREES);
}

function draw(){
    clear();
    frameRate(FRAME_RATE);
    for(let angle=0; angle<=360; angle+=angleIncrement){
        for(let no=0; no<NO_OF_SPIRALS; no++){
            let i=(no%2==0)?1:-1;
            SPIRAL= new Spiral(width/2,height/2,1,i,1,angle,COLORS[no%COLORS.length],STROKE_WEIGHT);
            SPIRAL.renderAll();
        }
    }
    FRAME_RATE = 0;

    // for(let i=0; i<SPIRAL.length; i++){
    //     strokeWeight(1)
    //     SPIRAL[i].renderAll();
    // }
}

function calcCanvasSize(){
    height = windowHeight-90;
    width = windowWidth-10;
}