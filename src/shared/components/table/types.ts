import React from "react";

import { TableCellProps } from "@mui/material/TableCell/TableCell";

type DataCell = any;
interface CellWithOptions {
    data: string;
    // eslint-disable-next-line no-unused-vars
    render?: (data: DataCell) => React.ReactNode;
    props?: TableCellProps;
}
type SimpleCell = string | number | null | undefined;
export type Cell = SimpleCell | CellWithOptions;
