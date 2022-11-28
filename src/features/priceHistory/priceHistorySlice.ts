import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import PriceHistoryItemProps from "./PriceHistoryItemProps";

export interface priceHistoryState {
  totalPrice: number;
  totalSellingPrice: number;
  totalNpcPrice : number;
  totalBuyingPrice: number;
  items: PriceHistoryItemProps[];
}

const initialState: priceHistoryState = {
  totalPrice: 0,
  totalSellingPrice: 0,
  totalNpcPrice : 0,
  totalBuyingPrice: 0,
  items: [],
};

export const priceHistorySlice = createSlice({
  name: "priceHistory",
  initialState,
  reducers: {
    addToTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice += action.payload;
    },
    addPriceHistoryItem: (
      state,
      action: PayloadAction<PriceHistoryItemProps>
    ) => {
      state.items.push(action.payload);
      state.totalPrice += action.payload.finalPrice
      state.totalBuyingPrice += action.payload.buyPrice
      state.totalSellingPrice += action.payload.sellPrice
      state.totalNpcPrice += action.payload.npcPrice
    },
    changePriceHistoryItem: (state, action)=> {
      state.items = action.payload
    },
    removePriceHistoryItemById: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    reindexItemsInState: (state)=> {
      state.items.forEach((element, index) => {
        element.id = index;
      });
    },
    recalculateTotal: (state) => {
      var totalPrice = 0
      var totalBuyPrice = 0
      var totalSellPrice = 0
      var totalNpcPrice = 0
      state.items.forEach(elt => {
      totalPrice += elt.finalPrice
      totalBuyPrice += elt.buyPrice
      totalSellPrice += elt.sellPrice
      totalNpcPrice += elt.npcPrice
      });

      state.totalPrice = totalPrice;
      state.totalBuyingPrice = totalBuyPrice;
      state.totalSellingPrice = totalSellPrice;
      state.totalNpcPrice = totalNpcPrice;
    }
  },
});

export const { addToTotalPrice, addPriceHistoryItem, changePriceHistoryItem, removePriceHistoryItemById, reindexItemsInState, recalculateTotal } = priceHistorySlice.actions;

export const selectTotalPrice = (state: RootState) => state.priceHistory.totalPrice;
export const selectTotalSellingPrice = (state: RootState) => state.priceHistory.totalSellingPrice;
export const selectTotalBuyingPrice = (state: RootState) => state.priceHistory.totalBuyingPrice;
export const selectTotalNpcPrice = (state: RootState) => state.priceHistory.totalNpcPrice;
export const selectPriceHistoryItems = (state: RootState) => state.priceHistory.items;

export default priceHistorySlice.reducer;
