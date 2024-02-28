import React from "react";
import { FinancialInstrument } from "../../utils/sort";
import TextAndIcon from "../Common/TextandIcon";
import Style from "./Table.module.css";
import TableRow from "./TableRow";

interface Columns {
  id: string;
  text: string;
  icon: React.ReactNode;
}

interface TableProps {
  columns: Columns[];
  data: FinancialInstrument[];
  onHeadingClick?: (headingText: string) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, onHeadingClick }) => {
  return (
    <table className={Style.table}>
      <thead className={Style.thead}>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className={Style.tableHeading}>
              <TextAndIcon data={column} onTextClick={onHeadingClick} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex} row={row} columns={columns} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
