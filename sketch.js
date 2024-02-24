noise_lines = [];
generators = [];
function setup() {
  createCanvas(1190, 1300);
  background(0);
  for (let x = 0; x <= width; x += 20) {
    for (let y = 0; y <= height; y+= 60) {
      append(generators, new LineFactory(noise_lines, createVector(x, y, 0)));
    } 
  }
  i = 0;
}

function draw() {
  background(0, 0, 0, 20)
  for (let i = noise_lines.length - 1; i > -1; i--) {
    if (noise_lines[i].show()) {
      noise_lines.splice(i, 1);
    }
  }

  for (let generator of generators) {
    generator.show();
  }
}





