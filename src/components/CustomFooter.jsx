import { faInstagramSquare, faSquareFacebook, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";

export const CustomFooter = () => (
  <footer>
    <Row className="text-center mt-5">
      <Col xs={6} className="offset-3">
        <Row>
          <Col xs={12} className="text-left mb-2">
            <FontAwesomeIcon icon={faSquareFacebook} className="footer-icon" />
            <FontAwesomeIcon icon={faInstagramSquare} className="footer-icon" />
            <FontAwesomeIcon icon={faTwitterSquare} className="footer-icon" />
            <FontAwesomeIcon icon={faYoutubeSquare} className="footer-icon" />
          </Col>
        </Row>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href alt="footer link">
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a href alt="footer link">
                    Media Center
                  </a>
                </p>
                <p>
                  <a href alt="footer link">
                    Privacy
                  </a>
                </p>
                <p>
                  <a href alt="footer link">
                    Contact us
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href alt="footer link">
                    Audio Description
                  </a>
                </p>
                <p>
                  <a href alt="footer link">
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a href alt="footer link">
                    Legal Notices
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href alt="footer link">
                    Help Center
                  </a>
                </p>
                <p>
                  <a href alt="footer link">
                    Jobs
                  </a>
                </p>
                <p>
                  <a href alt="footer link">
                    Cookie Preferences
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href alt="footer link">
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a href alt="footer link">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a href alt="footer link">
                    Corporate Information
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </div>
        <Row>
          <Col xs={12} className="text-left mb-2">
            <button type="button" className="btn btn-sm footer-button rounded-0 mt-3">
              Service Code
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-left mb-2 mt-2 copyright">
            © 1997-{new Date().getFullYear()} Netflix, Inc.
          </Col>
        </Row>
      </Col>
    </Row>
  </footer>
);
