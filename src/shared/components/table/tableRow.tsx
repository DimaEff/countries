import React from "react";

import { TableRow as MTableRow, TableCellProps } from "@mui/material";

import TableCell from "@shared/components/table/tableCell";
import { Cell } from "@shared/components/table/types";

interface TableDataRowProps {
    cells: Cell[];
    commonCellsProps?: TableCellProps;
}

const TableRow: React.FC<TableDataRowProps> = ({ cells, commonCellsProps }) => {
    return (
        <MTableRow>
            {cells.map((cell, i) => (
                <TableCell key={cell?.toString() || i} cell={cell} commonCellsProps={commonCellsProps} />
            ))}
        </MTableRow>
    );
};

export default TableRow;
