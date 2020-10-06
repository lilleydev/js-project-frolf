class Course {
  constructor(name, city, state) {
    (this.name = name),
      (this.city = city),
      (this.state = state),
      appContainer.courses.push(this);
    // debugger;
  }

  // bindEventListeners() {
  //   const courseForm = document.getElementById("newCourseForm");
  //   courseForm.addEventListener("submit", this.addNewCourse);
  // }

  // addNewCourse(){

  // }
  // display() {
  //   appContainer.courses.push(course);
  //   appContainer.renderCourses();
  // }
  // renderCourses() {
  //   const ul = document.createElement("UL");
  //   // const coursesDiv = document.getElementById("coursesDiv");
  //   appContainer.courses.forEach((course) => {
  //     const li = document.createElement("LI");
  //     li.innerText = course.name;
  //     ul.appendChild(li);
  //   });
  //   document.getElementById("coursesDiv").appendChild(ul);
  // }
}
