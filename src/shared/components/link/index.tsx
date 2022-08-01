import React from "react";

import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

interface LinkProps {
    to: string;
    type?: "link" | "button";
}

const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({ children, to, type = "link" }) => {
    const navigate = useNavigate();

    if (type === "button") {
        return <Button onClick={() => navigate(to)}>{children}</Button>;
    }

    return <NavLink to={to}>{children}</NavLink>;
};

export default Link;
