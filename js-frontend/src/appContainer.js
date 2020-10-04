class appContainer {
  static courses = [];
  comments = [];

  BACKEND_URL = "http://localhost:3000";

  bindEventListeners() {
    const btn = document.getElementById("courseRecommend");
    btn.addEventListener("click", this.getRandomCourse);
  }

  getRandomCourse() {
    // debugger;
    return appContainer.courses[
      Math.floor(Math.random() * appContainer.courses.length)
    ];
    // try .sample()
  }

  getCourses() {
    fetch(this.BACKEND_URL + "/courses")
      .then((resp) => resp.json())
      .then((data) => {
        data.forEach((course) => {
          new Course(course.name, course.city, course.state, course.comment);
        });
        this.renderCourses();
      })
      // fetch courses
      // render
      .catch((error) => alert(error));
  }

  renderCourses() {
    const ul = document.createElement("UL");
    // const coursesDiv = document.getElementById("coursesDiv");
    appContainer.courses.forEach((course) => {
      const li = document.createElement("LI");
      li.innerText = course.name;
      ul.appendChild(li);
    });
    document.getElementById("coursesDiv").appendChild(ul);
  }
}

// const option = documnt.createElement("option")
// create options to filter by state?
// js switch statement
