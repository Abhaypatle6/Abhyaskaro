import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <footer className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.abhayaasCityName}>
        <h3 className={styles.karoAbhayaas112Container}>
          <p className={styles.karoAbhayaas}>KARO ABHAYAAS</p>
          <p className={styles.electronicCity}>112, ELECTRONIC CITY</p>
          <p className={styles.bangaloreIndia}>BANGALORE, INDIA</p>
        </h3>
      </div>
      <div className={styles.someTextAboutSomethingAndParent}>
        <h3 className={styles.someTextAboutContainer}>
          <p className={styles.someTextAbout}>SOME TEXT ABOUT SOMETHING</p>
          <p className={styles.andThenSome}>AND THEN SOME OTHER THING</p>
        </h3>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <button className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.contactUs}>CONTACT US</div>
            </button>
            <button className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.contactUs1}>CONTACT US</div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent2;
