
class Course {

  get price() {
    return 'GH¢' + this.coursePrice;
  }//task four

  set price(input) {
    this.coursePrice = value;
  }//task four


  constructor(titleVal, priceVal, lengthVal) {
    this.title = titleVal;
    this.coursePrice = priceVal;
    this.length = lengthVal;
  }//task one


  calculateValue() {
    return this.length / this.coursePrice;
  }//task two


  courseSummary() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${this.coursePrice}`
    );
  }//task two
}

//task one
const courseOne = new Course('Cooking Basics', 200, 25);
const courseTwo = new Course('Pencil Art', 300, 50);

//task one
console.log(courseOne);
console.log(courseTwo);

//task two
console.log(courseOne.calculateValue());
console.log(courseTwo.calculateValue());

//task two
courseOne.courseSummary();
courseTwo.courseSummary();


class PracticalCourse extends Course {
  constructor(title, length, price, exercises) {
    super(title, price, length);
    this.numOfExercises = exercises;
  }
}//task three

const painting = new PracticalCourse(
  'Painting Basics',
  500,
  25,
  15
);//task three

console.log(painting);//task three
painting.courseSummary();//task three

class TheoreticalCourse extends Course {
  publish() {
    console.log('I am Publishing');
  }
}//task three

const mathematics = new TheoreticalCourse(
  'Mathematics for JHS',
  150,
  26
);


mathematics.courseSummary();
mathematics.publish()
