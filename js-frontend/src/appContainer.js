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
    // debugger;
    // const randLi = rand.innerText;
    // document.getElementById("recommendDiv").appendChild(randLi);

    // this.renderRandomCourse(rand);
    // try .sample()
  }

  // renderRandomCourse() {
  //   const recommendDiv = document.getElementById("recommendDiv");
  //   // recommendDiv.innerText =
  // }

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

  persist() {
    fetch("http://localhost:3000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courses: {
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
