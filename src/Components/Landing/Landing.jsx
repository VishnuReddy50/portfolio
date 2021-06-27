import React from 'react';
import './Landing.css';

function Landing({ windowWidth }) {


	if (windowWidth > 1270) {
		return (
			<div className="landing" id="landing">
				<div className="typewriter">
					<div className="typewriter-text">
						“ Give a man a program, frustrate him for a day.<br />
						Teach a man to program, frustrate him for a lifetime. ”<br />
						<p />
						<pre>                                  --Waseem Latif</pre>
					</div>

				</div>
			</div>

		);
	} else {
		return (
			<div className="landing" id="landing">
				<div className="quote">
					“ People don't care about what you say,<br />
					they care about what you build. ”<br />
					<p />
					<pre>              --Mark Zuckerberg</pre>
				</div>
			</div>

		);
	}

}

export default Landing;
