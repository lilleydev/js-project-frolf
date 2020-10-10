class Course {
  constructor({ name, city, state, id, comments }) {
    (this.name = name),
      (this.city = city),
      (this.state = state),
      (this.comments = comments);
    this.id = id;
    // (this.comments = comments.map(
    //   (comment) => new Comment(comment.content, comment.course_id)
    // ));
    // this.comments = (comments.map((comment) => new Comment(comment.content)))};
  }
  //have a comment object *******
  // to do: display the course with the comments -- toggle button so you can hide comments,
  // use the button for seeing comments

  display() {
    //add new course to page
    const coursesDiv = document.getElementById("coursesDiv");
    const courseDiv = document.createElement("DIV");
    const h4 = document.createElement("h4");
    const cityP = document.createElement("P");
    const stateP = document.createElement("P");
    const deleteBtn = document.createElement("button");
    const commentButton = document.createElement("button");
    const commentUl = document.createElement("UL");
    // debugger;
    commentUl.id = `${this.id}commentUl`;
    deleteBtn.id = "deleteButton";
    commentButton.id = "commentButton";
    courseDiv.id = `${this.id}courseDiv`;

    h4.innerText = this.name;
    cityP.innerText = this.city;
    stateP.innerText = this.state;
    deleteBtn.innerText = "delete";
    commentButton.innerText = "See Comments";

    coursesDiv.appendChild(courseDiv);

    courseDiv.appendChild(h4);
    courseDiv.appendChild(cityP);
    courseDiv.appendChild(stateP);
    courseDiv.appendChild(commentUl);
    courseDiv.appendChild(deleteBtn);
    courseDiv.appendChild(commentButton);

    // deleteBtn.addEventListener("click", (e) => this.delete(e));
    commentButton.addEventListener("click", (e) => this.getComment(e));
    deleteBtn.addEventListener("click", (e) => {
      fetch(`http://localhost:3000/courses/${this.id}`, {
        method: "Delete",
      }).then(courseDiv.remove());
    });
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
      // parentElement = node.parentElement;
      // debugger;
      const commentUl = document.getElementById(`${this.id}commentUl`);
      const commentLi = document.createElement("LI");
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
}
