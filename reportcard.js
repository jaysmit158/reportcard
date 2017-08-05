'use strict';

//This

class Student {
  constructor({ name, age, interestLevel = 5 } = {}) {
    this.name = name;
    this.age = age;
    this.interestLevel = interestLevel;
    this.grades = new Map();
  }
}

let joey = new Student({ name: 'Joey', age: 14,  });
let sarah = new Student({ name: 'Sarah', age: 14 });
let alex = new Student({ name: 'Alex', age: 15 });
let blake = new Student({ name: 'Blake', age: 13 });


joey.grades.set('History', 'C');
joey.grades.set('Math', 'B');
joey.grades.set('Science', 'A');
joey.grades.set('English', 'C');
joey.grades.set('Spanish', 'A');

sarah.grades.set('History', 'B');
sarah.grades.set('Math', 'A');
sarah.grades.set('Science', 'A');
sarah.grades.set('English', 'B');
sarah.grades.set('French', 'B');

alex.grades.set('History', 'C');
alex.grades.set('Math', 'C');
alex.grades.set('Science', 'C');
alex.grades.set('English', 'C');
alex.grades.set('Spanish', 'B');

blake.grades.set('History', 'A');
blake.grades.set('Math', 'C');
blake.grades.set('Science', 'C');
blake.grades.set('English', 'A');
blake.grades.set('French', 'A');


// console.log(Array.from(sarah.grades));