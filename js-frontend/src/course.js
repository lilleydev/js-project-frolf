class Course {
  constructor(name, city, state, id, comments) {
    (this.name = name),
      (this.city = city),
      (this.state = state),
      (this.id = id),
      (this.comments = comments.map(
        (comment) => new Comment(comment.content, comment.course_id)
      ));
    // this.comments = (comments.map((comment) => new Comment(comment.content)))};
  }
  //have a comment object *******
  // to do: display the course with the comments -- toggle button so you can hide comments,
  // use the button for seeing comments

  display() {
    //add new course to page
    const coursesDiv = document.getElementById("coursesDiv");
    const h4 = document.createElement("h4");
    const cityP = document.createElement("P");
    const stateP = document.createElement("P");
    const deleteBtn = document.createElement("button");
    const commentButton = document.createElement("button");
    const commentUl = document.createElement("UL");

    commentUl.id = "commentUl";
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
    coursesDiv.appendChild(commentUl);
    coursesDiv.appendChild(deleteBtn);
    coursesDiv.appendChild(commentButton);

    deleteBtn.addEventListener("click", (e) => this.delete(e));
    commentButton.addEventListener("click", (e) => this.getComment(e));
  }

  getComment() {
    // debugger;
    fetch(`http://localhost:3000/courses/${this.id}/comments`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        data.forEach((comm) => {
          // debugger;
          // fetch using nested route
          const c = new Comment(comm.content, comm.course_id);
          // debugger;
          app.comments.push(c);
          // debugger;
        });
        // debugger;
        this.renderComment();
      })
      // fetch courses
      // render
      .catch((error) => console.error(error));
  }

  renderComment() {
    // debugger;
    this.comments.forEach((comment) => {
      const commentLi = document.createElement("LI");
      const commentUl = document.getElementById("commentUl");
      commentLi.innerText = comment.content;
      commentUl.appendChild(commentLi);
    });
    // debugger;
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
