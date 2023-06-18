import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAuthorDetails, selectAuthorDetails } from "../tableComponent/slice";
import { DataRow } from "../../common/interfaces";

const AuthorDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { author } = useParams<{ author?: string }>(); 
  const currentAuthor = author;
  const authorDetails = useSelector(selectAuthorDetails); 

  useEffect(() => {
    if (currentAuthor) { 
      dispatch(fetchAuthorDetails(currentAuthor));
    }
  }, [currentAuthor, dispatch]);


  console.log(authorDetails);

  return (
    <>
      {authorDetails.map((item: DataRow) => (
        <div style={{ marginLeft: '125px' , marginTop: '5px' }} key={item.volumeInfo.title}>
          Book: <p>{item.volumeInfo.title}</p>
        </div>
      ))}
    </>
  );
};

export default AuthorDetails;