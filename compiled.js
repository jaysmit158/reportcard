'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function Student() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      name = _ref.name,
      age = _ref.age,
      _ref$interestLevel = _ref.interestLevel,
      interestLevel = _ref$interestLevel === undefined ? 5 : _ref$interestLevel;

  _classCallCheck(this, Student);

  this.name = name;
  this.age = age;
  this.interestLevel = interestLevel;
  this.grades = new Map();
};

var joey = new Student({ name: 'Joey', age: 14 });
var sarah = new Student({ name: 'Sarah', age: 14 });
var alex = new Student({ name: 'Alex', age: 15 });
var blake = new Student({ name: 'Blake', age: 13 });

joey.grades.set(' History', ' C ');
joey.grades.set(' Math', ' B ');
joey.grades.set(' Science', ' A ');
joey.grades.set(' English', ' C ');
joey.grades.set(' Spanish', ' A ');

sarah.grades.set(' History', ' B ');
sarah.grades.set(' Math', ' A ');
sarah.grades.set(' Science', ' A ');
sarah.grades.set(' English', ' B ');
sarah.grades.set(' French', ' B ');

alex.grades.set(' History', ' C ');
alex.grades.set(' Math', ' C ');
alex.grades.set(' Science', ' C ');
alex.grades.set(' English', ' C ');
alex.grades.set(' Spanish', ' B ');

blake.grades.set(' History', ' A ');
blake.grades.set(' Math', ' C ');
blake.grades.set(' Science', ' C ');
blake.grades.set(' English', ' A ');
blake.grades.set(' French', ' A ');

var joeyGrades = Array.from(joey.grades);
var sarahGrades = Array.from(sarah.grades);
var alexGrades = Array.from(alex.grades);
var blakeGrades = Array.from(blake.grades);

var report1 = document.querySelector('.reportcard#joey');
var report2 = document.querySelector('.reportcard#sarah');
var report3 = document.querySelector('.reportcard#alex');
var report4 = document.querySelector('.reportcard#blake');

report1.innerHTML = 'Joey\'s Grades for the Semester: ' + joeyGrades;
report2.innerHTML = 'Sarah\'s Grades for the Semester: ' + sarahGrades;
report3.innerHTML = 'Alex\'s Grades for the Semester: ' + alexGrades;
report4.innerHTML = 'Blake\'s Grades for the Semester: ' + blakeGrades;
