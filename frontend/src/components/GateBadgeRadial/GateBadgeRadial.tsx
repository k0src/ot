import { memo, useMemo } from "react";
import classNames from "classnames";
import styles from "./GateBadgeRadial.module.css";

const GateBadgeRadial: React.FC<{ gate: string }> = ({ gate }) => {
  const validGates = useMemo(
    () => new Set(["g0", "g1", "g1.5", "g2", "g3"]),
    [],
  );

  const normalized = gate?.toLowerCase() ?? "";
  const validGate = validGates.has(normalized) ? normalized : "g0";
  const cssGateClass = `gateBadgeRadial-${validGate.replace(".", "_")}`;

  return (
    <div
      className={classNames(styles.gateBadgeRadial, styles[cssGateClass])}
    ></div>
  );
};

export default memo(GateBadgeRadial);
