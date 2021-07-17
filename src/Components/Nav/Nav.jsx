import React from 'react';
import './Nav.css';

function Nav({ windowWidth }) {

	const name = "< Vishnu_Reddy />";
	const about = "< About />";
	const skills = "< Skills />";
	const work = "< Work />";
	const contact = "< Contact />";

	if (windowWidth > 900) {
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("nav").style.top = "0";
			} else {
				document.getElementById("nav").style.top = "-100%";
			}
			prevScrollpos = currentScrollPos;
		}
	}

	return (
		<div className="nav" id="nav">
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
