const BACKEND_URL = "http://localhost:3000";

const app = new appContainer();
console.log(app);
fetch(`${BACKEND_URL}/courses`)
  .then((resp) => resp.json())
  .then((resp) => console.log(resp));
