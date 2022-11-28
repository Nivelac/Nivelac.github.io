import "./App.css";
import PriceHistory from "./features/priceHistory/priceHistory";
import { PriceInput } from "./features/priceHistory/priceInput";
import PriceRecap from "./features/priceHistory/priceRecap";

//fonts
import "./fonts/WorkSans-Medium.ttf";

function App() {
  return (
    <div className="App">
      <PriceInput />
      <PriceHistory />
      <PriceRecap />
    </div>
  );
}

export default App;
