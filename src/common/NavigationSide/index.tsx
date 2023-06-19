import {
  NavigationBackground,
  NavigationLink,
  NavigationList,
  NavigationSearcher,
} from "./styled";

const NavigationSide: React.FC = () => {
  return (
    <div style={{ zIndex: '-100', }}> 
    <NavigationBackground>
       <div style={{ marginTop: '150px', marginLeft: '8px', zIndex: '-10', }}> 
      <NavigationList>
        <NavigationLink to="/home/books">Home</NavigationLink>
        <NavigationLink to="/home/table">Table</NavigationLink>
        <NavigationLink to="/home/favorite">Favorite</NavigationLink>
      </NavigationList>
      </div> 
    </NavigationBackground>
    </div>
  );
}

export default NavigationSide;
