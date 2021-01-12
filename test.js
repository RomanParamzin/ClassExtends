const { User } = require("./user");
const { Student } = require("./student");
const { Professor } = require("./professor");

let user = new User("Ivan", "Semenich")
let student = new Student("Masha", "Kosolapova", 2010)
let professor = new Professor("Potap", "Potapich", 2018)

user.getFullName()
student.getFullName()
professor.getFullName()

student.getCourse()
professor.getWorkerYears()


console.log(user.getFullName())
console.log(student.getFullName())
console.log(professor.getFullName())
console.log(student.getCourse())
console.log(professor.getWorkerYears())
