import React, { useState } from 'react';
import Header from './Header';
import '../styles/home.scss';
import MainContent from './MainContent';
import Footer from './Footer';

const Home = () => {
	return (
		<div className="home">
			<section className="wrapper">
				<Header />
				<MainContent />
				<Footer />
			</section>
		</div>
	);
};

export default Home;
