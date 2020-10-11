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

    const commentForm = document.createElement("FORM");
    // const commentDiv = document.createElement("DIV");

    const h4 = document.createElement("h4");
    const cityP = document.createElement("P");
    const stateP = document.createElement("P");
    const deleteBtn = document.createElement("button");

    const commentButton = document.createElement("button");
    const createCommentButton = document.createElement("button");
    const commentInput = document.createElement("INPUT");
    const commentUl = document.createElement("UL");
    // debugger;
    commentUl.id = `${this.id}commentUl`;
    deleteBtn.id = "deleteButton";
    commentButton.id = "commentButton";
    createCommentButton.id = "createCommentButton";
    courseDiv.id = `${this.id}courseDiv`;
    commentForm.id = "commentForm";
    commentInput.id = "commentInput";

    h4.innerText = this.name;
    cityP.innerText = this.city;
    stateP.innerText = this.state;
    commentInput.innertText = this.content;
    deleteBtn.innerText = "delete";
    commentButton.innerText = "See Comments";
    createCommentButton.innerText = "Add Comment";

    coursesDiv.appendChild(courseDiv);

    courseDiv.appendChild(h4);
    courseDiv.appendChild(cityP);
    courseDiv.appendChild(stateP);
    courseDiv.appendChild(commentUl);
    courseDiv.appendChild(deleteBtn);
    courseDiv.appendChild(commentButton);
    courseDiv.appendChild(commentForm);

    commentForm.appendChild(commentInput);
    commentForm.appendChild(createCommentButton);

    // deleteBtn.addEventListener("click", (e) => this.delete(e));
    commentButton.addEventListener("click", (e) => this.getComment(e));

    // const createCommentButton = document.getElementById("newComment");
    // createCommentButton.addEventListener("click", (e) => this.addComment(e));

    // console.log(createCommentButton);
    commentForm.addEventListener("submit", (e) => this.addComment(e));

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
          // if c.content == undefined

          // else
          app.comments.push(c);
          // debugger;
        });
        // debugger;
        // if this.comments = [] ***
        const length = this.comments.length;
        if (length < 1) {
          alert("There are no comments for this course");
        } else {
          this.renderComment();
        }
        // this.comments.length > 0
      })
      // fetch courses
      // render
      .catch((error) => console.error(error));
  }

  addComment = (e) => {
    e.preventDefault();
    //e.target.value
    const id = document.getElementById("commentForm");
    // debugger;
    const comment = new Comment({
      content: e.target.commentInput.value,
      course_id: this.id,
    });
    this.createComment(comment);
  };

  createComment(comment) {
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: {
          content: comment.content,
          course_id: comment.course_id,
        },
      }),
    });
    app.comments.push(comment);
    // document.getElementById("commentForm").clearFields();
    // debugger;
  }

  renderComment() {
    // debugger;
    this.comments.forEach((comment) => {
      // parentElement = node.parentElement;

      const commentUl = document.getElementById(`${this.id}commentUl`);
      const commentLi = document.createElement("LI");
      commentLi.innerText = comment.content;
      commentUl.appendChild(commentLi);
    });
    // debugger;

    // if (x.style.display === "none") {
    //   // add state to display
    //   x.innerHTML = `Try out ${name} at ${city}!`;
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  }

  save() {
    app.courses.push(this);
    // app.renderCourses();
    // debugger;
    this.display();
  }
}
