import { memo, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { FluentIcon } from "@fluentui/react-icons";
import classNames from "classnames";
import { useSidebar } from "@contexts";
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
  const { collapsed } = useSidebar();

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
        className={classNames(styles.sidebarNavLink, {
          [styles.collapsed]: collapsed,
        })}
      >
        {navLinkContent}
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(
          isActive ? styles.sidebarNavLinkActive : styles.sidebarNavLink,
          {
            [styles.collapsed]: collapsed,
          },
        )
      }
    >
      {navLinkContent}
    </NavLink>
  );
};

export default memo(SidebarNavLink);
