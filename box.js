class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.visiblity = 255;
    }
    display(){
      if(this.body.speed < 3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world, this.body);
        this.visiblity = this.visiblity - 5;
        push();
        tint(255, this.visiblity);
        pop();
      }
    }
    score (){
      if(this.visiblity<0 && this.visiblity > -105){
        score++;
      }
    }
  };
  