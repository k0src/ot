import { memo, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { FluentIcon } from "@fluentui/react-icons";
import classNames from "classnames";
import styles from "./SidebarNavLink.module.css";

export interface SidebarNavLinkProps {
  to: string;
  label: string;
  Icon: FluentIcon;
  IconActive: FluentIcon;
  externalLink?: boolean;
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({
  to,
  label,
  Icon,
  IconActive,
  externalLink,
}) => {
  const navLinkContent = useMemo(
    () => (
      <>
        <Icon
          className={classNames(styles.sidebarNavLinkIcon, styles.iconRegular)}
        />
        <IconActive
          className={classNames(styles.sidebarNavLinkIcon, styles.iconActive)}
        />
        <span className={styles.sidebarNavLinkText}>{label}</span>
      </>
    ),
    [Icon, IconActive, label],
  );

  if (externalLink) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.sidebarNavLink}
      >
        {navLinkContent}
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? styles.sidebarNavLinkActive : styles.sidebarNavLink
      }
    >
      {navLinkContent}
    </NavLink>
  );
};

export default memo(SidebarNavLink);
