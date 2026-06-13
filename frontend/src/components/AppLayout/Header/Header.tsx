import { memo, useCallback } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronRightRegular,
  SearchRegular,
  SparkleRegular,
  SparkleFilled,
} from "@fluentui/react-icons";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const handleSparkleClick = useCallback(() => {}, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.breadcrumbsContainer}>
        <NavLink to="/initatives" className={styles.breadcrumb}>
          Initiatives
        </NavLink>
        <ChevronRightRegular className={styles.breadcrumbChevron} />
        <span className={styles.breadcrumbMain}>Initiative Name</span>
      </div>

      <div className={styles.headerRight}>
        <div className={styles.searchBar}>
          <SearchRegular className={styles.searchBarIcon} />
          <input
            type="search"
            className={styles.searchBarInput}
            placeholder="Query Workspace..."
          />
        </div>
        <button
          className={styles.searchSparkleBtn}
          onClick={handleSparkleClick}
        >
          <SparkleRegular className={styles.iconRegular} />
          <SparkleFilled className={styles.iconActive} />
        </button>
      </div>
    </header>
  );
};

export default memo(Header);
