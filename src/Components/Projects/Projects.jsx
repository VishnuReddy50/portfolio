import React from 'react';
import './Projects.css';
import Typing from './../../Assets/Typing.png';
import Blog from './../../Assets/Blog.png';
import Weather from './../../Assets/Weather.png';
import Keeper from './../../Assets/Keeper.png';

function Projects({ windowWidth }) {

	const projects = "< Projects 💻 />";

	if (windowWidth > 1200) {
		return (
			<div className="projects" id="projects">
				<div className="project-details">
					<div
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<h1	>{projects}</h1>
					</div>

					<div className="project-cards">
						<div className="project-row" data-aos="fade-up-right">
							<div className="image-scroll">
								<a href="https://github.com/VishnuReddy50/quick_type" target="_blank" rel="noreferrer">
									<img src={Typing} className="image" alt="TypingImage" />
								</a>
							</div>

							<div className="project-card" >
								<h3 data-aos="fade-up"
									data-aos-duration="1000">QuickType</h3>
								<ul>
									<li data-aos="fade-up"
										data-aos-duration="1500">
										Developed a web application where users can check their typing speed.
									</li>
									<li data-aos="fade-up"
										data-aos-duration="2000">
										Used Metaphorpsum API to generate a random paragraph on every render, Act-On scroll library to give the fading effect for the components, a node package for Typewriter - effect and React JS to create components for the application.
									</li>
								</ul>
							</div>

						</div>

						<div className="project-row" data-aos="fade-up-left">
							<div className="project-card">
								<h3 data-aos="fade-up"
									data-aos-duration="1000">Blog Website</h3>
								<ul>
									<li data-aos="fade-up"
										data-aos-duration="1500">
										Developed a website where users can create custom blogs on any topic of their choice.
									</li>
									<li data-aos="fade-up"
										data-aos-duration="2000">
										Implemented routing with the help of ExpressJS and MongoDB was the NoSQL Database of choice. NodeJS was utilised as the Backend runtime environment, Embedded Javascript(EJS) templating was used to create multiple pages using a single template.
									</li>
								</ul>
							</div>
							<div className="image-scroll" >
								<a href="https://github.com/VishnuReddy50/blog" target="_blank" rel="noreferrer">
									<img src={Blog} className="image" alt="BlogImage" />
								</a>
							</div>

						</div>

						<div className="project-row" data-aos="fade-up-right">
							<div className="image-scroll">
								<a href="https://github.com/VishnuReddy50/weather_project" target="_blank" rel="noreferrer">
									<img src={Weather} className="image" alt="WeatherImage" />
								</a>
							</div>

							<div className="project-card">
								<h3 data-aos="fade-up"
									data-aos-duration="1000">Weather App</h3>
								<ul>
									<li data-aos="fade-up"
										data-aos-duration="1500">
										Developed a dynamic weather forecasting application that gives the complete weather information of the selected location.
									</li>
									<li data-aos="fade-up"
										data-aos-duration="2000">
										Used OpenWeatherMap API which gives instant & accurate weather information like temperature, pressure, humidity and wind speed
									</li>
								</ul>

							</div>
						</div>

						<div className="project-row" data-aos="fade-up-left">
							<div className="project-card">
								<h3 data-aos="fade-up"
									data-aos-duration="1000">Keeper App</h3>
								<ul>
									<li data-aos="fade-up"
										data-aos-duration="1500">
										Developed a Keeper Application where users can quickly capture what's on their mind by taking notes and deleting later when done.
									</li>
									<li data-aos="fade-up"
										data-aos-duration="2000">
										Implemented using ReactJS components to create the front end by dividing the whole project into modules for creating, accessing and displaying the notes.
									</li>
								</ul>
							</div>
							<div className="image-scroll" >
								<a href="https://github.com/VishnuReddy50/Keeper_App" target="_blank" rel="noreferrer">
									<img src={Keeper} className="image" alt="KeeperImage" />
								</a>
							</div>

						</div>
					</div>
				</div>
			</div>
		);
	} else if (windowWidth > 800) {
		// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		return (
			<div className="projects3" id="projects">
				<div className="project-details3">
					<div
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<h1	>{projects}</h1>
					</div>

					<div className="project-cards3">
						<div className="cards-row">
							<div className="project-row3" data-aos="fade-up-right">
								<div className="image-scroll3">
									<a href="https://github.com/VishnuReddy50/quick_type" target="_blank" rel="noreferrer">
										<img src={Typing} className="image3" alt="TypingImage" />
									</a>
								</div>

								<div className="project-card3" >
									<h3 data-aos="fade-up"
										data-aos-duration="1000">QuickType</h3>
									<ul>
										<li data-aos="fade-up"
											data-aos-duration="1500">
											Developed a web application where users can check their typing speed.
										</li>
										<li data-aos="fade-up"
											data-aos-duration="2000">
											Used Metaphorpsum API to generate a random paragraph on every render, Act-On scroll library to give the fading effect for the components, a node package for Typewriter - effect and React JS to create components for the application.
										</li>
									</ul>
								</div>
							</div>

							<div className="project-row3" data-aos="fade-up-left">
								<div className="image-scroll3" >
									<a href="https://github.com/VishnuReddy50/blog" target="_blank" rel="noreferrer">
										<img src={Blog} className="image3" alt="BlogImage" />
									</a>
								</div>

								<div className="project-card3">
									<h3 data-aos="fade-up"
										data-aos-duration="1000">Blog Website</h3>
									<ul>
										<li data-aos="fade-up"
											data-aos-duration="1500">
											Developed a website where users can create custom blogs on any topic of their choice.
										</li>
										<li data-aos="fade-up"
											data-aos-duration="2000">
											Implemented routing with the help of ExpressJS and MongoDB was the NoSQL Database of choice. NodeJS was utilised as the Backend runtime environment, Embedded Javascript(EJS) templating was used to create multiple pages using a single template.
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="cards-row">
							<div className="project-row3" data-aos="fade-up-right">
								<div className="image-scroll3">
									<a href="https://github.com/VishnuReddy50/weather_project" target="_blank" rel="noreferrer">
										<img src={Weather} className="image3" alt="WeatherImage" />
									</a>
								</div>

								<div className="project-card3">
									<h3 data-aos="fade-up"
										data-aos-duration="1000">Weather App</h3>
									<ul>
										<li data-aos="fade-up"
											data-aos-duration="1500">
											Developed a dynamic weather forecasting application that gives the complete weather information of the selected location.
										</li>
										<li data-aos="fade-up"
											data-aos-duration="2000">
											Used OpenWeatherMap API which gives instant & accurate weather information like temperature, pressure, humidity and wind speed
										</li>
									</ul>

								</div>
							</div>

							<div className="project-row3" data-aos="fade-up-left">
								<div className="image-scroll3" >
									<a href="https://github.com/VishnuReddy50/Keeper_App" target="_blank" rel="noreferrer">
										<img src={Keeper} className="image3" alt="KeeperImage" />
									</a>
								</div>

								<div className="project-card3">
									<h3 data-aos="fade-up"
										data-aos-duration="1000">Keeper App</h3>
									<ul>
										<li data-aos="fade-up"
											data-aos-duration="1500">
											Developed a Keeper Application where users can quickly capture what's on their mind by taking notes and deleting later when done.
										</li>
										<li data-aos="fade-up"
											data-aos-duration="2000">
											Implemented using ReactJS components to create the front end by dividing the whole project into modules for creating, accessing and displaying the notes.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		return (
			<div className="projects2" id="projects">
				<div className="project-details2">
					<div
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<h1	>{projects}</h1>
					</div>

					<div className="project-cards2">
						<div className="project-row2" data-aos="fade-up-right">
							<a href="https://github.com/VishnuReddy50/quick_type" target="_blank" rel="noreferrer">
								<img src={Typing} className="image2" alt="TypingImage" />
							</a>
							<div className="project-card2">
								<h3 data-aos="fade-up"
									data-aos-duration="1000">QuickType</h3>
								<ul>
									<li data-aos="fade-up"
										data-aos-duration="1500">
										Developed a web application where users can check their typing speed.
									</li>
									<li data-aos="fade-up"
										data-aos-duration="2000">
										Used Metaphorpsum API to generate a random paragraph on every render, Act-On scroll library to give the fading effect for the components, a node package for Typewriter - effect and React JS to create components for the application.
									</li>
								</ul>
							</div>
						</div>

						<div className="project-row2" data-aos="fade-up-left">
							<a href="https://github.com/VishnuReddy50/blog" target="_blank" rel="noreferrer">
								<img src={Blog} className="image2" alt="BlogImage" />
							</a>
							<div className="project-card2">
								<h3 data-aos="fade-up"
									data-aos-duration="1000">Blog Website</h3>
								<ul>
									<li data-aos="fade-up"
										data-aos-duration="1500">
										Developed a website where users can create custom blogs on any topic of their choice.
									</li>
									<li data-aos="fade-up"
										data-aos-duration="2000">
										Implemented routing with the help of ExpressJS and MongoDB was the NoSQL Database of choice. NodeJS was utilised as the Backend runtime environment, Embedded Javascript(EJS) templating was used to create multiple pages using a single template.
									</li>
								</ul>

							</div>

						</div>

						<div className="project-row2" data-aos="fade-up-right">
							<a href="https://github.com/VishnuReddy50/weather_project" target="_blank" rel="noreferrer">
								<img src={Weather} className="image2" alt="WeatherImage" />
							</a>
							<div className="project-card2">
								<h3 data-aos="fade-up"
									data-aos-duration="1000">Weather App</h3>
								<ul>
									<li data-aos="fade-up"
										data-aos-duration="1500">
										Developed a dynamic weather forecasting application that gives the complete weather information of the selected location.
									</li>
									<li data-aos="fade-up"
										data-aos-duration="2000">
										Used OpenWeatherMap API which gives instant & accurate weather information like temperature, pressure, humidity and wind speed
									</li>
								</ul>

							</div>
						</div>

						<div className="project-row2" data-aos="fade-up-left">
							<a href="https://github.com/VishnuReddy50/Keeper_App" target="_blank" rel="noreferrer">
								<img src={Keeper} className="image2" alt="KeeperImage" />
							</a>
							<div className="project-card2">
								<h3 data-aos="fade-up"
									data-aos-duration="1000">Keeper App</h3>
								<ul>
									<li data-aos="fade-up"
										data-aos-duration="1500">
										Developed a Keeper Application where users can quickly capture what's on their mind by taking notes and deleting later when done.
									</li>
									<li data-aos="fade-up"
										data-aos-duration="2000">
										Implemented using ReactJS components to create the front end by dividing the whole project into modules for creating, accessing and displaying the notes.
									</li>
								</ul>
							</div>

						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
