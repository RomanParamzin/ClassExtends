class Professor extends User {
  constructor(name, surname, yearOfAdm) {
    super(name, surname)
    this.yearOfAdm = yearOfAdm
  }

  getFullName() {
    super.getFullName()
  }

  getWorkerYears() {
    return new Date().getFullYear() - this.yearOfAdm;
  }
}
