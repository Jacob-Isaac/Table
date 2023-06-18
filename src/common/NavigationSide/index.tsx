import {
  NavigationBackground,
  NavigationLink,
  NavigationList,
  NavigationSearcher,
} from "./styled";

const NavigationSide: React.FC = () => {
  return (
    <NavigationBackground>
      <NavigationList>
        <NavigationLink to="/books">Home</NavigationLink>
        <NavigationLink to="/">Table</NavigationLink>
        <NavigationLink to="/">Favorite</NavigationLink>
        <NavigationSearcher></NavigationSearcher>
      </NavigationList>
    </NavigationBackground>
  );
}

export default NavigationSide;