import Container from "./Container";
import { useLocation, useParams } from "react-router-dom";
const Search = ({ searchTerm }: any) => {
  const location = useParams();
  console.log(location);

  return (
    <div>
      <h2>{location.searchInput} Images</h2>
      <Container searchTerm={location.searchInput} />
    </div>
  );
};

export default Search;
