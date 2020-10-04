const BACKEND_URL = "http://localhost:3000";

const app = new appContainer();
app.getCourses();
// instantiates our app

//
// fetch(`${BACKEND_URL}/courses`)
//   .then((resp) => resp.json())
//   .then((resp) => console.log(resp));
