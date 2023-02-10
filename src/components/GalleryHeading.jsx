import { GenreSelect } from "./GenreSelect";
import { ViewSelector } from "./ViewSelector";

export const GalleryHeading = () => (
  <div className="d-flex justify-content-between">
    <div className="d-flex">
      <h2 className="mb-4">TV Shows</h2>
      <GenreSelect />
    </div>
    <ViewSelector />
  </div>
);
