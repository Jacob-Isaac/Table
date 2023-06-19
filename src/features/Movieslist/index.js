import Content from "../../common/Content";
import TileMovie from "../../common/TileMovie";
import Loading from "../../common/Loading";
import ErrorPage from "../../common/Error";
import { TilesSection } from "../../common/TilesSection/styled";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { fetchRandomBooks } from "../tableComponent/slice";
import { selectBooks } from "../tableComponent/slice";

const MovieList = () => {

   const dispatch = useDispatch();
   const bookList = useSelector(selectBooks);

   useEffect(() => {
      dispatch(fetchRandomBooks());
   }, [dispatch]);

   let returned = <Loading />;

   switch (bookList.isLoading) {
      case "loading":
         returned = <Loading />;
         break;
      case "success":
         returned =
            (
               <Content
                  title="Random Books"
                  body={
                     <TilesSection>
                        {bookList.map((data) => (
                           <TileMovie
                           image={data.volumeInfo.imageLinks}
                           title={data.volumeInfo.title}
                           publishedDate={data.volumeInfo.publishedDate}
                           authors={data.volumeInfo.authors}
                           link={data.volumeInfo}
                           />
                        ))}
                     </TilesSection>
                  }
               />
            );
         break;
         case "error":
            returned =
               (
                  <ErrorPage />
               );
            break;
      default:
         // returned = <ErrorPage />;
         returned =
            (
               <Content
                  title="Random Books"
                  body={
                     <TilesSection>
                        {bookList.map((data) => (
                           <TileMovie
                           image={data.volumeInfo.imageLinks}
                           title={data.volumeInfo.title}
                           publishedDate={data.volumeInfo.publishedDate}
                           authors={data.volumeInfo.authors}
                           link={data.volumeInfo}
                           />
                        ))}
                     </TilesSection>
                  }
               />
            );
   }

   return returned;

};

export default MovieList;

