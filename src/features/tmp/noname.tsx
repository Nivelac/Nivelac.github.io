import React, { useState } from "react";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {} from "../tmp/nonameSlice";
import styles from "../tmp/noname.module.css";

type MyProps = {};

type MyState = {
  buyPrice: number;
  sellPrice: number;
  npcPrice: number;
  finalPrice: number;
};

export class NoName extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      buyPrice: 0,
      sellPrice: 0,
      npcPrice: 0,
      finalPrice: 0,
    };
  }

  buyPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ buyPrice: event.target.valueAsNumber });
  };
  sellPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ sellPrice: parseInt(event.target.value) });
  };
  npcPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ npcPrice: parseInt(event.target.value) });
  };
  finalPriceChange = () => {
    var n1: number = this.state.sellPrice + this.state.npcPrice;
    var n2: number = (n1 * 5) / 100;
    var n3: number = this.state.buyPrice;

    console.log("n1:" + n1);

    this.setState({
      finalPrice: n1 - n2 - n3,
    });
  };

  render() {
    return (
      <div className={styles.tmp}>
        <label className={styles.input}>
          BUY PRICE
          <input
            type="number"
            onChange={this.buyPriceChange}
            placeholder="Buy price"
            className={styles.inputstyle}
          />
        </label>
        <label className={styles.input}>
          SELL PRICE
          <input
            type="number"
            onChange={this.sellPriceChange}
            placeholder="Sell price"
            className={styles.inputstyle}
          />
        </label>
        <label className={styles.input}>
          NPC PRICE
          <input
            type="number"
            onChange={this.npcPriceChange}
            placeholder="NPC price"
            className={styles.inputstyle}
          />
        </label>
        <button onClick={this.finalPriceChange} className={styles.button}>
          =
        </button>
        <label className={styles.input}>
          PROFIT
          <div className={styles.inputstyle2}>{this.state.finalPrice}</div>
        </label>
      </div>
    );
  }
}
