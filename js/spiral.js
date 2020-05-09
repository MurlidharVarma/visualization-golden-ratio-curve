class Spiral{
    constructor(centerX, centerY, radius, direction, angleIncrement, startAngle, color='black', stroke=1){
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.direction = direction;
        this.angleIncrement = angleIncrement;
        this.angle = startAngle;
        this.color = color;
        this.strokeWeight = stroke;
        // this.render();   
    }

    render(){
        // this.renderTitle(10,10, this.radius);
        // this.renderTitle(10, 20, this.angle);
        stroke(this.color);
        push()
            beginShape(LINES)
                translate(this.centerX, this.centerY);
                let x = this.radius * cos(this.angle);
                let y = this.radius * sin(this.angle);
                vertex(x,y);
            endShape(CLOSE);
        pop()
    }

    
    renderAll(){
        stroke(this.color);
        strokeWeight(this.strokeWeight);
        push()
            beginShape(LINES)
                translate(this.centerX, this.centerY);
                while(this.radius < min(windowWidth,windowHeight)){
                    let x = this.radius * cos(this.angle);
                    let y = this.radius * sin(this.angle);
                    vertex(x,y);
                    this.evaluateIncrements();
                }
            endShape();
        pop()
    }

    plotNextPoint(){
        if(this.radius < min(windowWidth,windowHeight)){
            this.evaluateIncrements();
            this.render();
        }
    }

    evaluateIncrements(){
        this.radius = this.radius + (1+sqrt(5))/2;
        this.angle = this.angle + (this.direction * this.angleIncrement);
    }

    renderTitle(x,y,txt){
        text(txt, x, y);
    }
}