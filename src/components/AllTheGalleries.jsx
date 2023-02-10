import { Component } from "react";
import { CustomGallery } from "./CustomGallery";

export class AllTheGalleries extends Component {
  state = {
    genres: ["Trending Now", "Watch it Again", "New Releases"],
  };
  render() {
    return (
      <>
        <CustomGallery title={this.state.genres[0]} />
        <CustomGallery title={this.state.genres[1]} />
        <CustomGallery title={this.state.genres[2]} />
      </>
    );
  }
}
