import React from 'react';
import './Skills.css';
import cpp from './../../Assets/C++.png';
import python from './../../Assets/Python.png';
import javascript from './../../Assets/Javascript.png';
import mongo from './../../Assets/Mongo.png';
import express from './../../Assets/Express.png';
import react from './../../Assets/React.png';
import node from './../../Assets/Node.png';
import html from './../../Assets/HTML.png';
import css from './../../Assets/CSS.png';

function Skills({ windowWidth }) {
	const technologies = "< Technologies 🛠️ />"
	if (windowWidth > 900) {
		return (
			<div className="skills" id="skills">
				<div className="skills-details">
					<div
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<h1	>{technologies}</h1>
					</div>

					<div className="logos">
						<div
							data-aos="fade-right"
							data-aos-offset="300"
							data-aos-easing="ease-in-sine"
							className="logos-3"
						>
							<img src={cpp} alt="C++" />
							<img src={python} alt="Python" />
							<img src={javascript} alt="Javascript" />
						</div>

						<div
							data-aos="fade-left"
							data-aos-offset="300"
							data-aos-easing="ease-in-sine"
							className="logos-3"
						>
							<img src={mongo} alt="Mongo" />
							<img src={express} alt="Express" />
							<img src={react} alt="React" />
						</div>

						<div
							data-aos="fade-down"
							className="logos-3"
						>
							<img src={node} alt="Node" />
							<img src={html} alt="HTML" />
							<img src={css} alt="CSS" />
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="skills2" id="skills">
				<div className="skills-details2">
					<div
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<h1	>{technologies}</h1>
					</div>

					<div className="logos2">
						<div
							data-aos="fade-right"
							data-aos-offset="300"
							data-aos-easing="ease-in-sine"
							className="logos-32"
						>
							<img src={cpp} alt="C++" />
							<img src={python} alt="Python" />
							<img src={javascript} alt="Javascript" />
						</div>

						<div
							data-aos="fade-right"
							data-aos-offset="300"
							data-aos-easing="ease-in-sine"
							className="logos-32"
						>
							<img src={mongo} alt="Mongo" />
							<img src={express} alt="Express" />
							<img src={react} alt="React" />
						</div>

						<div
							data-aos="fade-down"
							className="logos-32"
						>
							<img src={node} alt="Node" />
							<img src={html} alt="HTML" />
							<img src={css} alt="CSS" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
