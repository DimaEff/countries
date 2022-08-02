import React from "react";

import { Box } from "@mui/material";

import loader from "@assets/loader.svg";

const FullscreenLoader = () => {
    return (
        <Box
            sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
            }}>
            <img src={loader} alt={"loading..."} />
        </Box>
    );
};

export default FullscreenLoader;
