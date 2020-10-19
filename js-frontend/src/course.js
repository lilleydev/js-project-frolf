class Course {
  constructor({ name, city, state, id, comments, avatar, rating }) {
    (this.name = name),
      (this.city = city),
      (this.state = state),
      (this.comments = comments);
    this.id = id;
    this.avatar = avatar
    this.rating = rating
  }

  display() {
    const coursesDiv = document.getElementById("coursesDiv");
    const courseDiv = document.createElement("DIV");
    const commentDiv = document.createElement("DIV")
    const commentForm = document.createElement("FORM");

    const h4 = document.createElement("h4");
    const cityP = document.createElement("P");
    const stateP = document.createElement("P");
    const courseRating = document.createElement("P");
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
    commentInput.id = `${this.id}commentInput`;
    commentDiv.id = `${this.id}commentDiv`;
    commentDiv.style="display: none";

    h4.innerText = this.name;
    cityP.innerText = `Location: ${this.city}, ${this.state}`;
    courseRating.innerText = `Difficulty rating: ${this.rating} / 100`;

    deleteBtn.innerText = "delete";
    commentButton.innerText = "See Comments";
    createCommentButton.innerText = "Add Comment";

    coursesDiv.appendChild(courseDiv);

    courseDiv.appendChild(h4);
    courseDiv.appendChild(cityP);
    courseDiv.appendChild(stateP);
    courseDiv.appendChild(courseRating);
    courseDiv.appendChild(deleteBtn);
    courseDiv.appendChild(commentButton);
    courseDiv.appendChild(commentForm);
    
    courseDiv.appendChild(commentDiv)
    commentDiv.appendChild(commentUl);

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
    
    const form = document.getElementById(`${this.id}commentInput`);
   
    
    const comment = {
      content: e.target[`${this.id}commentInput`].value,
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
          document.getElementById(`${this.id}commentInput`).value = ""
        
        }
      });
  }

  getComment() {
    fetch(`http://localhost:3000/courses/${this.id}/comments`)
    .then((resp) => resp.json())
    .then(info => this.renderComment(info))
  }

  renderComment(info) {
    const commentDiv = document.getElementById(`${this.id}commentDiv`);
    // debugger;
    const commentUl = document.getElementById(`${this.id}commentUl`);
    if (commentDiv.style.display === "none") {
      commentDiv.appendChild(commentUl)
      // debugger;
      commentDiv.style.display = "block";
    
    info.forEach((comment) => {
      const commentLi = document.createElement("LI");
      commentLi.id = "commentList"
      commentLi.innerText = comment.content;
      commentUl.appendChild(commentLi);
    });

  } else {
    commentDiv.style.display = "none";

    commentUl.innerText = "";
    
  }

  }

  save() {
    app.courses.push(this);
    this.display();
  }
}
