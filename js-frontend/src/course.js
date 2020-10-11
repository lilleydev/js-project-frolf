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

    commentForm.addEventListener("submit", this.addComment);

    deleteBtn.addEventListener("click", (e) => {
      fetch(`http://localhost:3000/courses/${this.id}`, {
        method: "Delete",
      }).then(courseDiv.remove());
    });
  }

  addComment = (e) => {
    e.preventDefault();
    
    const form = document.getElementById("commentForm");
   
    // const comment = new Comment({
    //   content: e.target.commentInput.value,
    //   course_id: this.id,
    // })
    const comment = {
      content: e.target.commentInput.value,
      course_id: this.id
    }

    fetch(`http://localhost:3000/courses/${this.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        if (data.errors) {
          console.log(info.errors);
        } else {
          document.querySelector("input[id=commentInput]").value = "";
          // this.display()
          this.getComment();
        }
      });
  }


//   getComment() {
//     debugger;
//     fetch("http://localhost:3000/comments")
//       .then((resp) => resp.json())
//       .then((data) => {
// debugger;        data.forEach((comm) => {
//           const c = new Comment();

//           app.comments.push(c);
//         });
//         debugger;
//         const length = this.comments.length;
//         if (length < 1) {
//           alert("There are no comments for this course");
//         } else {
//           debugger;
//           this.renderComment();
//         }
//       })
//       .catch((error) => console.error(error));
//   }

  getComment() {
    fetch(`http://localhost:3000/courses/${this.id}/comments`)
    .then((resp) => resp.json())
    .then(info => this.renderComment(info))
  }

  renderComment(info) {
    // debugger;
    //array of objects is returned
    info.forEach((comment) => {
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
