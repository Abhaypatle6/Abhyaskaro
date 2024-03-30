import GroupComponent1 from "./GroupComponent1";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <section className={styles.reviewCardParent}>
      <div className={styles.reviewCard}>
        <div className={styles.reviewerNameParent}>
          <div className={styles.reviewerName}>
            <GroupComponent1 />
          </div>
          <GroupComponent1
            propAlignSelf="unset"
            propWidth="411px"
            propPadding="0px var(--padding-8xs) 0px 0px"
          />
          <GroupComponent1
            propAlignSelf="unset"
            propWidth="411px"
            propPadding="0px var(--padding-8xs) 0px 0px"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
          </div>
        </div>
      </div>
      <GroupComponent1
        propAlignSelf="unset"
        propWidth="411px"
        propPadding="0px var(--padding-8xs) 0px 0px"
      />
    </section>
  );
};

export default FrameComponent3;
