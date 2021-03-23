import React from "react";
import { Navbar } from "../component/navbar";
import "../../styles/signup.scss";

export const Signup = () => {
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
											onChange=""
											required
										/>
									</div>
									<div className=" col-9">
										<input
											type="text"
											className="form-control mb-3 bg-light border border-warning rounded-pill"
											id="inputAddress"
											name="user_name"
											placeholder="Nombre de usuario..."
											onChange=""
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
											onChange=""
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
											onChange=""
											onBlur="{changePasswordC}"
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
										onClick="">
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
