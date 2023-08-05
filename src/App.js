import { Route, Routes, useRoutes } from "react-router-dom";
import NavbarHeader from "./Components/Navbar/NavbarHeader";
// ! import this css to style components of react-bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Container } from "react-bootstrap";
import routs from "./routes";

function App() {
  // ? import route and routes from react-router-dom...
  //? then user this to route

  //! you can use useRoutes to route of site

let router = useRoutes(routs);
  return (
    <Container>
      <NavbarHeader />

      {router}
    </Container>
  );
}

export default App;
