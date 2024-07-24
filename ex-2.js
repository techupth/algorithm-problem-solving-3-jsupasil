function sortStudentsByScore(students) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let newStudents = [...students];
  for (let i = 0; i < newStudents.length; i += 1) {
    for (let j = 0; j < newStudents.length - i - 1; j += 1) {
      if (newStudents[j].score < newStudents[j + 1].score) {
        const replace = newStudents[j];
        newStudents[j] = newStudents[j + 1];
        newStudents[j + 1] = replace;
      }
    }
  }
  return newStudents;
}

let students = [
  { id: "S001", name: "Anan", score: 85 },
  { id: "S002", name: "Boon", score: 92 },
  { id: "S003", name: "Chai", score: 78 },
  { id: "S004", name: "Dao", score: 95 },
  { id: "S005", name: "Ek", score: 88 },
  { id: "S006", name: "Fah", score: 80 },
];

console.log(sortStudentsByScore(students));
