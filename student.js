const { User } = require("./user");
class Student extends User {

  getCourse() {
    return new Date().getFullYear() - this.yearOfAdm;
  }
}

module.exports = { Student }
