import { NavigationBackground, Wrapper, Span } from "./styled";
import * as React from "react";
import useBreadcrumb from "./useBreadcrumb";

const BreadCrumbBar: React.FC = () => {
  const crumbs = useBreadcrumb();

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
  );
};

export default BreadCrumbBar;
