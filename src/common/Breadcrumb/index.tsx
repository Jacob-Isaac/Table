import { NavigationBackground, NavigationLink, NavigationList } from "./styled";

const BreadCrumbBar: React.FC = () => {
  return (
    <NavigationBackground>
      <NavigationList>
        <NavigationLink to="/books">Home {">"}</NavigationLink>
        <NavigationLink to="/authors">Authors {">"}</NavigationLink>
        <NavigationLink to="/books">Book {">"} </NavigationLink>
      </NavigationList>
    </NavigationBackground>
  );
};

export default BreadCrumbBar;