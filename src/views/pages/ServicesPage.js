import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
	return (
		<div>
			{/* <!-- Page Title --> */}
			<section
				className='page-title'
				style={{ backgroundImage: `url(images/background/10.jpg)` }}
			>
				{/* <!-- Icons --> */}
				<div className='icons parallax-scene-3'>
					{/* <!-- Icon One --> */}
					<div
						data-depth='0.30'
						className='icon-one parallax-layer'
						style={{ backgroundImage: `url(images/icons/icon-7.png)` }}
					></div>
					{/* <!-- Icon Two --> */}
					<div
						data-depth='0.20'
						className='icon-two parallax-layer'
						style={{ backgroundImage: `url(images/icons/icon-8.png)` }}
					></div>
					{/* <!-- Icon Three --> */}
					<div
						data-depth='0.50'
						className='icon-three parallax-layer'
						style={{ backgroundImage: `url(images/icons/icon-9.png)` }}
					></div>
					{/* <!-- Icon Four --> */}
					<div
						data-depth='0.30'
						className='icon-four parallax-layer'
						style={{ backgroundImage: `url(images/icons/icon-10.png)` }}
					></div>
					{/* <!-- Icon Five --> */}
					<div
						data-depth='0.10'
						className='icon-five parallax-layer'
						style={{ backgroundImage: `url(images/icons/icon-11.png)` }}
					></div>
				</div>
				<div className='auto-container'>
					<h2>Services</h2>
					<div className='text'>The Leading Retailer of Prestige Cars</div>
				</div>
			</section>
			{/* <!-- End Page Title --> */}

			{/* <!-- Sidebar Page Container --> */}
			<div className='sidebar-page-container'>
				<div className='auto-container'>
					<div className='row clearfix'>
						{/* <!--Sidebar Side--> */}
						<div className='sidebar-side col-lg-3 col-md-12 col-sm-12'>
							<aside className='sidebar'>
								{/* <!-- Select Car --> */}
								<div className='sidebar-widget select-car'>
									<div className='widget-content'>
										<h4>New Cars For Sale</h4>

										{/* <!-- Default Form --> */}
										<div className='default-form'>
											<form method='post' action=''>
												{/* <!-- Form Group --> */}
												<div className='form-group'>
													<select className='custom-select-box'>
														<option>Makes</option>
														<option>01</option>
														<option>02</option>
														<option>03</option>
														<option>04</option>
													</select>
												</div>

												{/* <!-- Form Group --> */}
												<div className='form-group'>
													<select className='custom-select-box'>
														<option>Any Model</option>
														<option>2015</option>
														<option>2016</option>
														<option>2019</option>
														<option>2020</option>
													</select>
												</div>

												{/* <!-- Form Group --> */}
												<div className='form-group'>
													<select className='custom-select-box'>
														<option>Min price</option>
														<option>1000 to 10000</option>
														<option>10000 to 100000</option>
														<option>100000 to 100000</option>
													</select>
												</div>

												{/* <!-- Form Group --> */}
												<div className='form-group'>
													<select className='custom-select-box'>
														<option>Max price</option>
														<option>1000 to 10000</option>
														<option>10000 to 100000</option>
														<option>100000 to 100000</option>
													</select>
												</div>

												{/* <!-- Form Group --> */}
												<div className='form-group'>
													<select className='custom-select-box'>
														<option>Year</option>
														<option>1990</option>
														<option>2000</option>
														<option>2010</option>
														<option>2020</option>
													</select>
												</div>

												<div className='form-group'>
													<button
														type='submit'
														className='theme-btn btn-style-one'
													>
														<span className='txt'>Search used cars</span>
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</aside>
						</div>

						{/* <!--Content Side--> */}
						<div className='content-side col-lg-9 col-md-12 col-sm-12'>
							<div className='our-services'>
								<div className='row clearfix'>
									{/* <!-- Services Block / Style Two --> */}
									<div className='services-block style-two col-lg-6 col-md-6 col-sm-12'>
										<div
											className='inner-box wow fadeInLeft'
											data-wow-delay='0ms'
											data-wow-duration='1500ms'
										>
											<div className='icon-box'>
												<span className='icon flaticon-brake-disc'></span>
											</div>
											<h4>
												<Link to='service.html'>Brake Inspection</Link>
											</h4>
											<div className='text'>
												All our cars come from main dealers and go through
												rigorous checks and tests before they arrive at your
												door
											</div>
										</div>
									</div>

									{/* <!-- Services Block / Style Two --> */}
									<div className='services-block style-two col-lg-6 col-md-6 col-sm-12'>
										<div
											className='inner-box wow fadeInRight'
											data-wow-delay='150ms'
											data-wow-duration='1500ms'
										>
											<div className='icon-box'>
												<span className='icon flaticon-fan'></span>
											</div>
											<h4>
												<Link to='service.html'>Cooling system</Link>
											</h4>
											<div className='text'>
												All our cars come from main dealers and go through
												rigorous checks and tests before they arrive at your
												door
											</div>
										</div>
									</div>

									{/* <!-- Services Block / Style Two --> */}
									<div className='services-block style-two col-lg-6 col-md-6 col-sm-12'>
										<div
											className='inner-box wow fadeInLeft'
											data-wow-delay='0ms'
											data-wow-duration='1500ms'
										>
											<div className='icon-box'>
												<span className='icon flaticon-car-1'></span>
											</div>
											<h4>
												<Link to='service.html'>Air conditioner</Link>
											</h4>
											<div className='text'>
												All our cars come from main dealers and go through
												rigorous checks and tests before they arrive at your
												door
											</div>
										</div>
									</div>

									{/* <!-- Services Block / Style Two --> */}
									<div className='services-block style-two col-lg-6 col-md-6 col-sm-12'>
										<div
											className='inner-box wow fadeInRight'
											data-wow-delay='150ms'
											data-wow-duration='1500ms'
										>
											<div className='icon-box'>
												<span className='icon flaticon-car-service'></span>
											</div>
											<h4>
												<Link to='service.html'>Oil change</Link>
											</h4>
											<div className='text'>
												All our cars come from main dealers and go through
												rigorous checks and tests before they arrive at your
												door
											</div>
										</div>
									</div>

									{/* <!-- Services Block / Style Two --> */}
									<div className='services-block style-two col-lg-6 col-md-6 col-sm-12'>
										<div
											className='inner-box wow fadeInLeft'
											data-wow-delay='0ms'
											data-wow-duration='1500ms'
										>
											<div className='icon-box'>
												<span className='icon flaticon-car-4'></span>
											</div>
											<h4>
												<Link to='service.html'>Courtesy cars available</Link>
											</h4>
											<div className='text'>
												All our cars come from main dealers and go through
												rigorous checks and tests before they arrive at your
												door
											</div>
										</div>
									</div>

									{/* <!-- Services Block / Style Two --> */}
									<div className='services-block style-two col-lg-6 col-md-6 col-sm-12'>
										<div
											className='inner-box wow fadeInRight'
											data-wow-delay='150ms'
											data-wow-duration='1500ms'
										>
											<div className='icon-box'>
												<span className='icon flaticon-car-3'></span>
											</div>
											<h4>
												<Link to='service.html'>Car servicingr wash</Link>
											</h4>
											<div className='text'>
												All our cars come from main dealers and go through
												rigorous checks and tests before they arrive at your
												door
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Counter Section --> */}
			<section className='counter-section style-two'>
				<div className='auto-container'>
					<div className='row clearfix'>
						{/* <!-- Counter Column --> */}
						<div className='counter-column col-lg-6 col-md-12 col-sm-12'>
							<div className='inner-column'>
								{/* <!-- Fact Counter --> */}
								<div className='fact-counter'>
									<div className='row clearfix'>
										{/* <!--Column--> */}
										<div className='column counter-column col-lg-4 col-md-4 col-sm-12'>
											<div
												className='inner wow fadeInLeft'
												data-wow-delay='0ms'
												data-wow-duration='1500ms'
											>
												<div className='content'>
													<div className='icon flaticon-medal-1'></div>
													<div className='counter-title'>Get awards</div>
													<div className='count-outer count-box'>
														<span
															className='count-text'
															data-speed='4000'
															data-stop='315'
														>
															0
														</span>
													</div>
												</div>
											</div>
										</div>

										{/* <!--Column--> */}
										<div className='column counter-column col-lg-4 col-md-4 col-sm-12'>
											<div
												className='inner wow fadeInLeft'
												data-wow-delay='300ms'
												data-wow-duration='1500ms'
											>
												<div className='content'>
													<div className='icon flaticon-sold'></div>
													<div className='counter-title'>
														Sold car per month
													</div>
													<div className='count-outer count-box alternate'>
														<span
															className='count-text'
															data-speed='200'
															data-stop='1'
														>
															0
														</span>
														K
													</div>
												</div>
											</div>
										</div>

										{/* <!--Column--> */}
										<div className='column counter-column col-lg-4 col-md-4 col-sm-12'>
											<div
												className='inner wow fadeInLeft'
												data-wow-delay='600ms'
												data-wow-duration='1500ms'
											>
												<div className='content'>
													<div className='icon flaticon-car'></div>
													<div className='counter-title'>Total barnds</div>
													<div className='count-outer count-box'>
														<span
															className='count-text'
															data-speed='3000'
															data-stop='20'
														>
															0
														</span>
														+
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- Content Column --> */}
						<div className='content-column col-lg-6 col-md-12 col-sm-12'>
							<div className='inner-column'>
								<div className='text'>
									<p>
										Along with 1000s of cars to choose from, you can apply for
										finance online and value your existing car all from the
										comfort of your favourite armchair
									</p>
									<p>
										In line with our commitment to treating customers fairly,
										you can find more information about Charles Hurst complaints
										policy here
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Counter Section --> */}
		</div>
	)
}

export default Services
