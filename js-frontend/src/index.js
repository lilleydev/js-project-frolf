const BACKEND_URL = "http://localhost:3000";

const app = new AppContainer();
const coursesDiv = document.getElementById("coursesDiv");
app.getCourses();
app.bindEventListeners();
// instantiates our app

//
// fetch(`${BACKEND_URL}/courses`)
//   .then((resp) => resp.json())
//   .then((resp) => console.log(resp));
