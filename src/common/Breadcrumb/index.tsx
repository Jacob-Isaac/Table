import {
  NavigationBackground,
  NavigationLink,
  NavigationList,
  Wrapper,
  Span,
  ModifiedBreadcrumbs,
} from "./styled";
import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useLocation } from "react-router-dom";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

// const BreadCrumbBar: React.FC = (props) => {
//   const location = useLocation();
//   console.log(location);
//   let currentLink = "";
//   const crumbs = location.pathname
//     .split("/")
//     .filter((crumb) => crumb !== "")
//     .map((crumb) => {
//       currentLink += `/${crumb}`;

//       return (
//         <div className="crumb" key={crumb}>
//             <Link to={currentLink}>{crumb}</Link>
//         </div>
//       );
//     });

//   console.log(props);
//   return (
//     <NavigationBackground>
//       <Wrapper>
//     {crumbs}
//     </Wrapper>
//     </NavigationBackground>
const BreadCrumbBar: React.FC = (props) => {
  const location = useLocation();
  console.log(location);
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      const decodedCrumb = decodeURIComponent(crumb.replace(/%20/g, " "));
      const crumbText = decodedCrumb.charAt(0).toUpperCase() + decodedCrumb.slice(1);
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumbText}</Link>
        </div>
      );
    });

  console.log(props);
  return (
    <NavigationBackground>
      <Wrapper>
        {crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            {crumb}
            {index < crumbs.length - 1 && <Span>/</Span>}
          </React.Fragment>
        ))}
      </Wrapper>
    </NavigationBackground>

    //     <NavigationBackground>
    //     <Wrapper>
    //     <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
    //    <Breadcrumbs separator="/" style={{ color: 'red', fontSize: '1.5rem' }} aria-label="breadcrumb">
    //   <StyledBreadcrumb
    //     component="a"
    //     href="#"
    //     label="Home"
    //     icon={<HomeIcon fontSize="small" />}
    //   />
    //   <StyledBreadcrumb component="a" href="#" label="Catalog" />
    //   <StyledBreadcrumb
    //   component="a" href="#" label="Catalog"

    //   />
    // </Breadcrumbs>
    // </Breadcrumbs>

    // </Wrapper>

    //       {/* <NavigationList>
    //         <NavigationLink to="/books">Home {">"}</NavigationLink>
    //         <NavigationLink to="/authors">Authors {">"}</NavigationLink>
    //         <NavigationLink to="/books">Book {">"} </NavigationLink>
    //       </NavigationList> */}
    //         {/* <div style={{ marginLeft: '125px' , marginTop: '5px' }}> */}
    //        </NavigationBackground>
  );
};

export default BreadCrumbBar;
// deleteIcon={<ExpandMoreIcon />}
// onDelete={handleClick}
