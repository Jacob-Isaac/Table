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
        <NavigationLogoLink to="/home/books">
          <NavigationLogo>📘 Book Browser</NavigationLogo>
        </NavigationLogoLink>
        <NavigationLink to="/home/books">Home</NavigationLink>
        <NavigationLink to="/home/table">Table</NavigationLink>
        <NavigationSearcher></NavigationSearcher>
      </NavigationList>
    </NavigationBackground>
  );
};

export default NavigationBar;
