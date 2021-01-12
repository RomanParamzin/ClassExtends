const { User } = require("./user");
class Professor extends User {

  getWorkerYears() {
    return new Date().getFullYear() - this.yearOfAdm;
  }
}

module.exports = { Professor }
