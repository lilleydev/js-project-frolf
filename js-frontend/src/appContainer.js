class appContainer {
  courses = [];
  comments = [];

  BACKEND_URL = "http://localhost:3000";

  bindEventListeners() {
    const btn = document.getElementById("courseRecommend");
    btn.addEventListener("click", this.getRandomCourse);
  }

  getRandomCourse() {
    // debugger;
    console.log("getting courses");
  }

  getCourses() {
    fetch(this.BACKEND_URL + "/courses")
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      // fetch courses
      // render
      .catch((error) => alert(error));
  }
}
