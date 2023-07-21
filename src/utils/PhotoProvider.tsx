import React, { createContext, useState } from "react";
import { apiKey } from "./api/Config";
import axios from "axios";
type SanaFromTwice = any;

export const PhotoContext = createContext<SanaFromTwice>(null);

const PhotoContextProvider = (props: any) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query: any) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setImages(response.data.photos.photo);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
