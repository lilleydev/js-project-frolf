class Course {
  constructor(name, city, state, id) {
    (this.name = name),
      (this.city = city),
      (this.state = state),
      (this.id = id);
    // app.courses.push(this);
    // debugger;
  }

  // move over
  display() {
    //add new course to page
    const coursesDiv = document.getElementById("coursesDiv");
    const h4 = document.createElement("h4");
    const cityP = document.createElement("P");
    const stateP = document.createElement("P");
    const deleteBtn = document.createElement("button");
    deleteBtn.id = "delete";

    h4.innerText = this.name;
    cityP.innerText = this.city;
    stateP.innerText = this.state;
    deleteBtn.innerText = "delete";

    coursesDiv.appendChild(h4);
    coursesDiv.appendChild(cityP);
    coursesDiv.appendChild(stateP);
    coursesDiv.appendChild(deleteBtn);
  }

  save() {
    app.courses.push(this);
    app.renderCourses();
  }
}
