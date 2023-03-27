import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from "reactstrap";

const Navigation = () => {
    return (
        <div>
            <Navbar dark color="dark">
                <div className="container" >
                    <NavbarBrand>RAKTIM RESTURENT</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
}
export default Navigation;