import React, { Fragment, useContext, useEffect, useState } from "react";
import { Navbar } from "../component/navbar";
import "../../styles/signup.scss";
import { Context } from "../store/appContext.js";
import { useHistory } from "react-router-dom";

export const Signup = () => {
	//Declaración de funciones principales
	//--------------------------------------------------------/
	//usa Store y actions del contexto
	const { store, actions } = useContext(Context);
	//--------------------------------------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA GUARDAR DATOS DEL USUARIO
	//--------------------------------------------------------/
	//Objeto form data almacenará información
	const history = useHistory();
	const formData = {
		email: "",
		name: "",
		password: ""
	};
	const [signup, setSignup] = useState(formData);

	//Hook estado para guardar info de inputs
	//función que guarda los datos en el estado de registro a medida que son completados,
	//cambian el estado inicial vacío a los valores
	function changeSignUp(e) {
		setSignup({
			...signup,
			[e.target.name]: e.target.value
		});
		e.preventDefault();
	}

	const saveSignUp = async e => {
		e.preventDefault();
		console.log(signup);
		let success = await actions.addUser(signup);
		if (success) {
			console.log("Su usuario ha sido creado");
			history.push("/login");
		} else {
			console.log("Su usuario no pudo ser creado");
		}
	};

	//--------------------------------------------------------/---------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA VALIDAR CONTRASEÑAS COINCIDENTES y MOSTRAR OCULTAR PASSWORD
	//--------------------------------------------------------/---------------------------/
	// //Hook de password y confirmación de password
	const [passwordOriginal, setPasswordOriginal] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	//Hook boolean para mostrar o no contraseña
	const [shown, setShown] = useState(false);
	// //Función para guardar información de contraseñas
	const changePasswordO = e => {
		setPasswordOriginal(e.target.value);
		e.preventDefault();
	};
	const changePasswordC = e => {
		setPasswordConfirm(e.target.value);
		e.preventDefault();
	};

	// //Estado del botón de registro
	const [buttonActive, setButtonActive] = useState(true);
	//manejar evento de presionar enter en password y validar contraseñas
	useEffect(
		() => {
			const validatePassword = () => {
				if (passwordOriginal === "" && passwordConfirm === "") {
					setButtonActive(true);
				}
				if (passwordOriginal === passwordConfirm) {
					setButtonActive(false); //cambia estado del botón a booleano True
				} else {
					form1.inputPasswordConfirm.value = ""; //limpia campos
					form1.inputPassword.value = ""; //limpia campos
					form1.inputPassword.focus(); //posiciona de nuevo sobre password
					setButtonActive(true); //cambia estado del botón a booleano False
					alert("La contraseña no coincide");
				}
			};
			validatePassword();
		},
		[passwordConfirm]
	);
	//Función controladora de mostrar contraseña
	const switchShown = () => setShown(!shown);

	//--------------------------------------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA BUSCAR PAÍS EN API
	//--------------------------------------------------------/
	//enlace de API

	//Hook para guardar la búsqueda

	//Función para búsqueda del cliente de un país

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
						<h1 className="m-3  text-center text-white">Registro</h1>
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
											onChange={changeSignUp}
											required
										/>
									</div>
									<div className=" col-9">
										<input
											type="text"
											className="form-control mb-3 bg-light border border-warning rounded-pill"
											id="inputAddress"
											name="name"
											placeholder="Nombre de usuario..."
											onChange={changeSignUp}
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
											onChange={changePasswordO}
										/>
										<div className="col-1 btn align-self-center mb-3" onClick="">
											<i className="far fa-eye icon" />
										</div>
									</div>
									<div className="d-flex flex-col col-9">
										<input
											type="password"
											className="col-11 form-control mb-3 bg-light border border-warning rounded-pill"
											id="inputPasswordConfirm"
											placeholder="Confirmar contraseña..."
											name="password"
											onChange={changeSignUp}
											onBlur={changePasswordC}
											required
										/>
										<div className="col-1 btn align-self-center mb-3" onClick="">
											{<i className="far fa-eye" />}
										</div>
									</div>

									<button
										className="btn btn-warning col-6 my-2 my-sm-0 disable"
										disabled=""
										aria-disabled=""
										onClick={saveSignUp}>
										Registrar
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
