const User = require("./user");

class Student extends User {
  constructor(name, surname, yearOfAdm) {
    super(name, surname);
    this.name = name;
    this.surname = surname;
    this.yearOfAdm = yearOfAdm;
  }

  getCourse() {
    return new Date().getFullYear() - this.yearOfAdm;
  }
}
