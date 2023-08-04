import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Course(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="images/chatgpt.jpg" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          دوره ی کاربردی چت جی پی تی برای یادگیری بهترین روش استفاده از ان ...
        </Card.Text>
        <Link to={`/course/${props.id}`}>
          <Button variant="primary">مشاهده بیشتر</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
