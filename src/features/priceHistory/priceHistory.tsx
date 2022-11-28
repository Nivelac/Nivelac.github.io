import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import PriceHistoryItem from "./PriceHistoryItem";
import PriceHistoryItemProps from "./PriceHistoryItemProps";
import { addToTotalPrice, selectPriceHistoryItems } from "./priceHistorySlice";
import styles from "../../styles/priceHistory.module.css";
import { autoBatchEnhancer } from "@reduxjs/toolkit";

function PriceHistory() {
  var history: PriceHistoryItemProps[] = useSelector(selectPriceHistoryItems);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { height, width } = useWindowDimensions();
  return (
    <div
      className={styles.container}
      //style={{ height: height * 0.75, width: width }}
      style={{ flex: 1, overflow: "auto" }}
    >
      {history.length > 0 &&
        history.map((item, index) => (
          <PriceHistoryItem
            key={index}
            buyPrice={item.buyPrice}
            sellPrice={item.sellPrice}
            npcPrice={item.npcPrice}
            finalPrice={item.finalPrice}
            id={item.id}
          />
        ))}
    </div>
  );
}

export default PriceHistory;
