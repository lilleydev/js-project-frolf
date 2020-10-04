const BACKEND_URL = "http://localhost:3000";

const app = new appContainer();
console.log(app.getCourses());
// fetch(`${BACKEND_URL}/courses`)
//   .then((resp) => resp.json())
//   .then((resp) => console.log(resp));
