import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../utils/PhotoProvider";
import Loader from "./Loader";
import Gallery from "./Gallery";

function Container({ searchTerm }: any) {
  const { images, loading, runSearch } = useContext(PhotoContext);

  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <div className="photo-container">
        {loading ? <Loader /> : <Gallery data={images} />}
      </div>
    </>
  );
}

export default Container;
