import { AddComment } from "./AddComment";
import { CommentsList } from "./CommentsList";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export const CommentArea = (props) => {
  const [needUpdate, setneedUpdate] = useState(false);

  return (
    <>
      {props.filmid !== null && (
        <Row className="d-flex justify-content-between mt-5">
          <Col xs={10} md={5}>
            <h3>Comments Section:</h3>
            <AddComment
              asin={props.filmid}
              update={() => {
                setneedUpdate(true);
              }}
            />
          </Col>
          <Col xs={10} md={5}>
            <CommentsList
              asin={props.filmid}
              needUpdate={needUpdate}
              update={() => {
                setneedUpdate(true);
              }}
              updated={() => {
                setneedUpdate(false);
              }}
            />
          </Col>
        </Row>
      )}
    </>
  );
};
