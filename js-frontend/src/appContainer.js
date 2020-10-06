class appContainer {
  static courses = [];
  comments = [];

  BACKEND_URL = "http://localhost:3000";

  bindEventListeners() {
    // debugger;
    const btn = document.getElementById("courseRecommend");
    btn.addEventListener("click", this.getRandomCourse);
    const courseForm = document.getElementById("newCourseForm");
    courseForm.addEventListener("submit", this.addNewCourse);
  }

  getRandomCourse() {
    // debugger;
    const randCourse =
      appContainer.courses[
        Math.floor(Math.random() * appContainer.courses.length)
      ];
    console.log(randCourse);
    // debugger;
    // const recommendDiv = document.getElementById("recommendDiv");
    const ul = document.createElement("UL");
    const li = document.createElement("LI");
    ul.innerText = randCourse.name;
    li.innerText = randCourse.city;
    // add state to display
    document.getElementById("recommendDiv").appendChild(ul);
    ul.appendChild(li);
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
    appContainer.courses.forEach((course) => {
      const li = document.createElement("LI");
      li.innerText = course.name;
      ul.appendChild(li);
    });
    document.getElementById("coursesDiv").appendChild(ul);
  }

  addNewCourse = (e) => {
    // debugger;
    e.preventDefault();
    const form = document.getElementById("newCourseForm");
    const course = new Course(
      courseName.value,
      courseCity.value,
      courseState.value
    );
    // debugger;
    this.createCourse(course);
  };

  createCourse() {
    debugger;
    // const newCourse = { body: course };
    fetch("http://localhost:3000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course: {
          name: this.name,
          city: this.city,
          state: this.state,
        },
      }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }
}

// const option = documnt.createElement("option")
// create options to filter by state?
// js switch statement
