class Course {
  constructor({ name, city, state, id, comments }) {
    (this.name = name),
      (this.city = city),
      (this.state = state),
      (this.comments = comments);
    this.id = id;
  }

  display() {
    const coursesDiv = document.getElementById("coursesDiv");
    const courseDiv = document.createElement("DIV");

    const commentForm = document.createElement("FORM");

    const h4 = document.createElement("h4");
    const cityP = document.createElement("P");
    const stateP = document.createElement("P");
    const deleteBtn = document.createElement("button");

    const commentButton = document.createElement("button");
    const createCommentButton = document.createElement("button");
    const commentInput = document.createElement("INPUT");
    const commentUl = document.createElement("UL");

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

    commentButton.addEventListener("click", (e) => this.getComment(e));

    commentForm.addEventListener("submit", (e) => this.addComment(e));

    deleteBtn.addEventListener("click", (e) => {
      fetch(`http://localhost:3000/courses/${this.id}`, {
        method: "Delete",
      }).then(courseDiv.remove());
    });
  }

  addComment(e) {
    e.preventDefault();
    //e.target.value
    const id = document.getElementById("commentForm");
    // debugger;
    const comment = new Comment({
      content: e.target.commentInput.value,
      course_id: this.id,
    });
    app.comments.push(comment);
    this.createComment(comment);
  }

  createComment(comment) {
    // debugger;
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: comment.content,
        course_id: this.id,
      }),
    });

    document.querySelector("input[id=commentInput]").value = "";
  }

  getComment() {
    // debugger;
    fetch(`http://localhost:3000/courses/${this.id}/comments`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        data.forEach((comm) => {
          const c = new Comment(comm.content, comm.course_id);

          app.comments.push(c);
        });
        const length = this.comments.length;
        if (length < 1) {
          alert("There are no comments for this course");
        } else {
          this.renderComment();
        }
      })
      .catch((error) => console.error(error));
  }

  renderComment() {
    this.comments.forEach((comment) => {
      const commentUl = document.getElementById(`${this.id}commentUl`);
      const commentLi = document.createElement("LI");
      commentLi.innerText = comment.content;
      commentUl.appendChild(commentLi);
    });
  }

  save() {
    app.courses.push(this);
    this.display();
  }
}
