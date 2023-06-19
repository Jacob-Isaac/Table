import Table from './features/tableComponent/TablePage/Table/index';
import { HashRouter, Route, Routes, Navigate, useLocation} from "react-router-dom";
import NavigationBar from "./common/Navigation";
import NavigationSide from './common/NavigationSide';
import AuthorDetails from "./features/authorDetails/test";
import MoviesList from "./features/Movieslist/index";
import NoResult from "./common/NoResult";
import BreadCrumbBar from './common/Breadcrumb';
import Favorites from './features/favoritesList';



function App() {

  return (
    <HashRouter>
    <nav>
    <NavigationSide />
      <NavigationBar />
      <BreadCrumbBar/>
    
      <Routes>
        <Route
          path="*"
          element={
            <NoResult
              error404="<h1>404  </h1>"
              title={`Oops! This page doesn't exist! Please go back to Main Page :)`}
            />
          }
        />
        {/* <Route path="/" element={<Navigate to="home"/>} /> */}
        <Route path="/home" element={<Navigate to="books"/>} />
        <Route path="home/table" element={<Table/>} />
          <Route path={`home/table/:author`} element={<AuthorDetails/>} />
          <Route path="home/:books" element={<MoviesList/>} /> 
          <Route path="home/authors" element={<AuthorDetails/>} />  
          <Route path="home/favorite" element={<Favorites/>} /> 
      </Routes>
    </nav>
  </HashRouter>
  );
}

export default App;
