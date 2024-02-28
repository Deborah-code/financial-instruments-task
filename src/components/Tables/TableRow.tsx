import React from "react";
import { FinancialInstrument } from "../../utils/sort";
import Style from "./TableRow.module.css";

interface Columns {
  text: string;
  icon: React.ReactNode;
}

interface TableRowProps {
  row: FinancialInstrument;
  columns: Columns[];
  onHeadingClick?: (headingText: string) => void;
}

const getRowClassName = (row: any) => {
  switch (row.assetClass) {
    case "Commodities":
      return `${Style.row} ${Style.commodities}`;
    case "Equities":
      return `${Style.row} ${Style.equities}`;
    case "Credit":
      return `${Style.row} ${Style.credit}`;
    default:
      return Style.row;
  }
};

const TableRow: React.FC<TableRowProps> = ({ row }) => {
  const getPriceClassName = (price: number) => {
    return price >= 0 ? Style.positivePrice : Style.negativePrice;
  };

  return (
    <tr className={getRowClassName(row)}>
      <td className={Style.tableData}>{row.ticker}</td>
      <td className={Style.tableData}>{row.assetClass}</td>
      <td className={`${Style.tableData} ${getPriceClassName(row.price)}`}>
        {row.price}
      </td>
    </tr>
  );
};

export default TableRow;
