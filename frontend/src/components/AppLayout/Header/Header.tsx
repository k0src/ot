import { memo, useCallback, useState } from "react";
import { ShellBtn, HeaderBreadcrumbs } from "@components";
import { useSidebar } from "@contexts";
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
  const { collapsed, toggleCollapsed } = useSidebar();
  const [detailsPanelOpen, setDetailsPanelOpen] = useState(false);

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
          onClick={toggleCollapsed}
          active={!collapsed}
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
