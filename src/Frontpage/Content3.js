import React from 'react';
import surplus1 from "../Images/Surplus1.jpg";
import surplus2 from "../Images/Surplus2.jpeg";
import surplus3 from "../Images/Surplus3.jpeg";
import surplus4 from "../Images/Surplus4.jpg";
import './Content3.css';

export default function Content3() {

	return (

		<div className='thirdpara'>
			<div id="captioned-gallery" className='thrd'>
				<figure className="slider">
					<figure>
						<img src={surplus1} alt='img' />

					</figure>
					<figure>
						<img src={surplus2} alt='img' />
					</figure>
					<figure>
						<img src={surplus3} alt='img' />
					</figure>
					<figure>
						<img src={surplus4} alt='img' />
					</figure>
					<figure>
						<img src={surplus1} alt='img' />
					</figure>

				</figure>
			</div>
			<div className='content3text'>
				<h1 className='h1'>Our Story</h1>
				<p className='pp'>
					In the Global Hunger Index of 2023, India was ranked 111th out of 125 countries, indicating a serious level of hunger. While we believe that no effort of hope and kindness, no matter how small, is ever wasted, Meal Rescue India observed this problem when no one else was attempting to work in this sector, and it acted as a beacon, lighting the way for communities.</p>
				<div className='saying'>मील रेस्क्यू इंडिया की तीन कदम: प्राप्ति, संवर्धन, वितरण।</div>
				<div className='process'>
					<div className='processcard one'>
					<div className='name '><h3>Food Procurement and Acquisition</h3></div>
					</div>
					
					<div className='processcard two'>

					<div className='name'><h3>Food Processing and Packaging</h3></div>
					</div>
					
					<div className='processcard three'>

					<div className='name'><h3>Food Distribution and Outreach</h3></div>
					</div>
				</div>
			</div>
		</div>

	)
}
