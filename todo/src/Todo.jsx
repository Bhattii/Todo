import { VscTrash } from 'react-icons/vsc';
function Todo() {
	return (
		<>
			<h1 className="text-2xl">Todo App</h1>

			<div className="text-xl flex gap-10">
				<input
					type="text"
					placeholder="Enter Todo here"
					className="border p-2 rounded"
				/>
				<input
					type="date"
					className="p-2 border rounded"
				/>
				<button className=" px-10 py-2 bg-green-500 rounded-md">
					<VscTrash className="text-4xl" />
				</button>
			</div>
		</>
	);
}

export default Todo;
