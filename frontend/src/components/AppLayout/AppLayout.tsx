import { memo } from "react";
import { Outlet } from "react-router-dom";

import styles from "./AppLayout.module.css";

import { Sidebar, Header } from "@components";

const AppLayout: React.FC = () => {
  return (
    <div className={styles.layoutContainer}>
      <Sidebar />
      <div className={styles.contentAreaContainer}>
        <Header />
        <main className={styles.contentArea}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default memo(AppLayout);
