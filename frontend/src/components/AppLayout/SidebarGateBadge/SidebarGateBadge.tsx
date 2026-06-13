import { memo, useMemo } from "react";
import classNames from "classnames";
import styles from "./SidebarGateBadge.module.css";

const SidebarGateBadge: React.FC<{ gate: string }> = ({ gate }) => {
  const validGates = useMemo(
    () => new Set(["g0", "g1", "g1.5", "g2", "g3"]),
    [],
  );

  const normalized = gate?.toLowerCase() ?? "";
  const validGate = validGates.has(normalized) ? normalized : "g0";
  const cssGateClass = `sidebarGateBadge-${validGate.replace(".", "_")}`;

  return (
    <span className={classNames(styles.sidebarGateBadge, styles[cssGateClass])}>
      {validGate}
    </span>
  );
};

export default memo(SidebarGateBadge);
