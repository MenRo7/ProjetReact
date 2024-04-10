import React from 'react';
import './assets/style/App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import DishDetails from './pages/DishDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="plat/:slug" element={<DishDetails />} />
					<Route path="about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
