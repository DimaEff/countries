import React from "react";

import { TableCell as MTableCell, TableCellProps, Typography } from "@mui/material";

import { TABLE_DATA_PLUG } from "@shared/components/table/consts";
import { Cell } from "@shared/components/table/types";

interface DataCellProps {
    cell?: Cell;
    commonCellsProps?: TableCellProps;
}

const TableCell: React.FC<DataCellProps> = ({ cell, commonCellsProps }) => {
    if (typeof cell !== "object") {
        return (
            <MTableCell {...commonCellsProps}>
                <Typography noWrap>{cell}</Typography>
            </MTableCell>
        );
    }

    return (
        <MTableCell {...commonCellsProps} {...cell?.props}>
            <Typography noWrap>{cell?.render ? cell.render(cell.data) : cell?.data || TABLE_DATA_PLUG}</Typography>
        </MTableCell>
    );
};

export default TableCell;
