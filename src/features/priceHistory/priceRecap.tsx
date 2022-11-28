import { useAppSelector } from "../../app/hooks";
import styles from "../../styles/noname.module.css";
import {
  selectTotalBuyingPrice,
  selectTotalNpcPrice,
  selectTotalPrice,
  selectTotalSellingPrice,
} from "./priceHistorySlice";

export default function PriceRecap() {
  var totalPrice = useAppSelector(selectTotalPrice);
  var totalNpcPrice = useAppSelector(selectTotalNpcPrice);
  var totalBuyingPrice = useAppSelector(selectTotalBuyingPrice);
  var totalSellingPrice = useAppSelector(selectTotalSellingPrice);
  return (
    <>
      <div className={styles.inputPriceContainer + " " + styles.priceRecap}>
        <label className={styles.input} style={{ pointerEvents: "none" }}>
          TOTAL BUYING PRICE
          <div className={styles.inputstyle2}>{totalBuyingPrice}</div>
        </label>
        <label className={styles.input} style={{ pointerEvents: "none" }}>
          TOTAL SELLING PRICE
          <div className={styles.inputstyle2}>{totalSellingPrice}</div>
        </label>
        <label className={styles.input} style={{ pointerEvents: "none" }}>
          TOTAL NPC PRICE
          <div className={styles.inputstyle2}>{totalNpcPrice}</div>
        </label>
        <label className={styles.input}>
          TOTAL BENEFICE
          <div className={styles.inputstyle2}>{totalPrice.toFixed(0)}</div>
        </label>
      </div>
    </>
  );
}
