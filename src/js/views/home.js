import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Navbar } from "../component/navbar";

export const Home = () => (
	<>
		<div className="container-fluid background-home">
			<div className="row">
				<div className="col-md-12 col-sm-12">
					<Navbar />
				</div>
			</div>
			<div className="row botones-home">
				<div className="col-md-6 botones-home justify-content-end">
					<span className="boton3">Entrar</span>
				</div>
				<div className="col-md-6 botones-home">
					<span className="boton4">Registrate</span>
				</div>
			</div>
		</div>
	</>
);
