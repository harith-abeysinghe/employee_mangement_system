import React from "react";

const AddEmployee = () => {
	return (
		<div className="max-w-2xl shadow mx-auto ">
			<div className="px-8 py-4">
				<div className="font-sans font-bold  text-center">
					<h1>Add Employee</h1>
				</div>
				<div className="items-center  h-14 w-full my-4">
					<label className="block text-gray-600 text-sm">First Name</label>
					<input type="text" className="h-10 w-full border mt-2"></input>
				</div>
				<div className="items-center  h-14 w-full my-4">
					<label className="block text-gray-600 text-sm">Last Name</label>
					<input type="text" className="h-10 w-full border mt-2"></input>
				</div>
				<div className="items-center  h-14 w-full my-4">
					<label className="block text-gray-600 text-sm">Email</label>
					<input type="email" className="h-10 w-full border mt-2"></input>
				</div>
				<div className="flex items-center justify-center h-14 w-full my-4 space-x-4">
					<button className="rounded text-white bg-green-400 hover:bg-green-700 px-4 py-2">
						Save
					</button>
					<button className="rounded text-white bg-red-400 hover:bg-red-700 px-4 py-2">
						Clear
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddEmployee;
