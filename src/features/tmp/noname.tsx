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
        <label>
          BuyPrice :
          <input type="number" onChange={this.buyPriceChange} />
        </label>
        <label>
          SellPrice :
          <input type="number" onChange={this.sellPriceChange} />
        </label>
        <label>
          NPCPrice :
          <input type="number" onChange={this.npcPriceChange} />
        </label>
        <button onClick={this.finalPriceChange} style={{ width: "10vw" }}>
          CALCUL
        </button>
        <label>Final price : {this.state.finalPrice}</label>
      </div>
    );
  }
}
