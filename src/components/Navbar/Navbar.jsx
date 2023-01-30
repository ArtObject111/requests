import React from "react";
import s from "./Navbar.module.scss"
import RequestsTableContainer from "./RequestsTable/RequestsTableContainer";

const Navbar = () => {
    return (
        <div className={s.nav}>
            <RequestsTableContainer/>
        </div>
    )
}

export default Navbar