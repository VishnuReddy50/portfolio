import React from 'react';
import './About.css';

function About() {
	return (
		<div className="about" id="about">
			<div
				data-aos="fade-up"
				data-aos-duration="1500"
				className="about-div"
			>
				<h1
					data-aos="fade-up"
					data-aos-duration="1500"
				>
					Hello, I'm Vishnu 👋
				</h1>
				<div
					data-aos="fade-up"
					data-aos-duration="1500"
					className="about-details"
				>
					<p
						data-aos="fade-up"
						data-aos-duration="1500"
						className="about-details"
					>
						I'm a Competitive Programmer & Web Developer currently pursuing the 3rd-year of my Under Graduation in Computer Science.
					</p>
					<p
						data-aos="fade-up"
						data-aos-duration="1500"
						className="about-details"
					>
						I’ve done some projects on Web Development using technologies like MongoDB, ExpressJS, ReactJS, NodeJS, HTML5 & CSS.
					</p>
					<p
						data-aos="fade-up"
						data-aos-duration="1500"
						className="about-details"
					>
						I’ve good knowledge on Data Structures & Algorithms. As I have just started my career, I want to practically explore and experience my potential.					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
