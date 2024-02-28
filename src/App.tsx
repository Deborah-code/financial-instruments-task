import { FC } from "react";
import Style from "./App.module.css";
import FinancialInstrumentComponent from "./components/HomePage/FinancialInstruments";
const App: FC = () => {
  return (
    <>
      <main className={Style.pageContainer}>
        <FinancialInstrumentComponent />
      </main>
    </>
  );
};

export default App;
