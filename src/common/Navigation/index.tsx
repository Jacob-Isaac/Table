import {
  NavigationBackground,
  NavigationLink,
  NavigationList,
  NavigationLogo,
  NavigationLogoLink,
  NavigationSearcher,
} from "./styled";

const NavigationBar: React.FC = () => {
  return (
    <NavigationBackground>
      <NavigationList>
        <NavigationLogoLink to="/">
          <NavigationLogo>Book Browser</NavigationLogo>
        </NavigationLogoLink>
        <NavigationLink to="/books">Books</NavigationLink>
        <NavigationLink to="/authors">Authors</NavigationLink>
        <NavigationSearcher></NavigationSearcher>
      </NavigationList>
    </NavigationBackground>
  );
};

export default NavigationBar;
