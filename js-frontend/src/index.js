console.log("Hello");
const BACKEND_URL = "http://localhost:3000";

fetch(`${BACKEND_URL}/courses`)
  .then((resp) => resp.json())
  .then((resp) => console.log(resp));
