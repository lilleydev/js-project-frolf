class Comment {
  constructor(content, course) {
    (this.content = content), (this.course = course);
  }

  getComment() {
    debugger;
    fetch("http://localhost:3000/comments")
      .then((resp) => resp.json())
      .then((data) => {
        data.forEach((comment) => {
          const c = new Comment(this.content, this.course_id);
          this.courses.push(c);
        });
        debugger;
      })
      // fetch courses
      // render
      .catch((error) => console.error(error));
  }
}
