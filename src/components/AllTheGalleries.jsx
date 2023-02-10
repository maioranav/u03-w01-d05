import { Component } from "react";
import { CustomGallery } from "./CustomGallery";

export class AllTheGalleries extends Component {
  state = {
    queries: ["Harry Potter", "Breaking Bad", "Friends"],
  };

  render() {
    return (
      <>
        {this.state.queries.map((el, i) => (
          <CustomGallery title={el} key={`search-${i}`} />
        ))}
      </>
    );
  }
}
