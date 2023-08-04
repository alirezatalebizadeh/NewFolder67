import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Data from "../../Datas/Datas";
import Course from "../Course/Course";
import { Link } from "react-router-dom";

export default function Courses() {
  const [course, setCourse] = useState(Data);

  return (
    <Row className="cards">
      {course.map((item) => (
        <Course {...item} key={item.id} />
      ))}
    </Row>
  );
}
