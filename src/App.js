import React from 'react';
import './assets/style/App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<main>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</main>
		</>
	);
}

export default App;
