const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

function convertArrayToObject(students) {
  const arrayOfObj = [];

  for (let i = 0; i < students.length; i++) {
    const obj = {
      name: students[i][0],
      skills: students[i][1],
      scores: students[i][2]
    };
    arrayOfObj.push(obj);
  }

  return arrayOfObj;
}

console.log(convertArrayToObject(students));

// SECOND PART
//------------------------------------------------------------------------

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience: ['Python', 'R', 'D3.js']
  }
};

const newStudent = {};
Object.assign(newStudent, student);

// (i)
newStudent.skills.frontEnd.push({ skill: 'BootStrap', level: 8 });
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
newStudent.skills.dataScience.push('SQL');

console.log(newStudent)
// -----------------------------------------------------------------
// THIRD PART

// a
console.log(' LENGTH OF KEYS - ', Object.keys(student));
// b
console.log(' LENGTH OF VALUES - ', Object.values(student));
//c
console.log(' LENGTH OF SKILL KEYS - ', Object.values(student.skills));
// d
// --
// e
Object.keys(student).forEach(key => console.log(key));