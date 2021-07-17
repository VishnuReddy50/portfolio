import React from 'react';
import './Projects.css';
import News from './../../Assets/News.png';
import Typing from './../../Assets/Typing.png';
import Blog from './../../Assets/Blog.png';
import Weather from './../../Assets/Weather.png';

function Projects({ windowWidth }) {

	const projects = "< Projects 💻 />";

	if (windowWidth > 1200) {
		return (
			<div className="projects" id="projects">
				<div className="project-details">
					<div>
						<h1	>{projects}</h1>
					</div>

					<div className="project-cards">
						<div className="cards-row">
							<div className="project-card" data-aos="fade-up-right">
								<a href="https://github.com/VishnuReddy50/newsbay" target="_blank" rel="noreferrer">
									<img src={News} alt="TypingImage" />
									<h3>NewsBay</h3>
									<ul>
										<li>
											Developed a real-time Online News Portal that tracks all the information from all the major news categories like
											politics, sports, technology, science, sports & business. It also provides a searching facility based on a keyword
											with a very lightweight and simple interface.
										</li>
										<li>
											Used Google News API to gather the information from different news sources based on the category and
											popularity, developed with react routing to navigate to the search page without refreshing.
										</li>
									</ul>
								</a>
							</div>


							<div className="project-card" data-aos="fade-up-left">
								<a href="https://github.com/VishnuReddy50/quick_type" target="_blank" rel="noreferrer">
									<img src={Typing} alt="TypingImage" />
									<h3>QuickType</h3>
									<ul>
										<li>
											Developed a web application where users can check their typing speed in words per minute(WPM) to improve the typing skills.
										</li>
										<li>
											Used Metaphorpsum API to generate a random paragraph on every render, Act-On scroll library to give the fading effect for the components, a node package for Typewriter - effect and React JS to create components for the application.
										</li>
									</ul>
								</a>
							</div>
						</div>

						<div className="cards-row">

							<div className="project-card" data-aos="fade-up-right">
								<a href="https://github.com/VishnuReddy50/blog" target="_blank" rel="noreferrer">
									<img src={Blog} className="image3" alt="BlogImage" />
									<h3>Blog Website</h3>
									<ul>
										<li>
											Developed a website where users can create custom blogs on any topic of their choice.
										</li>
										<li>
											Implemented routing with the help of ExpressJS and MongoDB was the NoSQL Database of choice. NodeJS was utilised as the Backend runtime environment, Embedded Javascript(EJS) templating was used to create multiple pages using a single template.
										</li>
									</ul>
								</a>
							</div>


							<div className="project-card" data-aos="fade-up-left">
								<a href="https://github.com/VishnuReddy50/weather_project" target="_blank" rel="noreferrer">
									<img src={Weather} alt="WeatherImage" />
									<h3>Weather App</h3>
									<ul>
										<li>
											Developed a dynamic weather forecasting application that gives the complete weather information of the selected location.
										</li>
										<li>
											Used OpenWeatherMap API which gives instant & accurate weather information like temperature, pressure, humidity and wind speed
										</li>
									</ul>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else if (windowWidth > 700) {
		// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		return (
			<div className="projects1" id="projects">
				<div className="project-details1">
					<div>
						<h1	>{projects}</h1>
					</div>

					<div className="project-cards1">
						<div className="cards-row1">
							<div className="project-card1" data-aos="fade-up-right">
								<a href="https://github.com/VishnuReddy50/newsbay" target="_blank" rel="noreferrer">
									<img src={News} alt="NewsImage" />
									<h3>NewsBay</h3>
									<ul>
										<li>
											Developed a real-time Online News Portal that tracks all the information from all the major news categories like
											politics, sports, technology, science, sports & business. It also provides a searching facility based on a keyword
											with a very lightweight and simple interface.
										</li>
										<li>
											Used Google News API to gather the information from different news sources based on the category and
											popularity, developed with react routing to navigate to the search page without refreshing.
										</li>
									</ul>
								</a>
							</div>


							<div className="project-card1" data-aos="fade-up-left">
								<a href="https://github.com/VishnuReddy50/quick_type" target="_blank" rel="noreferrer">
									<img src={Typing} alt="TypingImage" />
									<h3>QuickType</h3>
									<ul>
										<li>
											Developed a web application where users can check their typing speed in words per minute(WPM) to improve the typing skills.
										</li>
										<li>
											Used Metaphorpsum API to generate a random paragraph on every render, Act-On scroll library to give the fading effect for the components, a node package for Typewriter - effect and React JS to create components for the application.
										</li>
									</ul>
								</a>
							</div>
						</div>

						<div className="cards-row1">

							<div className="project-card1" data-aos="fade-up-right">
								<a href="https://github.com/VishnuReddy50/blog" target="_blank" rel="noreferrer">
									<img src={Blog} className="image3" alt="BlogImage" />
									<h3>Blog Website</h3>
									<ul>
										<li>
											Developed a website where users can create custom blogs on any topic of their choice.
										</li>
										<li>
											Implemented routing with the help of ExpressJS and MongoDB was the NoSQL Database of choice. NodeJS was utilised as the Backend runtime environment, Embedded Javascript(EJS) templating was used to create multiple pages using a single template.
										</li>
									</ul>
								</a>
							</div>


							<div className="project-card1" data-aos="fade-up-left">
								<a href="https://github.com/VishnuReddy50/weather_project" target="_blank" rel="noreferrer">
									<img src={Weather} alt="WeatherImage" />
									<h3>Weather App</h3>
									<ul>
										<li>
											Developed a dynamic weather forecasting application that gives the complete weather information of the selected location.
										</li>
										<li>
											Used OpenWeatherMap API which gives instant & accurate weather information like temperature, pressure, humidity and wind speed
										</li>
									</ul>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="projects2" id="projects">
				<div className="project-details2">
					<div>
						<h1	>{projects}</h1>
					</div>

					<div className="project-cards2">
						<div className="cards-row2">
							<div className="project-card2" data-aos="fade-up-right">
								<a href="https://github.com/VishnuReddy50/newsbay" target="_blank" rel="noreferrer">
									<img src={News} alt="TypingImage" />
									<h3>NewsBay</h3>
									<ul>
										<li>
											Developed a real-time Online News Portal that tracks all the information from all the major news categories like
											politics, sports, technology, science, sports & business. It also provides a searching facility based on a keyword
											with a very lightweight and simple interface.
										</li>
										<li>
											Used Google News API to gather the information from different news sources based on the category and
											popularity, developed with react routing to navigate to the search page without refreshing.
										</li>
									</ul>
								</a>
							</div>


							<div className="project-card2" data-aos="fade-up-left">
								<a href="https://github.com/VishnuReddy50/quick_type" target="_blank" rel="noreferrer">
									<img src={Typing} alt="TypingImage" />
									<h3>QuickType</h3>
									<ul>
										<li>
											Developed a web application where users can check their typing speed in words per minute(WPM) to improve the typing skills.
										</li>
										<li>
											Used Metaphorpsum API to generate a random paragraph on every render, Act-On scroll library to give the fading effect for the components, a node package for Typewriter - effect and React JS to create components for the application.
										</li>
									</ul>
								</a>
							</div>
						</div>

						<div className="cards-row2">
							<div className="project-card2" data-aos="fade-up-right">
								<a href="https://github.com/VishnuReddy50/blog" target="_blank" rel="noreferrer">
									<img src={Blog} className="image3" alt="BlogImage" />
									<h3>Blog Website</h3>
									<ul>
										<li>
											Developed a website where users can create custom blogs on any topic of their choice.
										</li>
										<li>
											Implemented routing with the help of ExpressJS and MongoDB was the NoSQL Database of choice. NodeJS was utilised as the Backend runtime environment, Embedded Javascript(EJS) templating was used to create multiple pages using a single template.
										</li>
									</ul>
								</a>
							</div>


							<div className="project-card2" data-aos="fade-up-left">
								<a href="https://github.com/VishnuReddy50/weather_project" target="_blank" rel="noreferrer">
									<img src={Weather} alt="WeatherImage" />
									<h3>Weather App</h3>
									<ul>
										<li>
											Developed a dynamic weather forecasting application that gives the complete weather information of the selected location.
										</li>
										<li>
											Used OpenWeatherMap API which gives instant & accurate weather information like temperature, pressure, humidity and wind speed
										</li>
									</ul>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
