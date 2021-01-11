class Student extends User {
  constructor(name, surname, yearOfAdm) { //yearOfAdm - год поступления в институт
    super(name, surname)
    this.yearOfAdm = yearOfAdm
  }

  getFullName() {
    super.getFullName()
  }

  getCourse() {
    return new Date().getFullYear() - this.yearOfAdm;
  }
}
