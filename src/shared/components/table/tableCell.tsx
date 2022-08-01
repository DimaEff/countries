import React, { useMemo } from "react";

import { TableCell as MTableCell, SxProps, TableCellProps, Typography } from "@mui/material";

import { TABLE_DATA_BLANK } from "@shared/components/table/consts";
import { Cell } from "@shared/components/table/types";

interface DataCellProps {
    cell?: Cell;
    commonCellsProps?: TableCellProps;
    header?: boolean;
}

const TableCell: React.FC<DataCellProps> = ({ cell, commonCellsProps, header }) => {
    const sx = useMemo<SxProps>(() => ({ fontWeight: header ? "bold" : "normal" }), [header]);
    if (typeof cell !== "object") {
        return (
            <MTableCell {...commonCellsProps}>
                <Typography sx={sx} noWrap>
                    {cell}
                </Typography>
            </MTableCell>
        );
    }

    return (
        <MTableCell {...commonCellsProps} {...cell?.props}>
            <Typography sx={sx} noWrap>
                {cell?.render ? cell.render(cell.data) : cell?.data || TABLE_DATA_BLANK}
            </Typography>
        </MTableCell>
    );
};

export default TableCell;
