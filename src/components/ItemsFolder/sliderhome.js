import React from 'react';
import content from '../sliderimages';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


function Autoplay() {
	return (
		<div>
			<h2 className='h2-slider'>Ultimas novedades</h2>
            <Slider autoplay={3000}>
	        {content.map((item, index) => (
		<div
			key={index}
			style={{ background: `url('${item.image}') no-repeat center center` }}
		>
		</div>
	))}
</Slider>
		</div>
	);
}

export default Autoplay;