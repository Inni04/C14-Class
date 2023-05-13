var student={
  name:'Inaya',
  class: 'Year 9',
  favourite_suject:'Music',
  marks:[77,78,98,84,87,100]
}

function setup() {
  createCanvas(400, 400);
  console.log(student.class)
  student.class='Year 10'
  console.log(student.class)
}


function draw() {
  background(220);
}