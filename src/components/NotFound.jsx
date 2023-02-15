import { Alert, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });

  return (
    <Row className="d-flex justify-content-center my-5">
      <Alert variant="danger">
        <Alert.Heading>Il film o la pagina che hai cercato non esiste!</Alert.Heading>
        <h6>Ti riporto alla homepage</h6>
      </Alert>
    </Row>
  );
};
