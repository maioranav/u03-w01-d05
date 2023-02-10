import { Component } from "react";
import { Col } from "react-bootstrap";

export class SingleGalleryMovie extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Col className="mb-2 px-1">
          <img className="img-fluid" src={this.props.Poster} alt={this.props.Title} />
        </Col>
      </>
    );
  }
}
