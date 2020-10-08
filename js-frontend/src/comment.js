class Comment {
  constructor(content, course) {
    (this.content = content), (this.course = course);
  }

  getComment() {
    fetch("http://localhost:3000/comments")
      .then((resp) => resp.json())
      .then((data) => {
        data.forEach((course) => {
          const c = new Course(
            course.name,
            course.city,
            course.state,
            course.id
            // course.comment,
          );
          this.courses.push(c);
        });
        this.renderCourses();
      })
      // fetch courses
      // render
      .catch((error) => console.error(error));
  }
}
