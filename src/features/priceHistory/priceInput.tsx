import React, { useEffect, useState } from "react";

import {
  addPriceHistoryItem,
  changePriceHistoryItem,
  recalculateTotal,
  reindexItemsInState,
  selectPriceHistoryItems,
} from "./priceHistorySlice";
import styles from "../../styles/noname.module.css";
import PriceHistory from "./priceHistory";
import PriceHistoryItemProps from "./PriceHistoryItemProps";
import { useAppDispatch } from "../../app/hooks";
import { useSelector } from "react-redux";

export function PriceInput() {
  const [buyPrice, setBuyPrice] = React.useState(0);
  const [sellPrice, setSellPrice] = React.useState(0);
  const [npcPrice, setNpcPrice] = React.useState(0);
  const [finalPrice, setFinalPrice] = React.useState(0);

  const dispatch = useAppDispatch();
  var items = useSelector(selectPriceHistoryItems);

  React.useEffect(() => {
    const saved = localStorage.getItem("items");
    if (saved != null) {
      const items = JSON.parse(saved) as PriceHistoryItemProps[];
      dispatch(changePriceHistoryItem(items));
      dispatch(recalculateTotal());
    }
  }, []);

  React.useEffect(() => {
    dispatch(reindexItemsInState());
    dispatch(recalculateTotal());
    if (items.length > 0) localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const buyPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBuyPrice(event.target.valueAsNumber);
    finalPriceChange();
  };
  const sellPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSellPrice(parseInt(event.target.value));
    finalPriceChange();
  };
  const npcPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNpcPrice(parseInt(event.target.value));
    finalPriceChange();
  };
  const finalPriceChange = () => {
    var n1: number = sellPrice + npcPrice;
    var n2: number = (n1 * 5) / 100;
    var n3: number = buyPrice;

    setFinalPrice(n1 - n2 - n3);
  };

  function onAddButtonClick() {
    var item: PriceHistoryItemProps = {
      buyPrice: buyPrice,
      sellPrice: sellPrice,
      npcPrice: npcPrice,
      finalPrice: finalPrice,
      id: items.length,
    };
    dispatch(addPriceHistoryItem(item));
    resetAllInputPrice();
  }

  function resetAllInputPrice() {
    setBuyPrice(0);
    setFinalPrice(0);
    setNpcPrice(0);
    setSellPrice(0);
  }

  return (
    <div className={styles.inputPriceContainer}>
      <label className={styles.input}>
        BUY PRICE
        <input
          type="number"
          onChange={buyPriceChange}
          placeholder="Buy price"
          className={styles.inputstyle}
          value={buyPrice}
        />
      </label>
      <label className={styles.input}>
        SELL PRICE
        <input
          type="number"
          onChange={sellPriceChange}
          placeholder="Sell price"
          className={styles.inputstyle}
          value={sellPrice}
        />
      </label>
      <label className={styles.input}>
        NPC PRICE
        <input
          type="number"
          onChange={npcPriceChange}
          placeholder="NPC price"
          className={styles.inputstyle}
          value={npcPrice}
        />
      </label>
      <label className={styles.input}>
        PROFIT
        <div className={styles.inputstyle2}>{finalPrice.toFixed(0)}</div>
      </label>
      <div style={{ justifyContent: "flex-end", flex: 1, display: "flex" }}>
        <button className={styles.button} onClick={onAddButtonClick}>
          ADD
        </button>
      </div>
    </div>
  );
}
