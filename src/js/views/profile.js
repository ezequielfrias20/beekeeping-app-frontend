import React from "react";
import { Navbar1 } from "../component/navbar1";
import EnhancedTable from "../component/table";

export const Profile = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row h-100">
					<div className="col-md-12 col-sm-12 ">
						<Navbar1 />
					</div>
				</div>
				<div className="row h-100 pt-5 mt-5 ">
					<div className="col-md-12 col-sm-12 ">
						<EnhancedTable />
					</div>
				</div>
			</div>
		</>
	);
};
