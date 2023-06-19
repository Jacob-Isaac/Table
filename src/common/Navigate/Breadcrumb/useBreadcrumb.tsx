import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const useBreadcrumb = (): JSX.Element[] => {
  const location = useLocation();
  const [crumbs, setCrumbs] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let currentLink = "";
    const pathSegments = location.pathname
      .split("/")
      .filter((crumb) => crumb !== "");

    const newCrumbs = pathSegments.map((crumb, index) => {
      const decodedCrumb = decodeURIComponent(crumb.replace(/%20/g, " "));
      const crumbText =
        decodedCrumb.charAt(0).toUpperCase() + decodedCrumb.slice(1);
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumbText}</Link>
        </div>
      );
    });

    setCrumbs(newCrumbs);
  }, [location.pathname]);

  return crumbs;
};

export default useBreadcrumb;
