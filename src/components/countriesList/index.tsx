import React from "react";

import { Box, Table, TableBody, TableContainer, TableHead, TablePagination } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { fetchAllCountries } from "@components/countriesList/api";
import {
    FETCH_ALL_COUNTRIES,
    TABLE_CELL_ALIGN,
    TABLE_HEADER_COLUMNS,
    getCountryCells,
} from "@components/countriesList/consts";
import { Country } from "@components/countriesList/types";
import { reformatToCountry } from "@components/countriesList/utils";
import { TableRow } from "@shared/components/table";
import usePaginationData, { DEFAULT_PAGE_SIZE } from "@shared/hooks/usePaginationData";

const CountriesList = () => {
    const { isLoading, data } = useQuery([FETCH_ALL_COUNTRIES], fetchAllCountries);
    const { paginationData, page, setPage } = usePaginationData<Country>(data, { reformatDataFn: reformatToCountry });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Box sx={{ margin: 10 }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow cells={TABLE_HEADER_COLUMNS} commonCellsProps={{ align: TABLE_CELL_ALIGN }} />
                    </TableHead>
                    <TableBody>
                        {paginationData.map(country => (
                            <TableRow
                                key={country.code}
                                cells={getCountryCells(country)}
                                commonCellsProps={{ align: TABLE_CELL_ALIGN }}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                count={data?.length || 0}
                page={page}
                rowsPerPage={DEFAULT_PAGE_SIZE}
                onPageChange={(e, p) => setPage(p)}
            />
        </Box>
    );
};

export default CountriesList;
