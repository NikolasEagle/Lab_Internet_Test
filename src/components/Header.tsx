import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.roundes}>
          <div
            style={{ background: "rgba(42, 108, 234, 1)" }}
            className={styles.round}
          ></div>
          <div
            style={{
              background: "rgba(236, 239, 242, 1)",
              marginLeft: "-12px",
            }}
            className={styles.round}
          ></div>
        </div>
        <h5>testLab</h5>
      </div>
    </header>
  );
}
