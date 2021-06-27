import React from 'react';
import './Nav.css';

function Nav() {

	const name = "< Vishnu_Reddy />";
	const about = "< About />";
	const skills = "< Skills />";
	const work = "< Work />";
	const contact = "< Contact />";

	return (
		<div className="nav">
			<div className="navTitle">
				<a href="#landing">{name}</a>
			</div>

			<div className="navLinks link-background">
				<a href="#about" className="left">{about}</a>
				<a href="#skills" className="left">{skills}</a>
				<a href="#projects" className="left">{work}</a>
				<a href="#connect" className="left">{contact}</a>
			</div>
		</div>

	);

}

export default Nav;
