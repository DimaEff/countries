import React from "react";

import { Typography } from "@mui/material";

const InfoMessage: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Typography variant={"h6"} textAlign={"center"} color={"#4f4f4f"} fontWeight={"bold"} margin={3}>
            {children}
        </Typography>
    );
};

export default InfoMessage;
