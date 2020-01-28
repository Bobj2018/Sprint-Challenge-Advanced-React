import React from 'react';
import './App.css';
import Players from './components/Players';
import { useDarkMode } from './hooks/useDarkMode';
import { useInput } from './hooks/useForm';

function App() {
	const [darkMode, setDarkMode] = useDarkMode(false);
	const [search, setSearch, handleSearch] = useInput('');
	const toggleMode = e => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<div className='App'>
			<h1>Women's World Cup</h1>
			<input />
			<button
				data-testid='darkToggleButton'
				onClick={toggleMode}
				className={darkMode ? 'toggle toggled' : 'toggle'}>
				Dark Mode
			</button>
			<Players />
		</div>
	);
}

export default App;
