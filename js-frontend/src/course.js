class Course {
  constructor(name, city, state) {
    (this.name = name),
      (this.city = city),
      (this.state = state),
      appContainer.courses.push(this);
    // debugger;
  }
}
