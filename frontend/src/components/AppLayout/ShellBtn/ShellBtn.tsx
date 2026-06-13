import { memo } from "react";
import classNames from "classnames";
import type { FluentIcon } from "@fluentui/react-icons";
import styles from "./ShellBtn.module.css";

interface ShellBtnProps {
  ariaLabel: string;
  IconRegular: FluentIcon;
  IconActive: FluentIcon;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
}

const ShellBtn: React.FC<ShellBtnProps> = ({
  ariaLabel,
  IconRegular,
  IconActive,
  onClick,
  active,
  disabled,
}) => {
  return (
    <button
      type="button"
      className={classNames(styles.shellBtn, { [styles.btnActive]: active })}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-pressed={active}
    >
      <IconRegular className={styles.iconRegular} />
      <IconActive className={styles.iconActive} />
    </button>
  );
};

export default memo(ShellBtn);
