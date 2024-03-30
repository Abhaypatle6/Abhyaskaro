import { useMemo } from "react";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({ propAlignSelf, propWidth, propPadding }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const amitJhaHandleStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.rectangleParent} style={groupDiv1Style}>
      <div className={styles.frameChild} />
      <div className={styles.amitJhaHandle} style={amitJhaHandleStyle}>
        <input
          className={styles.reviewSubmission}
          placeholder="Amit Jha"    
          type="text"
        />
        <div className={styles.amitJhaHandleChild} />
      </div>
      <div className={styles.somethingElse}>
        <i className={styles.someReviewSubmitted}>
          Some review submitted by the user about the company
        </i>
      </div>
    </div>
  );
};

export default GroupComponent1;
