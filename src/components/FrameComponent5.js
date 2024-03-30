import { useCallback } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = () => {
  const onClassesTextClick = useCallback(() => {
    // Please sync "classes" to the project
  }, []);

  const onGroupIconClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onGroupIcon1Click = useCallback(() => {
    // Please sync "Cart" to the project
  }, []);

  return (
    <header className={styles.frameWrapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.karoAbhayaasWrapper}>
          <b className={styles.karoAbhayaas}>Karo Abhayaas</b>
        </div>
        <button className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.joinUs}>JOIN US</div>
        </button>
        <nav className={styles.classesProductsWrapper}>
          <nav className={styles.classesProducts}>
            <div className={styles.classes} onClick={onClassesTextClick}>
              Classes
            </div>
            <div className={styles.products}>Products</div>
            <div className={styles.aboutUs}>About Us</div>
          </nav>
        </nav>
        <div className={styles.frameContainer}>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/group-2.svg"
            onClick={onGroupIconClick}
          />
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-1.svg"
            onClick={onGroupIcon1Click}
          />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent5;
