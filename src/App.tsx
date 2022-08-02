import React from "react";

import "@arcgis/core/assets/esri/themes/light/main.css";
import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "normalize.css";
import { useRoutes } from "react-router-dom";

import { routes } from "@shared/router/routes";

import "./index.css";

const queryClient = new QueryClient();

function App() {
    const element = useRoutes(routes);

    return (
        <QueryClientProvider client={queryClient}>
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                {element}
            </Box>
        </QueryClientProvider>
    );
}

export default App;
