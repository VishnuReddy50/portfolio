import React from 'react';
import './Connect.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Connect({ windowWidth }) {

	const connect = "< Connect 🔗 />";

	if (windowWidth > 1200) {
		return (
			<div className="connect" id="connect">
				<div className="connect-details">
					<div>
						<h1>{connect}</h1>
					</div>
					<div className="logo-details">
						<div
							data-aos="zoom-in-up"
							data-aos-duration="1500"
							className="logo-row"
						>
							<a href="https://twitter.com/cvishnureddy50" target="_blank" rel="noreferrer">
								<TwitterIcon className="icon" style={{ fontSize: 120 }} />
							</a>
							<a href="https://github.com/VishnuReddy50" target="_blank" rel="noreferrer">
								<GitHubIcon className="icon" style={{ fontSize: 120 }} />
							</a>
						</div>

						<div
							data-aos="zoom-in-up"
							data-aos-duration="1500"
							className="logo-row"
						>
							<a href="https://www.instagram.com/vishnu_reddy_50/" target="_blank" rel="noreferrer">
								<InstagramIcon className="icon" style={{ fontSize: 120 }} />
							</a>
							<a href="https://www.linkedin.com/in/vishnu-vardhan-reddy-chitte-7bb83a177/" target="_blank" rel="noreferrer">
								<LinkedInIcon className="icon" style={{ fontSize: 120 }} />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="connect2" id="connect">
				<div className="connect-details2"
				>
					<div>
						<h1>{connect}</h1>
					</div>
					<div className="logo-details2">
						<div
							data-aos="zoom-in-up"
							data-aos-duration="1500"
							className="logo-row2"
						>
							<a href="https://twitter.com/cvishnureddy50" target="_blank" rel="noreferrer">
								<TwitterIcon className="icon" style={{ fontSize: 90 }} />
							</a>
							<a href="https://github.com/VishnuReddy50" target="_blank" rel="noreferrer">
								<GitHubIcon className="icon" style={{ fontSize: 90 }} />
							</a>
						</div>

						<div
							data-aos="zoom-in-up"
							data-aos-duration="1500"
							className="logo-row2"
						>
							<a href="https://www.instagram.com/vishnu_reddy_50/" target="_blank" rel="noreferrer">
								<InstagramIcon className="icon" style={{ fontSize: 90 }} />
							</a>
							<a href="https://www.linkedin.com/in/vishnu-vardhan-reddy-chitte-7bb83a177/" target="_blank" rel="noreferrer">
								<LinkedInIcon className="icon" style={{ fontSize: 90 }} />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Connect;
