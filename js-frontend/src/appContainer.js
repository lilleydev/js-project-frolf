class AppContainer {
  constructor() {
    this.courses = [];
    this.comments = [];
  }
  BACKEND_URL = "http://localhost:3000";

  bindEventListeners() {
    // debugger;
    const btn = document.getElementById("courseRecommend");
    btn.addEventListener("click", this.toggleRecommend);

    const courseForm = document.getElementById("newCourseForm");
    courseForm.addEventListener("submit", this.addNewCourse);

    // debugger;
  }
  // const deleteBtn = document.getElementById("deleteButton");
  // deleteBtn.addEventListener("click", this.delete);
  toggleRecommend() {
    const x = document.getElementById("recommendDiv");
    const randCourse =
      app.courses[Math.floor(Math.random() * app.courses.length)];
    const name = randCourse.name;
    const city = randCourse.city;
    if (x.style.display === "none") {
      // add state to display
      x.innerHTML = `Try out ${name} at ${city}!`;
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  getCourses() {
    fetch(this.BACKEND_URL + "/courses")
      .then((resp) => resp.json())
      .then((data) => {
        data.forEach((course) => {
          const c = new Course(course);
          // debugger;
          this.courses.push(c);
        });
        this.renderCourses();
      })
      // fetch courses
      // render
      .catch((error) => console.error(error));
  }

  renderCourses() {
    // debugger;
    this.courses.forEach((course) => {
      course.display();
    });
  }

  addNewCourse = (e) => {
    // debugger;
    e.preventDefault();
    const form = document.getElementById("newCourseForm");
    const course = new Course({
      name: courseName.value,
      city: courseCity.value,
      state: courseState.value,
      // comments: courseComment.value,
    });
    // debugger;
    this.createCourse(course);
  };

  createCourse(course) {
    // move to course class;
    // debugger;
    fetch("http://localhost:3000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course: {
          name: course.name,
          city: course.city,
          state: course.state,
        },
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          console.log(info.errors);
        } else {
          course.id = data.id;

          // debugger;
          course.save();
          // this.renderNewCourse(data);
          document.getElementById("newCourseForm").reset();
        }
      });
  }
}

// const option = documnt.createElement("option")
// create options to filter by state?
// js switch statement
