import React from 'react';
import './assets/style/App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import DishDetails from './pages/DishDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="plat/:slug" element={<DishDetails />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
