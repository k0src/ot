import { memo } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { GateBadgeRadial } from "@components";
import { useSidebar } from "@contexts";
import type { InitiativeGate } from "@types";
import { EditRegular, EditFilled } from "@fluentui/react-icons";
import styles from "./SidebarInitiativeLink.module.css";

export interface SidebarInitiativeLinkProps {
  initiativeId: string;
  initiativeName: string;
  initiativeGate: InitiativeGate;
}

const SidebarInitiativeLink: React.FC<SidebarInitiativeLinkProps> = ({
  initiativeId,
  initiativeName,
  initiativeGate,
}) => {
  const { collapsed } = useSidebar();

  return (
    <NavLink
      to={`/initiatives/${initiativeId}`}
      className={({ isActive }) =>
        classNames(
          isActive
            ? styles.sidebarInitiativeLinkActive
            : styles.sidebarInitiativeLink,
          { [styles.collapsed]: collapsed },
        )
      }
    >
      <div className={styles.sidebarInitiativeLinkLeft}>
        <GateBadgeRadial gate={initiativeGate} />
        <span className={styles.sidebarInitiativeLinkText}>
          {initiativeName}
        </span>
      </div>
      <button className={styles.sidebarInitiativeLinkEditBtn}>
        <EditRegular />
      </button>
    </NavLink>
  );
};

export default memo(SidebarInitiativeLink);
