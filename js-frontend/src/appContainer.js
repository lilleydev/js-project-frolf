class AppContainer {
  constructor() {
    this.courses = [];
    this.comments = [];
  }
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
      AppContainer.courses[
        Math.floor(Math.random() * AppContainer.courses.length)
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
          const c = new Course(
            course.name,
            course.city,
            course.state,
            course.comment,
            course.id
          );
          this.courses.push(c);
        });
        this.renderCourses();
      })
      // fetch courses
      // render
      .catch((error) => console.error(error));
  }

  renderCourses() {
    const ul = document.createElement("UL");
    this.courses.forEach((course) => {
      course.display();
      // add renderNewCourse in here
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

  delete(e) {
    fetch(`http://localhost:3000/courses/${course.id}`, {
      method: "DELETE",
    }).then(() => {
      // debugger;
      this.courses;
      // delete courses[course.id]
    });
  }
}

// const option = documnt.createElement("option")
// create options to filter by state?
// js switch statement
