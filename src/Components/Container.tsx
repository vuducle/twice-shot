import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../utils/PhotoProvider";
import Loader from "./Loader";

function Container({ searchTerm }: any) {
  const { images, loading, runSearch } = useContext(PhotoContext);

  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <div className="photo-container">{loading ? <Loader /> : images}</div>
    </>
  );
}

export default Container;
