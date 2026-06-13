import { memo, useCallback } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronRightRegular,
  LayoutColumnOneThirdLeftRegular,
  LayoutColumnOneThirdLeftFilled,
  LayoutColumnOneThirdRightRegular,
  LayoutColumnOneThirdRightFilled,
  LinkSquareRegular,
  LinkSquareFilled,
} from "@fluentui/react-icons";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const handleSparkleClick = useCallback(() => {}, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <button className={styles.headerBtn}>
          <LayoutColumnOneThirdLeftRegular className={styles.iconRegular} />
          <LayoutColumnOneThirdLeftFilled className={styles.iconActive} />
        </button>
        <div className={styles.headerSeparator} />
        <div className={styles.breadcrumbsContainer}>
          <NavLink to="/initatives" className={styles.breadcrumb}>
            Initiatives
          </NavLink>
          <ChevronRightRegular className={styles.breadcrumbChevron} />
          <span className={styles.breadcrumbMain}>Initiative Name</span>
        </div>
      </div>

      <div className={styles.headerRight}>
        <button className={styles.headerBtn}>
          <LinkSquareRegular className={styles.iconRegular} />
          <LinkSquareFilled className={styles.iconActive} />
        </button>
        <div className={styles.headerSeparator} />
        <button className={styles.headerBtn}>
          <LayoutColumnOneThirdRightRegular className={styles.iconRegular} />
          <LayoutColumnOneThirdRightFilled className={styles.iconActive} />
        </button>
      </div>
    </header>
  );
};

export default memo(Header);
