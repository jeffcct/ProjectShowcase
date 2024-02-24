class NoiseLine {
   constructor(position, direction, colour) {
     this.position = position;
     this.colour = colour;
     this.step_size = 10;
     this.direction = direction;
     this.lifespan = 1;
   }
  
  in_bounds(position) {
    return (position.x < 0 || position.x > width || position.y < 0 || position.y > height);
    
  }
  
  show() {
    this.position.z += 0.003;
    this.lifespan -= random(0, 0.04);
    stroke(this.colour)
    let angle = noise(this.position.x / width * 2, this.position.y / height * 3, this.position.z) * 3 * TWO_PI;
    let direction = p5.Vector.fromAngle(angle).mult(this.step_size).mult(this.direction);
    let next_position = this.position.copy();
    next_position.add(direction);
    line(this.position.x, this.position.y, next_position.x, next_position.y);
    this.position = next_position
    if(!(this.in_bounds(next_position)) && this.lifespan > 0) {
      return false;
      } 
    
    return true;
  }
}