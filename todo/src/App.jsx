import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
	return (
		<div className="flex justify-center items-center flex-col gap-10">
			<Todo />
		</div>
	);
}

export default App;
