import { memo } from "react";
import { NavLink } from "react-router-dom";
import { MoreHorizontalRegular } from "@fluentui/react-icons";
import styles from "./SidebarOverflowLink.module.css";

export interface SidebarOverflowLinkProps {
  to: string;
  label?: string;
}

const SidebarOverflowLink: React.FC<SidebarOverflowLinkProps> = ({
  to,
  label = "View more",
}) => {
  return (
    <NavLink to={to} className={styles.sidebarOverflowLink}>
      <MoreHorizontalRegular className={styles.sidebarOverflowLinkIcon} />
      <span className={styles.sidebarOverflowLinkText}>{label}</span>
    </NavLink>
  );
};

export default memo(SidebarOverflowLink);
