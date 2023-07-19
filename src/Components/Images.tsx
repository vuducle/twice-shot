type ImageTwiceProps = {
  url: any;
  desc?: any;
  alt: any;
};

const Image = ({ url, desc }: ImageTwiceProps) => {
  return (
    <li>
      <img src={url} alt={desc} />
    </li>
  );
};

export default Image;
