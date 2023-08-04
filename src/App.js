import { Route, Routes } from "react-router-dom";
import NavbarHeader from "./Components/Navbar/NavbarHeader";
// ! import this css to style components of react-bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses";
import About from "./Components/About/About";
import MainCourse from "./Components/MainCourse/MainCourse";

function App() {
  // ? import route and routes from react-router-dom...
  //? then user this to route
  return (
    <Container>
      <NavbarHeader />

      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<Header />} />
        <Route path="/course/:courseID" element={<MainCourse />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  );
}

export default App;
