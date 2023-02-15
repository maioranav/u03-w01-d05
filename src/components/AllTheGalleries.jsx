import { Component, useState } from "react";
import { CustomGallery } from "./CustomGallery";
import { GalleryHeading } from "./GalleryHeading";

export const AllTheGalleries = (props) => {
  const [state, setState] = useState({
    queries: ["Harry Potter", "Breaking Bad", "Friends"],
    limit: 6,
  });

  return (
    <>
      <GalleryHeading />
      {state.queries.map((el, i) => (
        <CustomGallery title={el} key={`search-${i}`} limit={state.limit} />
      ))}
    </>
  );
};
