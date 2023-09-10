import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <section className={styles.spinnerBlock}>
      <section className={styles.cometSpinner} tabIndex="1" aria-label="comet spinner">
        <div className="inner-circle"></div>
        <div className="comet"></div>
      </section>
    </section>
  )
}

export default Loader;