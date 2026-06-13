import { memo, useCallback, useState } from "react";
import { ShellBtn, HeaderBreadcrumbs } from "@components";
import {
  LayoutColumnOneThirdLeftRegular,
  LayoutColumnOneThirdLeftFilled,
  LayoutColumnOneThirdRightRegular,
  LayoutColumnOneThirdRightFilled,
  LinkSquareRegular,
  LinkSquareFilled,
} from "@fluentui/react-icons";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [navPanelOpen, setNavPanelOpen] = useState(true);
  const [detailsPanelOpen, setDetailsPanelOpen] = useState(false);

  const toggleNavPanel = useCallback(
    () => setNavPanelOpen((prev) => !prev),
    [],
  );
  const toggleDetailsPanel = useCallback(
    () => setDetailsPanelOpen((prev) => !prev),
    [],
  );
  const handleCopyLink = useCallback(() => {}, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <ShellBtn
          ariaLabel="Toggle navigation panel"
          IconRegular={LayoutColumnOneThirdLeftRegular}
          IconActive={LayoutColumnOneThirdLeftFilled}
          onClick={toggleNavPanel}
          active={navPanelOpen}
        />
        <div className={styles.headerSeparator} />
        <HeaderBreadcrumbs />
      </div>

      <div className={styles.headerRight}>
        <ShellBtn
          ariaLabel="Copy link"
          IconRegular={LinkSquareRegular}
          IconActive={LinkSquareFilled}
          onClick={handleCopyLink}
        />
        <div className={styles.headerSeparator} />
        <ShellBtn
          ariaLabel="Toggle details panel"
          IconRegular={LayoutColumnOneThirdRightRegular}
          IconActive={LayoutColumnOneThirdRightFilled}
          onClick={toggleDetailsPanel}
          active={detailsPanelOpen}
        />
      </div>
    </header>
  );
};

export default memo(Header);
