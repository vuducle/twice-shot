import { useParams } from "react-router-dom";
import Container from "./Container";
function Item({ searchTerm }: any) {
  const location = useParams();
  console.log(location);
  return (
    <div>
      <h2>{location.searchInput} Pictures</h2>
      <Container searchTerm={location.searchInput} />
    </div>
  );
}

export default Item;
