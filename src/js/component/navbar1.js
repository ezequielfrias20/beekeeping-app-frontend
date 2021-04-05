import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar1 = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="fill">
			<ul>
				<li>
					<a href="#">Agregar una Venta</a>
				</li>
				<li>
					<a href="/" onClick={actions.logOut}>
						Cerrar Sesión
					</a>
				</li>
			</ul>
		</nav>
	);
};
