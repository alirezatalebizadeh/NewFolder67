import Header from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses";
import About from "./Components/About/About";
import MainCourse from "./Components/MainCourse/MainCourse";
//!create a file with name "routes.js" and create a object to set routes


let routs = [
  { path: "/home", element: <Header /> },
  { path: "/courses", element: <Courses /> },
  { path: "*", element: <Header /> },
  { path: "/course/:courseID", element: <MainCourse /> },
  {
    path: "/about",
    element: <About />,
    children: [
      { path: "setting", element: <h1>setting</h1> },
      { path: "dashboard", element: <h1>dashboard</h1> },
    ],
  },
];

export default routs;
