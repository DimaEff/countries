import { TableCellProps } from "@mui/material";

import { Country } from "@components/countriesList/types";
import Link from "@shared/components/link";
import { Cell } from "@shared/components/table/types";

export const FETCH_ALL_COUNTRIES = "FETCH_ALL_COUNTRIES";

export const TABLE_CELL_ALIGN: TableCellProps["align"] = "left";
export const TABLE_HEADER_COLUMNS: Cell[] = [
    "Flag",
    "Name",
    "Subregion",
    { data: "Actions", props: { align: "right" } },
];
export const TABLE_DATA_KEYS: (keyof Country)[] = ["flagIcon", "name", "subregion"];
export const getCountryCells = (country: Country): Cell[] => {
    return [
        ...TABLE_DATA_KEYS.map(key => country[key]?.toString()),
        {
            data: country["code"],
            render: data => (
                <Link to={data} type={"button"}>
                    more...
                </Link>
            ),
            props: {
                align: "right",
            },
        },
    ];
};

export const COMMON_TABLE_PROPS: TableCellProps = {
    align: TABLE_CELL_ALIGN,
    sx: theme => ({ width: theme.spacing(5), maxWidth: theme.spacing(5) }),
};
