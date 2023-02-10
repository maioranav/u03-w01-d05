import { faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ViewSelector = () => (
  <div>
    <FontAwesomeIcon icon={faThLarge} className="icons" />
    <FontAwesomeIcon icon={faTh} className="icons" />
  </div>
);
