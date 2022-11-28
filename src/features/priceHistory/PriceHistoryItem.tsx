import React from "react";
import PriceHistoryItemProps from "./PriceHistoryItemProps";
import styles from "../../styles/noname.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  reindexItemsInState,
  removePriceHistoryItemById,
  selectPriceHistoryItems,
} from "./priceHistorySlice";

function PriceHistoryItem({
  buyPrice,
  sellPrice,
  npcPrice,
  finalPrice,
  id,
}: PriceHistoryItemProps) {
  var dispatch = useAppDispatch();
  var items = useAppSelector(selectPriceHistoryItems);
  const onDeleteButtonClick = () => {
    if (items.length == 1) localStorage.removeItem("items");
    dispatch(removePriceHistoryItemById(id));
  };
  return (
    <div className={styles.inputPriceContainer}>
      <label className={styles.input} style={{ pointerEvents: "none" }}>
        BUY PRICE
        <div className={styles.inputstyle2}>{buyPrice}</div>
      </label>
      <label className={styles.input} style={{ pointerEvents: "none" }}>
        SELL PRICE
        <div className={styles.inputstyle2}>{sellPrice}</div>
      </label>
      <label className={styles.input} style={{ pointerEvents: "none" }}>
        NPC PRICE
        <div className={styles.inputstyle2}>{npcPrice}</div>
      </label>
      <label className={styles.input}>
        PROFIT
        <div className={styles.inputstyle2}>{finalPrice.toFixed(0)}</div>
      </label>
      <div style={{ justifyContent: "flex-end", flex: 1, display: "flex" }}>
        <button
          className={styles.button + " " + styles.deleteButton}
          onClick={onDeleteButtonClick}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default PriceHistoryItem;
