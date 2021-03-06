import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="fill">
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Downloads</a>
				</li>
				<li>
					<a href="/login">Iniciar Sesión</a>
				</li>
				<li>
					<a href="signup">Regístrate</a>
				</li>
			</ul>
		</nav>
	);
};
