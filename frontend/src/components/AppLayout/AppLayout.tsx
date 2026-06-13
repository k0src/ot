import { memo } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

import styles from "./AppLayout.module.css";

import Logo from "@assets/logo-square-500.png";
import UserPlaceholder from "@assets/user-placeholder.png";

import { SidebarGateBadge } from "@components";

import classNames from "classnames";

import {
  LayoutColumnOneThirdLeftRegular,
  LayoutColumnOneThirdLeftFilled,
  ChevronRightRegular,
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
  AddFilled,
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

const AppLayout: React.FC = () => {
  return (
    <div className={styles.layoutContainer}>
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
              <LayoutColumnOneThirdLeftRegular />
            </button>
          </div>

          <div className={styles.sidebarNavContainer}>
            <div className={styles.sidebarNavSection}>
              <button className={styles.sidebarNewBtn}>
                <AddRegular className={styles.sidebarNewIcon} />
                <span className={styles.sidebarNewText}>New initiative</span>
              </button>
              <div className={styles.sidebarNav}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                >
                  <div className={styles.sidebarNavItem}>
                    <BoardRegular className={styles.sidebarNavItemIcon} />
                    <span className={styles.sidebarNavItemText}>Dashboard</span>
                  </div>
                </NavLink>
                <NavLink
                  to="/initiatives"
                  className={({ isActive }) =>
                    isActive
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                >
                  <div className={styles.sidebarNavItem}>
                    <WindowBulletListRegular
                      className={styles.sidebarNavItemIcon}
                    />
                    <span className={styles.sidebarNavItemText}>
                      Initiatives
                    </span>
                  </div>
                </NavLink>
                <NavLink
                  to="/archive"
                  className={({ isActive }) =>
                    isActive
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                >
                  <div className={styles.sidebarNavItem}>
                    <ArchiveRegular className={styles.sidebarNavItemIcon} />
                    <span className={styles.sidebarNavItemText}>Archive</span>
                  </div>
                </NavLink>
                <NavLink
                  to="/gaps"
                  className={({ isActive }) =>
                    isActive
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                >
                  <div className={styles.sidebarNavItem}>
                    <TaskListLtrRegular className={styles.sidebarNavItemIcon} />
                    <span className={styles.sidebarNavItemText}>Open Gaps</span>
                  </div>
                </NavLink>
                <NavLink
                  to="/gaps"
                  className={({ isActive }) =>
                    isActive
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                >
                  <div className={styles.sidebarNavItem}>
                    <WarningRegular className={styles.sidebarNavItemIcon} />
                    <span className={styles.sidebarNavItemText}>Top Risks</span>
                  </div>
                </NavLink>
                <NavLink
                  to="/analytics"
                  className={({ isActive }) =>
                    isActive
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                >
                  <div className={styles.sidebarNavItem}>
                    <ChartMultipleRegular
                      className={styles.sidebarNavItemIcon}
                    />
                    <span className={styles.sidebarNavItemText}>Analytics</span>
                  </div>
                </NavLink>
                <Link to="ado" className={styles.sidebarNavLink}>
                  <div className={styles.sidebarNavItem}>
                    <ArrowSquareUpRightRegular
                      className={styles.sidebarNavItemIcon}
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
                    isActive
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                >
                  <div className={styles.sidebarListItem}>
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
                    isActive
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                >
                  <div className={styles.sidebarListItem}>
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
                    isActive
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                >
                  <div className={styles.sidebarListItem}>
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
                    isActive
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                >
                  <div className={styles.sidebarListItem}>
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
                    isActive
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                >
                  <div className={styles.sidebarListItem}>
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
                <SettingsRegular className={styles.sidebarNavItemIcon} />
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
                <span className={styles.sidebarUserEmail}>
                  user@example.com
                </span>
              </div>
            </button>
            <button className={styles.sidebarBtn}>
              <MailInboxRegular />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.contentAreaContainer}>
        <header className={styles.headerContainer}>
          <div className={styles.breadcrumbsContainer}>
            <NavLink to="/initatives" className={styles.breadcrumb}>
              Initiatives
            </NavLink>
            <ChevronRightRegular className={styles.breadcrumbChevron} />
            <span className={styles.breadcrumbMain}>Initiative Name</span>
          </div>

          <div className={styles.headerRight}>
            {/* search bar */}
            <div className={styles.searchBarTest} />
          </div>
        </header>

        <main className={styles.contentArea}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default memo(AppLayout);
