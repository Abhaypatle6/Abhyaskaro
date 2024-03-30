import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Base.module.css";

const Base = () => {
  return (
    <div className={styles.base}>
      <main className={styles.frameParent}>
        <FrameComponent5 />
        <section className={styles.rectangleWrapper}>
          <div className={styles.frameChild} />
        </section>
        <FrameComponent4 />
        <FrameComponent3 />
      </main>
      <FrameComponent2 />
    </div>
  );
};

export default Base;
