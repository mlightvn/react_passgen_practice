import React from 'react'

export default function Footer() {

	return (
		<footer>
			<div className="container">
				<div className="row">
					Author:&nbsp;<a href="https://coxanh.coupon-pon.net/about" target="_blank" rel="noopener noreferrer" >Nguyen Ngoc Nam</a>
				</div>
				<div className="row">
					Social:&nbsp;
					<a href="https://www.linkedin.com/in/nguyenngocnam/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-linkedin"></i> LinkedIn</a>
					&nbsp;|&nbsp;
					<a href="http://stackoverflow.com/users/6351894/ngoc-nam" target="_blank" rel="noopener noreferrer" ><span className="fab fa-stack-overflow"></span> StackOverFlow</a>
					&nbsp;|&nbsp;
					<a href="https://github.com/namtenten" target="_blank" rel="noopener noreferrer" ><span className="fab fa-github"></span> GitHub</a>
				</div>
			</div>
		</footer>
	)
}
