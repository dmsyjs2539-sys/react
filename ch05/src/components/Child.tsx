import styles from './Child.module.css';

export default function Child() {
  return (
    <>
      <button className="btn">Child button</button>
      <button className={styles.btn}>Child button blue</button>
      <button className={styles.activeBtn}>액티브</button>
    </>
  )
}