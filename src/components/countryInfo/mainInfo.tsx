import React from "react";

import { Box, Table, TableContainer, Typography } from "@mui/material";

import blankImage from "@assets/blankImage.png";
import { Country } from "@components/countriesList/types";
import { TableRow } from "@shared/components/table";

interface MainInfoProps {
    country: Country;
}

const MainInfo: React.FC<MainInfoProps> = ({ country }) => {
    return (
        <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
            <Box sx={{ width: 400 }}>
                <Box>
                    <img style={{ width: "100%" }} src={country.flagImageSrc || blankImage} alt="country flag" />
                </Box>
                <Box sx={{ marginTop: 3, maxWidth: "100%" }}>
                    <Typography sx={{ fontWeight: "bold" }}>Languages</Typography>
                    <Typography sx={{ overflowX: "auto" }}>{country.languages?.join(", ")}</Typography>
                </Box>
            </Box>
            <Box>
                <TableContainer>
                    <Table>
                        <TableRow cells={["Name", "Full name", "Region", "Subregion"]} header />
                        <TableRow cells={[country.name, country.fullName, country.region, country.subregion]} />

                        <TableRow cells={["Region", "Subregion", "Area", "Population"]} header />
                        <TableRow cells={[country.region, country.subregion, country.area, country.population]} />

                        <TableRow cells={["Code"]} header />
                        <TableRow cells={[country.code]} />
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default MainInfo;
