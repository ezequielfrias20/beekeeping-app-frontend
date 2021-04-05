const BASE_URL = "http://localhost:8080";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			token: "",
			logOutConfirmation: false

			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			loginUser: async (email, password) => {
				let url = BASE_URL + "/login";
				let actions = getActions();
				let store = getStore();
				let login_data = {
					email: email,
					password: password
				};
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(login_data)
				});
				let information = await response.json();
				console.log(information);
				if (response.ok) {
					setStore({ user: information, token: information.jwt });
					sessionStorage.setItem("token", information.jwt);
					sessionStorage.setItem("id", information.id.toString());
					sessionStorage.setItem("logOutConfirmation", JSON.stringify(true));
					sessionStorage.setItem("user", JSON.stringify(information));
					console.log(store.user.id);
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},
			check: async () => {
				let url = BASE_URL + "/seguro";
				let store = getStore();
				let customHeader = new Headers({
					Authorization: "Bearer " + store.user.jwt
				});
				let response = await fetch(url, {
					method: "GET",
					headers: customHeader
				});
				if (response.ok) {
					return true;
				} else {
					setStore({ user: "" });
					return false;
				}
			},
			//Permite guardar en el navegador el token cuando se refresca la pagina
			checking: () => {
				if (sessionStorage.getItem("logOutConfirmation")) {
					setStore({
						user: JSON.parse(sessionStorage.getItem("user")),
						logOutConfirmation: true,
						token: sessionStorage.getItem("token"),
						sidebar: true
					});
				}
			},
			logOut: () => {
				sessionStorage.setItem("token", "");
				sessionStorage.setItem("name", "");
				sessionStorage.setItem("id", "");
				sessionStorage.setItem("logOutConfirmation", "");
				sessionStorage.setItem("user", "");
				setStore({ logOutConfirmation: false, user: {}, token: "" });
			},
			addUser: async data_signup => {
				console.log(data_signup);
				let url = BASE_URL + "/users";
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data_signup) //revisar cómo se llama a estado singup de componente signup.js
				});
				if (response.ok) {
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			}
			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
