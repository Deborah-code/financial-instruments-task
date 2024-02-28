import { useEffect, useMemo, useState } from "react";
import { columnsHeading } from "../../data/columnsHeading";
import { fetchData } from "../../utils/fetchFinancialInstrument";
import { sortData } from "../../utils/sort";
import ErrorMessage from "../Common/ErrorMessage";
import Table from "../Tables/Table";
import Style from "./FinancialInstruments.module.css";

interface Instrument {
  assetClass: string;
  ticker: string;
  price: number;
}

const FinancialInstrumentComponent: React.FC = () => {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [sortBy, setSortBy] = useState<string>("ticker");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const [sortDirection, setSortDirection] = useState<string>("ascending");

  const fetchInstruments = async () => {
    try {
      setError(false);
      const data = await fetchData();
      setInstruments(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchInstruments();
  }, []);

  const sortedData = useMemo(
    () => sortData(instruments, sortBy, sortDirection),
    [instruments, sortBy, sortDirection]
  );

  const handleClick = (val: string) => {
    if (sortBy === val) {
      setSortDirection((prevDirection) =>
        prevDirection === "ascending" ? "descending" : "ascending"
      );
    } else {
      setSortBy(val);
      setSortDirection("ascending");
    }
  };

  return (
    <section className={Style.tableContainer}>
      <h1 className={Style.headingText}>Financial Instruments</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <ErrorMessage message="There was an error fetching the financial instruments." />
      ) : sortedData.length > 0 ? (
        <Table
          columns={columnsHeading}
          data={sortedData}
          onHeadingClick={handleClick}
        />
      ) : (
        <p>No financial Instruments to see</p>
      )}
    </section>
  );
};

export default FinancialInstrumentComponent;
