class Course {
  constructor(name, city, state, id) {
    (this.name = name),
      (this.city = city),
      (this.state = state),
      (this.id = id);
    // this.comment = comment;
    // debugger;
    // app.courses.push(this);
    // debugger;
  }
  // courseEventListeners() {
  //   const deleteBtn = document.getElementById("deleteButton");
  //   deleteBtn.addEventListener("click", this.delete);
  // }
  // move over
  display() {
    //add new course to page
    const coursesDiv = document.getElementById("coursesDiv");
    const h4 = document.createElement("h4");
    const cityP = document.createElement("P");
    const stateP = document.createElement("P");
    const deleteBtn = document.createElement("button");
    deleteBtn.id = "deleteButton";
    const commentButton = document.createElement("button");
    commentButton.id = "commentButton";

    h4.innerText = this.name;
    cityP.innerText = this.city;
    stateP.innerText = this.state;
    deleteBtn.innerText = "delete";
    commentButton.innerText = "See Comments";

    coursesDiv.appendChild(h4);
    coursesDiv.appendChild(cityP);
    coursesDiv.appendChild(stateP);
    coursesDiv.appendChild(deleteBtn);
    coursesDiv.appendChild(commentButton);

    deleteBtn.addEventListener("click", (e) => this.delete(e));
    commentButton.addEventListener("click", (e) => this.getComment(e));
  }

  save() {
    app.courses.push(this);
    // app.renderCourses();
    debugger;
    this.display();
  }

  delete(e) {
    // debugger;
    fetch(`http://localhost:3000/courses/${this.id}`, {
      method: "DELETE",
    }).then(() => {
      // debugger;
      delete app.courses[this.id];
      // app.renderCourses();
      this.display();
      // this.courses;
      // delete courses[course.id]
    });
  }
}
