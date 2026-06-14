import { memo } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { MoreHorizontalRegular } from "@fluentui/react-icons";
import { useSidebar } from "@contexts";
import styles from "./SidebarOverflowLink.module.css";

export interface SidebarOverflowLinkProps {
  to: string;
  label?: string;
}

const SidebarOverflowLink: React.FC<SidebarOverflowLinkProps> = ({
  to,
  label = "View more",
}) => {
  const { collapsed } = useSidebar();

  return (
    <NavLink
      to={to}
      className={classNames(styles.sidebarOverflowLink, {
        [styles.collapsed]: collapsed,
      })}
    >
      <MoreHorizontalRegular className={styles.sidebarOverflowLinkIcon} />
      <span className={styles.sidebarOverflowLinkText}>{label}</span>
    </NavLink>
  );
};

export default memo(SidebarOverflowLink);
