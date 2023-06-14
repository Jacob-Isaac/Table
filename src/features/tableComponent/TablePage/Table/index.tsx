import { BookTable, Row, Content, StyledLink } from "./styled";
import { useSelector} from "react-redux";
import { selectBooks } from "../../slice";

const Table = () => {

  const bookList = useSelector(selectBooks);

  return (
    <BookTable>
      {bookList.map((book) => (
        <Row key={book.id} >
          <Content>
            <StyledLink>&nbsp;&nbsp;{book.description}</StyledLink>
          </Content>
        </Row>
      ))}
    </BookTable>
  );
};

export default Table;