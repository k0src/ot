import { memo, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { SidebarGateBadge } from "@components";
import classNames from "classnames";
import {
  LayoutColumnOneThirdLeftRegular,
  LayoutColumnOneThirdLeftFilled,
  AddRegular,
  BoardRegular,
  WindowBulletListRegular,
  ArchiveRegular,
  ArrowSquareUpRightRegular,
  WarningRegular,
  TaskListLtrRegular,
  ChartMultipleRegular,
  SettingsRegular,
  MailInboxRegular,
  BoardFilled,
  WindowBulletListFilled,
  ArchiveFilled,
  ArrowSquareUpRightFilled,
  WarningFilled,
  TaskListLtrFilled,
  ChartMultipleFilled,
  SettingsFilled,
  MailInboxFilled,
  MoreHorizontalRegular,
} from "@fluentui/react-icons";
import styles from "./Sidebar.module.css";
import Logo from "@assets/logo-square-500.png";
import UserPlaceholder from "@assets/user-placeholder.png";

const Sidebar: React.FC = () => {
  const navItems = useMemo(
    () => [
      {
        to: "/",
        label: "Dashboard",
        Icon: BoardRegular,
        IconActive: BoardFilled,
      },
      {
        to: "/initiatives",
        label: "Initiatives",
        Icon: WindowBulletListRegular,
        IconActive: WindowBulletListFilled,
      },
      {
        to: "/archive",
        label: "Archive",
        Icon: ArchiveRegular,
        IconActive: ArchiveFilled,
      },
      {
        to: "/gaps",
        label: "Open Gaps",
        Icon: TaskListLtrRegular,
        IconActive: TaskListLtrFilled,
      },
      {
        to: "/gaps",
        label: "Top Risks",
        Icon: WarningRegular,
        IconActive: WarningFilled,
      },
      {
        to: "/analytics",
        label: "Analytics",
        Icon: ChartMultipleRegular,
        IconActive: ChartMultipleFilled,
      },
    ],
    [],
  );

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarTop}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarLogoContainer}>
            <img
              src={Logo}
              alt="OTI Workspace Logo"
              className={styles.sidebarLogo}
            />
            <div className={styles.sidebarTitleContainer}>
              <span className={styles.sidebarTitle}>OTI Workspace</span>
              <span className={styles.sidebarSubtitle}>Company</span>
            </div>
          </div>
          <button className={styles.sidebarBtn}>
            <LayoutColumnOneThirdLeftRegular className={styles.iconRegular} />
            <LayoutColumnOneThirdLeftFilled className={styles.iconActive} />
          </button>
        </div>

        <div className={styles.sidebarNavContainer}>
          <div className={styles.sidebarNavSection}>
            <button className={styles.sidebarNewBtn}>
              <AddRegular className={styles.sidebarNewIcon} />
              <span className={styles.sidebarNewText}>New initiative</span>
            </button>
            <div className={styles.sidebarNav}>
              {navItems.map(({ to, label, Icon, IconActive }) => (
                <NavLink
                  key={label}
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                >
                  <div className={styles.sidebarNavItem}>
                    <Icon
                      className={classNames(
                        styles.sidebarNavItemIcon,
                        styles.iconRegular,
                      )}
                    />
                    <IconActive
                      className={classNames(
                        styles.sidebarNavItemIcon,
                        styles.iconActive,
                      )}
                    />
                    <span className={styles.sidebarNavItemText}>{label}</span>
                  </div>
                </NavLink>
              ))}
              <Link to="ado" className={styles.sidebarNavLink}>
                <div className={styles.sidebarNavItem}>
                  <ArrowSquareUpRightRegular
                    className={classNames(
                      styles.sidebarNavItemIcon,
                      styles.iconRegular,
                    )}
                  />
                  <ArrowSquareUpRightFilled
                    className={classNames(
                      styles.sidebarNavItemIcon,
                      styles.iconActive,
                    )}
                  />
                  <span className={styles.sidebarNavItemText}>
                    Azure DevOps
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.sidebarNavSection}>
            <span className={styles.sidebarNavSectionTitle}>
              Active Initiatives
            </span>
            <div className={styles.sidebarNav}>
              <NavLink
                to="/initiative/1234"
                className={({ isActive }) =>
                  isActive ? styles.sidebarNavLinkActive : styles.sidebarNavLink
                }
              >
                <div className={styles.sidebarNavItem}>
                  <SidebarGateBadge gate={"g0"} />
                  <span className={styles.sidebarListItemText}>
                    Initiative Name
                  </span>
                </div>
                <button className={styles.sidebarListMoreBtn}>
                  <MoreHorizontalRegular />
                </button>
              </NavLink>
              <NavLink
                to="/initiative/1234"
                className={({ isActive }) =>
                  isActive ? styles.sidebarNavLinkActive : styles.sidebarNavLink
                }
              >
                <div className={styles.sidebarNavItem}>
                  <SidebarGateBadge gate={"g1.5"} />
                  <span className={styles.sidebarListItemText}>
                    Initiative Name
                  </span>
                </div>
                <button className={styles.sidebarListMoreBtn}>
                  <MoreHorizontalRegular />
                </button>
              </NavLink>
              <NavLink
                to="/initiative/1234"
                className={({ isActive }) =>
                  isActive ? styles.sidebarNavLinkActive : styles.sidebarNavLink
                }
              >
                <div className={styles.sidebarNavItem}>
                  <SidebarGateBadge gate={"g2"} />
                  <span className={styles.sidebarListItemText}>
                    Initiative Name
                  </span>
                </div>
                <button className={styles.sidebarListMoreBtn}>
                  <MoreHorizontalRegular />
                </button>
              </NavLink>
              <NavLink
                to="/initiative/1234"
                className={({ isActive }) =>
                  isActive ? styles.sidebarNavLinkActive : styles.sidebarNavLink
                }
              >
                <div className={styles.sidebarNavItem}>
                  <SidebarGateBadge gate={"g3"} />
                  <span className={styles.sidebarListItemText}>
                    Initiative Name
                  </span>
                </div>
                <button className={styles.sidebarListMoreBtn}>
                  <MoreHorizontalRegular />
                </button>
              </NavLink>
              <NavLink
                to="/initiative/1234"
                className={({ isActive }) =>
                  isActive ? styles.sidebarNavLinkActive : styles.sidebarNavLink
                }
              >
                <div className={styles.sidebarNavItem}>
                  <SidebarGateBadge gate={"g1"} />
                  <span className={styles.sidebarListItemText}>
                    Initiative Name
                  </span>
                </div>
                <button className={styles.sidebarListMoreBtn}>
                  <MoreHorizontalRegular />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sidebarBottom}>
        <div className={styles.sidebarNavSection}>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? styles.sidebarNavLinkActive : styles.sidebarNavLink
            }
          >
            <div className={styles.sidebarNavItem}>
              <SettingsRegular
                className={classNames(
                  styles.sidebarNavItemIcon,
                  styles.iconRegular,
                )}
              />
              <SettingsFilled
                className={classNames(
                  styles.sidebarNavItemIcon,
                  styles.iconActive,
                )}
              />
              <span className={styles.sidebarNavItemText}>Settings</span>
            </div>
          </NavLink>
        </div>
        <div className={styles.sidebarFooter}>
          <button className={styles.sidebarUserBtn}>
            <img
              src={UserPlaceholder}
              alt="User"
              className={styles.sidebarUserImage}
            />
            <div className={styles.sidebarUserNameContainer}>
              <span className={styles.sidebarUserName}>Current User</span>
              <span className={styles.sidebarUserEmail}>user@example.com</span>
            </div>
          </button>
          <button className={styles.sidebarBtn}>
            <MailInboxRegular className={styles.iconRegular} />
            <MailInboxFilled className={styles.iconActive} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Sidebar);
