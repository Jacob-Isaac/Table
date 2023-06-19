import Table from "./features/tableComponent/TablePage/Table/index";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import NavigationBar from "./common/Navigate/Navigation";
import NavigationSide from "./common/Navigate/NavigationSide";
import AuthorDetails from "./features/authorDetails";
import BooksList from "./features/Bookslist/index";
import NoResult from "./common/NoResult";
import BreadCrumbBar from "./common/Navigate/Breadcrumb";
import Favorites from "./features/favoritesList";

function App() {
  return (
    <HashRouter>
      <nav>
        <NavigationSide />
        <NavigationBar />
        <BreadCrumbBar />

        <Routes>
          <Route
            path="*"
            element={
              <NoResult
                error404="404  "
                title={`Oops! This page doesn't exist! Please go back to Main Page :)`}
              />
            }
          />
          <Route path="/home" element={<Navigate to="books" />} />
          <Route path="home/table" element={<Table />} />
          <Route path={`home/table/:author`} element={<AuthorDetails />} />
          <Route path="home/:books" element={<BooksList />} />
          <Route path="home/authors" element={<AuthorDetails />} />
          <Route path="home/favorite" element={<Favorites />} />
        </Routes>
      </nav>
    </HashRouter>
  );
}

export default App;
