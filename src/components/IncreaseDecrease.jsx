import { useState } from "react";
import styles from './increase.module.css'

export default function IncreaseDecrease() {
  const [increase, setIncrease] = useState(0);
  const increaseDigit = () => {
    setIncrease(increase + 1);
  };
  const decreaseDigit = () => {
    setIncrease(increase - 1);
  };
  return (
    <div className={styles.container}>
      This increase and Decrease
      <h1>This particular number is: {increase}</h1>
      <button className={styles.btn} onClick={increaseDigit} type="submit">ADD</button>
      <button className={styles.btn} onClick={decreaseDigit}>REDUCE</button>
    </div>
  );
}
