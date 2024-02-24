class LineFactory {
  constructor(lines, position) {
    this.pos = position;
    this.lines = lines;
    this.i = 0;
    this.max_z = 0; 
  }
  
  show() {
    this.pos.z = abs(this.pos.z + random(0.003, 0.003));
    if (this.pos.z > 255) { this.pos.z = 255; }
    if (this.i > 25) {
      this.generate_line();
      this.i = random(0, 4);
    }
    //this.draw_arrow(this.pos.x, this.pos.y, this.pos.z);
    this.i += 1
  }
  
  generate_line() {
    append(this.lines, new NoiseLine(createVector(this.pos.x, this.pos.y, this.pos.z), 1, color(190, 130, this.pos.z * 5, 255 - this.pos.z)));
    append(this.lines, new NoiseLine(createVector(this.pos.x, this.pos.y, this.pos.z), -1, color(190, 130, this.pos.z * 5, 255 - this.pos.z)));
  }
  
  draw_arrow(x, y, length) {
    let angle = noise(this.pos.x / width, this.pos.y / width, this.pos.z / 10) * 3 * TWO_PI;
    let direction = p5.Vector.fromAngle(angle).mult(length);
    push();
    fill(190, 130, this.pos.z, 10);
    stroke(255, 255, 255,0);
    translate(x, y);
    rotate(direction.heading());
    translate(direction.mag() - length);
    triangle(0, 15 / 2, 0, -15 / 2, 15, 0);
    pop()
  }
}