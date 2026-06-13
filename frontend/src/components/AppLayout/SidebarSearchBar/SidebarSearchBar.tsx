import { memo, useCallback, useState } from "react";
import classNames from "classnames";
import {
  SearchRegular,
  SparkleRegular,
  SparkleFilled,
} from "@fluentui/react-icons";
import { useSidebar } from "@contexts";
import styles from "./SidebarSearchBar.module.css";

const SidebarSearchBar: React.FC = () => {
  const { collapsed } = useSidebar();
  const [isSparkleActive, setIsSparkleActive] = useState(false);

  const handleSparkleClick = useCallback(() => {
    setIsSparkleActive((prev) => !prev);
  }, []);
  const handleSearchClick = useCallback(() => {}, []);

  if (collapsed) {
    return (
      <button
        className={styles.searchBtn}
        onClick={handleSearchClick}
        aria-label="Search workspace"
      >
        <SearchRegular className={styles.searchBtnIcon} />
      </button>
    );
  }

  return (
    <div className={styles.searchBar}>
      <SearchRegular className={styles.searchBarIcon} />
      <input
        type="search"
        className={styles.searchBarInput}
        placeholder="Find in workspace..."
      />
      <button
        className={classNames(styles.sparkleBtn, {
          [styles.btnActive]: isSparkleActive,
        })}
        onClick={handleSparkleClick}
      >
        <SparkleRegular className={styles.iconRegular} />
        <SparkleFilled className={styles.iconActive} />
      </button>
    </div>
  );
};

export default memo(SidebarSearchBar);
