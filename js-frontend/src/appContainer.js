class appContainer {
  courses = [];
  comments = [];

  BACKEND_URL = "http://localhost:3000";

  getCourses() {
    fetch(this.BACKEND_URL + "/courses")
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      // fetch courses
      // render
      .catch((error) => alert(error));
  }
}
