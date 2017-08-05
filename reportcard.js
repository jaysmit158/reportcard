'use strict';

//This

class Student {
  constructor({ name, age, interestLevel} = {}) {
    this.name = name;
    this.age = age;
    this.interestLevel = interestLevel;
    this.grades = new Map();
  }
}

let joey = new Student({ name: 'Joey', age: 14 });
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

alex.grades.set('History', 'F');
alex.grades.set('Math', 'C');
alex.grades.set('Science', 'C');
alex.grades.set('English', 'D');

blake.grades.set('History', 'A');
blake.grades.set('Math', 'C');
blake.grades.set('Science', 'C');
blake.grades.set('English', 'A');


console.log(Array.from(sarah.grades),);