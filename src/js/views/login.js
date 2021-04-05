import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import { Navbar } from "../component/navbar";
import "../../styles/signup.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	//--------------------------------------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA GUARDAR DATOS DEL LOGIN
	//--------------------------------------------------------/
	//Objeto form data almacenará información
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	//Hook boolean para mostrar o no contraseña
	const [shown, setShown] = useState(false);

	// //función que guarda los datos en el estado de registro a medida que son completados,
	// //cambian el estado inicial vacío a los valores
	const changeEmail = e => {
		setEmail(e.target.value);
	};
	const changePassword = e => {
		setPassword(e.target.value);
	};
	const checkLogin = async e => {
		if (email != "" && password != "") {
			let success = await actions.loginUser(email, password);
			e.preventDefault();
			if (success) {
				if (store.token != "") {
					console.log("usuario autenticado");
					history.push("/profile");
				} else {
					alert("usuario no registrado");
				}
			} else {
				alert("no se pueden dejar campos vacíos");
			}
		}
	};
	//función para controlar showpassword
	const switchShown = () => setShown(!shown);

	return (
		<>
			<div className="container fondo-signup ">
				<div className="row">
					<div className="col-md-12">
						<Navbar />
					</div>
				</div>
				<div className="row h-100 d-flex justify-content-center">
					<div className="col-md-12">
						<h1 className="m-3  text-center text-white">Iniciar Sesion</h1>
						<div className="row mb-4 mt-2 d-flex justify-content-center">
							{/* Aquí inicia el formulario */}
							<form action="" name="form1" id="form1">
								<div className="form-row justify-content-center">
									<div className=" col-9">
										<input
											type="text"
											className="form-control mb-3 bg-light border border-warning rounded-pill"
											id="inputEmail"
											placeholder="Correo electrónico..."
											name="email"
											pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
											onChange={changeEmail}
											required
										/>
									</div>

									<div className="d-flex flex-col col-9">
										<input
											type="password"
											className="col-11 form-control mb-3 bg-light border border-warning rounded-pill"
											id="inputPassword"
											pattern="(?=.*\d)(?=.*[a-z]).{8,}" //revisar criterios
											//solicita al menos 1 minúscula, 1 caractér especial, 1 número
											placeholder="Contraseña..."
											name="password1"
											required
											onChange={changePassword}
										/>
										<div className="col-1 btn-light align-self-center mb-3" onClick="">
											<i className="far fa-eye" />
										</div>
									</div>

									<button
										className="btn btn-warning col-6 my-2 my-sm-0 disable"
										disabled=""
										aria-disabled=""
										onClick={checkLogin}>
										Iniciar sesion
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
