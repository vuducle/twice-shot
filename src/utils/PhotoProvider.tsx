import React, { createContext, useState } from "react";
import { apiKey } from "./api/Config";

type SanaFromTwice = any;

export const PhotoContext = createContext<SanaFromTwice>(null);

function PhotoProvider(props: any) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  async function runSearch(query: string) {
    await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((res) => {
        setImages(res.data.photos.photo);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <PhotoContext.Provider
      value={{ images, loading, runSearch }}
    ></PhotoContext.Provider>
  );
}

export default PhotoProvider;
