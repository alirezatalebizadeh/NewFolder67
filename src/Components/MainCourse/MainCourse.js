import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import Data from "../../Datas/Datas";

export default function MainCourse() {
  const [course, setCourse] = useState(Data);

  let paramsSearch = useParams();

  let mainCourse = course.find((item) => {
    if (item.id == paramsSearch.courseID) {
      return item;
    }
  });

  console.log(mainCourse);
  return (
    <Row className="mt-5">
      <Col xs={12} md={6}>
        <Image fluid src={mainCourse.img} rounded />
      </Col>
      <Col md={6}>
        <h1>{mainCourse.title}</h1>
      </Col>
    </Row>
  );
}
