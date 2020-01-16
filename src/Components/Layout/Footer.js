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

				<div className="row">
					Donate:&nbsp;
{/*
					<a href="https://www.paypal.me/rakujin" target="_blank" rel="opener" ><i className="fab fa-cc-paypal"></i></a>
*/}
				</div>


				<div className="row">
					<div className="col-md-3 text-right">
						<i className="fab fa-cc-paypal"></i>
					</div>
					<div className="col-md-6">
						<a href="https://www.paypal.me/rakujin" target="_blank" rel="opener" >https://www.paypal.me/rakujin</a>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 text-right">
						<i className="fab fa-bitcoin"></i>
					</div>
					<div className="col-md-6">
						<input className="form-control" value="3GQE8CxYdwbpH7nxJ5kbdZE2esZPr2mgsh" readOnly="readOnly" />
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 text-right">
						Ethereum
					</div>
					<div className="col-md-6">
						<input className="form-control" value="0xe2C91CD64AD8c5f1ab06B4C9dbdeB57ba2248bcF" readOnly="readOnly" />
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 text-right">
						BitCoin Cash
					</div>
					<div className="col-md-6">
						<input className="form-control" value="33N6vACCDNRpNVhanqwTD2evxcLgz1h21H" readOnly="readOnly" />
					</div>
				</div>

			</div>
		</footer>
	)
}
