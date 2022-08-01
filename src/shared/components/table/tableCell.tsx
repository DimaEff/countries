import React from "react";

import { TableCell as MTableCell, TableCellProps } from "@mui/material";

import { TABLE_DATA_PLUG } from "@shared/components/table/consts";
import { Cell } from "@shared/components/table/types";

interface DataCellProps {
    cell?: Cell;
    commonCellsProps?: TableCellProps;
}

const TableCell: React.FC<DataCellProps> = ({ cell, commonCellsProps }) => {
    if (typeof cell !== "object") {
        return <MTableCell {...commonCellsProps}>{cell}</MTableCell>;
    }

    return (
        <MTableCell {...commonCellsProps} {...cell?.props}>
            {cell?.render ? cell.render(cell.data) : cell?.data || TABLE_DATA_PLUG}
        </MTableCell>
    );
};

export default TableCell;
