import { Link } from 'react-router-dom'
const Sliders = () => {
	return (
		<div>
			{/* <!-- Banner Section --> */}
			<section className='banner-section '>
				<div className='banner-carousel owl-theme owl-carousel'>
					{/* <!-- Slide Item --> */}
					<div className='slide-item'>
						<div
							className='image-layer'
							style={{ backgroundImage: `url(images/main-slider/1.jpg)` }}
						></div>
						<div
							className='icons-layer'
							style={{ backgroundImage: `url(images/main-slider/icons.png)` }}
						></div>
						<div className='auto-container'>
							<div className='content-box'>
								<h1>On-Demand Taxi Services, within reach</h1>
								<div className='btn-box'>
									<Link to='signup' className='theme-btn btn-style-one'>
										<span className='txt'>Book Now</span>
									</Link>
									<Link to='/driver/signup' className='theme-btn btn-style-two'>
										<span className='txt'>Drive with us</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Slide Item --> */}
					<div className='slide-item'>
						<div
							className='icons-layer'
							style={{ backgroundImage: `url(images/main-slider/icons.png)` }}
						></div>
						<div
							className='image-layer'
							style={{ backgroundImage: `url(images/main-slider/1.jpg)` }}
						></div>
						<div className='auto-container'>
							<div className='content-box'>
								<h1>Everything you need, delivered now</h1>

								<div className='btn-box'>
									<Link to='signup' className='theme-btn btn-style-one'>
										<span className='txt'>Start now</span>
									</Link>
									<Link to='riders/signup' className='theme-btn btn-style-two'>
										<span className='txt'>Join our dispatch team</span>
									</Link>
								</div>
								{/* <!-- <a className="need" href="/"><span className="fa fa-angle-right"></span> Need some inspiration?</a> --> */}
							</div>
						</div>
					</div>

					{/* <!-- Slide Item --> */}
					<div className='slide-item'>
						<div
							className='icons-layer'
							style={{ backgroundImage: `url(images/main-slider/icons.png)` }}
						></div>
						<div
							className='image-layer'
							style={{ backgroundImage: `url(images/main-slider/banner.jpg)` }}
						></div>
						<div className='auto-container'>
							<div className='content-box'>
								<h1 className='text-dark'>Discover delicious meals</h1>
								<p className='text-dark'>
									Order delivery from restaurants you love.
								</p>
								<div className='btn-box'>
									<Link to='/food_store' className='theme-btn btn-style-one'>
										<span className='txt'>Order Now</span>
									</Link>
									<Link to='/' className='theme-btn btn-style-two'>
										<span className='txt'>
											Own a restaurant? Partner with us
										</span>
									</Link>
								</div>
								{/* <!-- <a className="need" href="/"><span className="fa fa-angle-right"></span> Need some inspiration?</a> --> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Banner Section --> */}
		</div>
	)
}

export default Sliders
