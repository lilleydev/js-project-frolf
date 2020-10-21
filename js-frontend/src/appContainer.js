class AppContainer {
  constructor() {
    this.courses = [];
    this.comments = [];
    this.selected = "";
  }
  // get the value from the dropdown to then re-render the app
  BACKEND_URL = "http://localhost:3000";

  bindEventListeners() {
    // debugger;
    const btn = document.getElementById("courseRecommend");
    btn.addEventListener("click", this.toggleRecommend);

    const courseForm = document.getElementById("newCourseForm");
    courseForm.addEventListener("submit", this.addNewCourse);

    const ratingDropdown = document.getElementById("ratingBtn");
    ratingDropdown.addEventListener("change", this.ratingsMenu);
  }

  courseCounter() {
    const counter = document.getElementById("courseCount");
    console.log("counting");
    counter.innerText = `Currently: ${this.courses.length}`;
  }

  toggleRecommend() {
    const x = document.getElementById("recommendDiv");
    const btn = document.getElementById("courseRecommend");
    const randCourse =
      app.courses[Math.floor(Math.random() * app.courses.length)];
    const name = randCourse.name;
    const city = randCourse.city;
    if (x.style.display === "none") {
      x.innerHTML = `Try out ${name} at ${city}!`;
      x.style.display = "block";
      btn.innerText = "nicccceee!";
    } else {
      x.style.display = "none";
      btn.innerText = "Recommend something!";
    }
  }

  getCourses() {
    fetch("http://localhost:3000/courses")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        data.forEach((course) => {
          const c = new Course(course);
          this.courses.push(c);
        });
        // debugger;
        this.renderCourses();
        this.courseCounter();
      })

      .catch((error) => console.error(error));
  }

  removeCourse = (c) => {
    this.courses = this.courses.filter((course) => {
      return course != c;
    });
    this.renderCourses();
  };

  renderCourses() {
    coursesDiv.innerHTML = "";
    this.courseCounter();

    // const courses = this.selected == "" ? this.courses : this.courses.filter((c) => /* return true or false depending on if the course should show up*/)
    // compare input with the c being filtered
    // do: courses.forEach (don't need the this)
    this.courses.forEach((course) => {
      course.display();
    });
  }

  addNewCourse = (e) => {
    e.preventDefault();
    const form = document.getElementById("newCourseForm");
    const course = new Course({
      name: courseName.value,
      city: courseCity.value,
      state: courseState.value,
      rating: courseRating.value,
      // avatar: courseImage.value,
      // comments: courseComment.value,
    });
    // debugger;
    this.createCourse(course);
  };

  createCourse(course) {
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
          rating: course.rating,
          // avatar: course.avatar,
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
          this.courses.push(course);
          this.renderCourses();
          // this.renderNewCourse(data);
          document.getElementById("newCourseForm").reset();
        }
      });
  }

  ratingsMenu() {
    document.getElementById("ratingDropdown").classList.toggle("show");
    //
  }
}
