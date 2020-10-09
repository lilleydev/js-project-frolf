class Course {
  constructor(name, city, state, id, comments) {
    (this.name = name),
      (this.city = city),
      (this.state = state),
      (this.id = id),
      (this.comments = comments.map((comment) => new Comment(comment.content)));
    // this.comments = (comments.map((comment) => new Comment(comment.content)))};
  }
  //have a comment object *******
  // to do: display the course with the comments -- toggle button so you can hide comments,
  // use the button for seeing comments

  // this.comment = comment;
  // debugger;
  // app.courses.push(this);
  // debugger;
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
    const commentButton = document.createElement("button");
    const commentUl = document.createElement("ul");

    deleteBtn.id = "deleteButton";
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
    coursesDiv.appendChild(commentUl);

    deleteBtn.addEventListener("click", (e) => this.delete(e));
    commentButton.addEventListener("click", (e) => this.getComment(e));
  }

  getComment() {
    debugger;
    fetch(`http://localhost:3000/courses/${this.id}/comments`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        data.forEach((comm) => {
          debugger;
          // fetch using nested route
          const c = new Comment(this.content, this.course_id);
          app.comments.push(c);
        });
        this.renderComment();
      })
      // fetch courses
      // render
      .catch((error) => console.error(error));
  }

  renderComment() {
    debugger;
  }

  save() {
    app.courses.push(this);
    // app.renderCourses();
    // debugger;
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
