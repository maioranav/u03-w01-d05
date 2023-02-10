import { Component } from "react";
import { Button, Col, Modal } from "react-bootstrap";
import { FilmModalBody } from "./FilmModalBody";

export class SingleGalleryMovie extends Component {
  state = {
    show: false,
  };

  handleModal = (toShow) => {
    this.setState({ show: toShow });
  };

  render() {
    return (
      <>
        <Col className="mb-2 px-1">
          <img className="img-fluid" src={this.props.Poster} alt={this.props.Title} onClick={() => this.handleModal(true)} />
        </Col>

        <Modal show={this.state.show} onHide={() => this.handleModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.Title} <span className="filmtype">{this.props.Type}</span>
            </Modal.Title>
          </Modal.Header>
          {this.state.show && <FilmModalBody filmid={this.props.imdbID} />}
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModal(false)}>
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
