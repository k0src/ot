import { memo } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRightRegular } from "@fluentui/react-icons";
import styles from "./HeaderBreadcrumbs.module.css";

const HeaderBreadcrumbs: React.FC = () => {
  return (
    <div className={styles.breadcrumbsContainer}>
      <NavLink to="/initatives" className={styles.breadcrumb}>
        Initiatives
      </NavLink>
      <ChevronRightRegular className={styles.breadcrumbChevron} />
      <span className={styles.breadcrumbMain}>Initiative Name</span>
    </div>
  );
};

export default memo(HeaderBreadcrumbs);
