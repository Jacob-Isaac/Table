import Table from './features/tableComponent/TablePage/Table/index';
import { HashRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./common/Navigation";
import BreadCrumbBar from './common/Breadcrumb';
import NavigationSide from './common/NavigationSide';
import AuthorDetails from "./features/authorDetails/test";
import NoResult from "./common/NoResult";



function App() {
 
  return (
    <HashRouter>
    <nav>
      <NavigationBar />
       <BreadCrumbBar/>
       <NavigationSide />
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
        <Route path="/" element={<Table/>} />
          <Route path="/personDetails/:author" element={<AuthorDetails/>} />
          <Route path="/books" element={<AuthorDetails/>} /> 
          <Route path="/authors" element={<AuthorDetails/>} />  
      </Routes>
    </nav>
  </HashRouter>
  );
}

export default App;
