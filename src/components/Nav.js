import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-row">
                <div className="nav-item">
                    <NavLink to="/">Home</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/popular">Popular</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/battle">Battle</NavLink>
                </div>
            </div>
        </nav>
    );
};
