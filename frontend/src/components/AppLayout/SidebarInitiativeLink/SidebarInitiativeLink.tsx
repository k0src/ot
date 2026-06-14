import { memo } from "react";
import { NavLink } from "react-router-dom";
import { GateBadgeRadial } from "@components";
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
  return (
    <NavLink
      to={`/initiatives/${initiativeId}`}
      className={({ isActive }) =>
        isActive
          ? styles.sidebarInitiativeLinkActive
          : styles.sidebarInitiativeLink
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
