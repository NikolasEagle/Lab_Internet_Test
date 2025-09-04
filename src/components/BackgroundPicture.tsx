import styles from "./BackgroundPicture.module.scss";

export default function BackgroundPicture() {
  return (
    <div className={styles.picture}>
      <div className={styles.description_wrapper}>
        <div className={styles.description}>
          <h1>Говорят, никогда не поздно сменить профессию</h1>
          <p>Сделай круто тестовое задание и у тебя получится</p>
        </div>
        <button>Проще простого!</button>
      </div>
    </div>
  );
}
