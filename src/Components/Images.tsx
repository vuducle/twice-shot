import React from "react";

type ImageTwiceProps = {
  url: any;
  desc?: any;
  alt: any;
};

const Image: React.FunctionComponent<ImageTwiceProps> = (props) => {
  const { url, desc } = props;
  return (
    <li>
      <img src={url} alt={desc} />
    </li>
  );
};

export default Image;
