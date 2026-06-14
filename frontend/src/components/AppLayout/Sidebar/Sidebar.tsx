import { memo, useCallback, useMemo } from "react";
import {
  ShellBtn,
  SidebarSearchBar,
  SidebarNavLink,
  SidebarInitiativeLink,
  SidebarOverflowLink,
} from "@components";
import { useSidebar } from "@contexts";
import classNames from "classnames";
import {
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
} from "@fluentui/react-icons";
import styles from "./Sidebar.module.css";
import Logo from "@assets/logo-square-500.png";
import UserPlaceholder from "@assets/user-placeholder.png";

const Sidebar: React.FC = () => {
  const { collapsed } = useSidebar();

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
      {
        to: "https://ado.com",
        label: "Azure DevOps",
        Icon: ArrowSquareUpRightRegular,
        IconActive: ArrowSquareUpRightFilled,
        externalLink: true,
      },
    ],
    [],
  );

  const handleNewInitiative = useCallback(() => {}, []);
  const handleNotifications = useCallback(() => {}, []);

  return (
    <div
      className={classNames(styles.sidebarContainer, {
        [styles.collapsed]: collapsed,
      })}
    >
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
          {!collapsed && (
            <ShellBtn
              ariaLabel="New initiative"
              IconRegular={AddRegular}
              IconActive={AddRegular}
              onClick={handleNewInitiative}
            />
          )}
        </div>

        <div className={styles.sidebarNavContainer}>
          <div className={styles.sidebarNavSection}>
            <SidebarSearchBar />
            <div className={styles.sidebarSeparator} />
            <span className={styles.sidebarNavSectionTitle}>Workspace</span>
            <div className={styles.sidebarNav}>
              {navItems.map(({ to, label, Icon, IconActive, externalLink }) => (
                <SidebarNavLink
                  key={to}
                  to={to}
                  label={label}
                  Icon={Icon}
                  IconActive={IconActive}
                  externalLink={externalLink}
                />
              ))}
            </div>
          </div>

          <div className={styles.sidebarNavSection}>
            <span className={styles.sidebarNavSectionTitle}>
              Active Initiatives
            </span>
            <div className={styles.sidebarNav}>
              <SidebarInitiativeLink
                initiativeId={"1234"}
                initiativeName={"Initiative Name"}
                initiativeGate={"g0"}
              />
              <SidebarInitiativeLink
                initiativeId={"1234"}
                initiativeName={"Initiative Name"}
                initiativeGate={"g1.5"}
              />
              <SidebarInitiativeLink
                initiativeId={"1234"}
                initiativeName={"Initiative Name"}
                initiativeGate={"g2"}
              />
              <SidebarInitiativeLink
                initiativeId={"1234"}
                initiativeName={"Initiative Name"}
                initiativeGate={"g3"}
              />
              <SidebarOverflowLink to="/initiatives?filter=mine" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sidebarBottom}>
        <div className={styles.sidebarNavSection}>
          <SidebarNavLink
            to="/settings"
            label="Settings"
            Icon={SettingsRegular}
            IconActive={SettingsFilled}
          />
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
          {!collapsed && (
            <ShellBtn
              ariaLabel="Notifications"
              IconRegular={MailInboxRegular}
              IconActive={MailInboxFilled}
              onClick={handleNotifications}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Sidebar);
