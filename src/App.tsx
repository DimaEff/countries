import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CountriesList from "@components/countriesList";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <CountriesList />
            </div>
        </QueryClientProvider>
    );
}

export default App;
