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

  }
  
  toggleRecommend() {
    const x = document.getElementById("recommendDiv");
    const randCourse =
      app.courses[Math.floor(Math.random() * app.courses.length)];
    const name = randCourse.name;
    const city = randCourse.city;
    if (x.style.display === "none") {
      x.innerHTML = `Try out ${name} at ${city}!`;
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  getCourses() {
    fetch("http://localhost:3000/courses")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        data.forEach((course) => {
          const c = new Course(course);
          this.courses.push(c);
        });
        // debugger;
        this.renderCourses();
      })
      
      .catch((error) => console.error(error));
  }

  renderCourses() {
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
      avatar: courseImage.value,
      // comments: courseComment.value,
    });
    // debugger;
    this.createCourse(course);
  };

  createCourse(course) {
    // move to course class;
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
          avatar: course.courseImage,
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


