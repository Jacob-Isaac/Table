import Content from "../../common/Content";
import { TilesSection } from "../../common/TilesSection/styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRandomBooks } from "../tableComponent/slice";
import { selectBooks } from "../tableComponent/slice";
import TileBook from "../../common/TileBook";
import { DataRow } from "../../common/interfaces";

const BookList = () => {
  const dispatch = useDispatch();
  const bookList = useSelector(selectBooks);

  useEffect(() => {
    dispatch(fetchRandomBooks());
  }, [dispatch]);

  return (
    <Content
      title="Random Books"
      body={
        <TilesSection>
          {bookList.map((data: DataRow) => (
            <TileBook
              image={data.volumeInfo.imageLinks}
              title={data.volumeInfo.title}
              publishedDate={data.volumeInfo.publishedDate}
              authors={data.volumeInfo.authors}
              link={data.volumeInfo}
              key={data.id}
              poster={false}
            />
          ))}
        </TilesSection>
      }
    />
  );
};

export default BookList;
