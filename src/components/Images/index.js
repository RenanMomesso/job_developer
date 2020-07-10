import React from 'react';


import './style.css'

// import { Container } from './styles';

function Images() {

	


  return (
    <ul className="gallery_box">
	<li>
		<a href="#0"><img className="img_images" alt="img_start" style={{marginTop:"-190px"}} src="/assets/rp1.jpg"/>
		<div className="box_data">
			<span>Social</span>
		</div></a>
	</li>
		<li>
		<a href="#0"><img className="img_images" alt="img_start" style={{marginTop:"-70px"}} src="/assets/r2.jpg"/>
		<div className="box_data">
			<span>Ravi Singh</span>
		</div></a>
	</li>
		<li>
		<a href="#0"><img className="img_images" alt="img_start" style={{marginTop:"-100px"}} src="/assets/r3.jpg"/>
		<div className="box_data">
			<span>White wall</span>
		</div></a>
	</li>
			<li>
		<a href="#0"><img className="img_images" alt="img_start" style={{marginTop:"-50px"}} src="/assets/r4.jpg"/>
		<div className="box_data">
			<span>Green Tree</span>
		</div></a>
	</li>
			<li style={{position: "relative",
    top:" -134px"}}>
		<a href="#0"><img  className="img_images" alt="img_start" src="/assets/r5.jpg"/>
		<div className="box_data">
			<span>Blue</span>
		</div></a>
	</li>
			<li>
		<a href="#0"><img className="img_images" alt="img_start" style={{marginTop:"20px"}} src="/assets/roupa1.jpg"/>
		<div className="box_data">
			<span>Ravi</span>
		</div></a>
	</li>
	
</ul>
    )
}

export default Images;