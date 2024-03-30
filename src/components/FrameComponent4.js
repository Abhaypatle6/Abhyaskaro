import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <div className={styles.topStudents}>Top Students</div>
        </div>
      </div>
      <div className={styles.reviewByAmitJha}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.reviewContainer}>
            <div className={styles.reviewContainerChild} />
            <div className={styles.amitJha}>Amit Jha</div>
            <i className={styles.someReviewSubmitted}>
              “Some review submitted by the user about the company”
            </i>
          </div>
        </div>
        <div className={styles.karoAbhayaasLabelParent}>
          <div className={styles.karoAbhayaasLabel}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <div className={styles.contactUsLabel}>
                <div className={styles.contactUsLabelChild} />
                <div className={styles.amitJha1}>Amit Jha</div>
                <i className={styles.someReviewSubmitted1}>
                  “Some review submitted by the user about the company”
                </i>
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <div className={styles.frameDiv}>
                <div className={styles.frameChild1} />
                <div className={styles.amitJha2}>Amit Jha</div>
                <i className={styles.someReviewSubmitted2}>
                  “Some review submitted by the user about the company”
                </i>
              </div>
            </div>
          </div>
          <div className={styles.reviewsContainer}>
            <div className={styles.reviews}>Reviews</div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.frameChild2} />
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild3} />
            <div className={styles.amitJha3}>Amit Jha</div>
            <i className={styles.someReviewSubmitted3}>
              “Some review submitted by the user about the company”
            </i>
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameChild4} />
          <div className={styles.frameChild5} />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
