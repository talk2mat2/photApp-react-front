import React from 'react'

const Blog = () => {
	return (
		<div>
			{/* <!-- Page Title --> */}
			<section
				class='page-title'
				style={{ backgroundImage: `url(images/background/10.jpg)` }}
			>
				{/* <!-- Icons --> */}
				<div class='icons parallax-scene-3'>
					{/* <!-- Icon One --> */}
					<div
						data-depth='0.30'
						class='icon-one parallax-layer'
						style={{ backgroundImage: `url(images/icons/icon-7.png)` }}
					></div>
					{/* <!-- Icon Two --> */}
					<div
						data-depth='0.20'
						class='icon-two parallax-layer'
						style={{ backgroundImage: `url(images/icons/icon-8.png)` }}
					></div>
					{/* <!-- Icon Three --> */}
					<div
						data-depth='0.50'
						class='icon-three parallax-layer'
						style={{ backgroundImage: `url(images/icons/icon-9.png)` }}
					></div>
					{/* <!-- Icon Four --> */}
					<div
						data-depth='0.30'
						class='icon-four parallax-layer'
						style={{ backgroundImage: `url(images/icons/icon-10.png)` }}
					></div>
					{/* <!-- Icon Five --> */}
					<div
						data-depth='0.10'
						class='icon-five parallax-layer'
						style={{ backgroundImage: `url(images/icons/icon-11.png)` }}
					></div>
				</div>
				<div class='auto-container'>
					<h2>Blog Grid</h2>
					<div class='text'>The Leading Retailer of Prestige Cars</div>
				</div>
			</section>
			{/* <!-- End Page Title --> */}

			{/* <!-- Sidebar Page Container --> */}
			<div class='sidebar-page-container'>
				{/* <!-- Icons --> */}
				<div class='news-icons'>
					{/* <!-- Icon One --> */}
					<div class='icon-one'></div>
					{/* <!-- Icon Two --> */}
					<div class='icon-two'></div>
					{/* <!-- Icon Three --> */}
					<div class='icon-three'></div>
					{/* <!-- Icon Four --> */}
					<div class='icon-four'></div>
					{/* <!-- Icon Five --> */}
					<div
						class='icon-five'
						style={{ backgroundImage: `url(images/icons/icon-6.png)` }}
					></div>
					{/* <!-- Icon Six --> */}
					<div class='icon-six'></div>
				</div>
				<div class='auto-container'>
					<div class='row clearfix'>
						{/* <!--Sidebar Side--> */}
						<div class='sidebar-side col-lg-3 col-md-12 col-sm-12'>
							<aside class='sidebar'>
								{/* <!-- Select Car --> */}
								<div class='sidebar-widget select-car'>
									<div class='widget-content'>
										<h4>New Cars For Sale</h4>

										{/* <!-- Default Form --> */}
										<div class='default-form'>
											<form method='post' action=''>
												{/* <!-- Form Group --> */}
												<div class='form-group'>
													<select class='custom-select-box'>
														<option>Makes</option>
														<option>01</option>
														<option>02</option>
														<option>03</option>
														<option>04</option>
													</select>
												</div>

												{/* <!-- Form Group --> */}
												<div class='form-group'>
													<select class='custom-select-box'>
														<option>Any Model</option>
														<option>2015</option>
														<option>2016</option>
														<option>2019</option>
														<option>2020</option>
													</select>
												</div>

												{/* <!-- Form Group --> */}
												<div class='form-group'>
													<select class='custom-select-box'>
														<option>Min price</option>
														<option>1000 to 10000</option>
														<option>10000 to 100000</option>
														<option>100000 to 100000</option>
													</select>
												</div>

												{/* <!-- Form Group --> */}
												<div class='form-group'>
													<select class='custom-select-box'>
														<option>Max price</option>
														<option>1000 to 10000</option>
														<option>10000 to 100000</option>
														<option>100000 to 100000</option>
													</select>
												</div>

												{/* <!-- Form Group --> */}
												<div class='form-group'>
													<select class='custom-select-box'>
														<option>Year</option>
														<option>1990</option>
														<option>2000</option>
														<option>2010</option>
														<option>2020</option>
													</select>
												</div>

												<div class='form-group'>
													<button type='submit' class='theme-btn btn-style-one'>
														<span class='txt'>Search used cars</span>
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</aside>
						</div>

						{/* <!--Content Side--> */}
						<div class='content-side col-lg-9 col-md-12 col-sm-12'>
							<div class='blog-grid'>
								<div class='row clearfix'>
									{/* <!-- News Block --> */}
									<div class='news-block col-lg-6 col-md-6 col-sm-12'>
										<div class='inner-box'>
											<div class='image'>
												<a href='blog-single.html'>
													<img src='images/resource/news-3.jpg' alt='' />
												</a>
											</div>
											<div class='lower-content'>
												<h4>
													<a href='blog-single.html'>
														Mg motor uk expands further into west wales with
														third oc davies site
													</a>
												</h4>
												<div class='text'>
													Your donation to Children in Crossfire will make a
													huge difference in the lives of the children we work
													with in Tanzania...
												</div>
											</div>
										</div>
									</div>

									{/* <!-- News Block --> */}
									<div class='news-block col-lg-6 col-md-6 col-sm-12'>
										<div class='inner-box'>
											<div class='image'>
												<a href='blog-single.html'>
													<img src='images/resource/news-4.jpg' alt='' />
												</a>
											</div>
											<div class='lower-content'>
												<h4>
													<a href='blog-single.html'>
														Mg expands with stoneacre and reaches landmark of
														100 uk dealerships
													</a>
												</h4>
												<div class='text'>
													Your donation to Children in Crossfire will make a
													huge difference in the lives of the children we work
													with in Tanzania...
												</div>
											</div>
										</div>
									</div>

									{/* <!-- News Block --> */}
									<div class='news-block col-lg-6 col-md-6 col-sm-12'>
										<div class='inner-box'>
											<div class='image'>
												<a href='blog-single.html'>
													<img src='images/resource/news-5.jpg' alt='' />
												</a>
											</div>
											<div class='lower-content'>
												<h4>
													<a href='blog-single.html'>
														Mg motor uk expands further into west wales with
														third oc davies site
													</a>
												</h4>
												<div class='text'>
													Your donation to Children in Crossfire will make a
													huge difference in the lives of the children we work
													with in Tanzania...
												</div>
											</div>
										</div>
									</div>

									{/* <!-- News Block --> */}
									<div class='news-block col-lg-6 col-md-6 col-sm-12'>
										<div class='inner-box'>
											<div class='image'>
												<a href='blog-single.html'>
													<img src='images/resource/news-6.jpg' alt='' />
												</a>
											</div>
											<div class='lower-content'>
												<h4>
													<a href='blog-single.html'>
														Mg expands with stoneacre and reaches landmark of
														100 uk dealerships
													</a>
												</h4>
												<div class='text'>
													Your donation to Children in Crossfire will make a
													huge difference in the lives of the children we work
													with in Tanzania...
												</div>
											</div>
										</div>
									</div>

									{/* <!-- News Block --> */}
									<div class='news-block col-lg-6 col-md-6 col-sm-12'>
										<div class='inner-box'>
											<div class='image'>
												<a href='blog-single.html'>
													<img src='images/resource/news-7.jpg' alt='' />
												</a>
											</div>
											<div class='lower-content'>
												<h4>
													<a href='blog-single.html'>
														Mg motor uk expands further into west wales with
														third oc davies site
													</a>
												</h4>
												<div class='text'>
													Your donation to Children in Crossfire will make a
													huge difference in the lives of the children we work
													with in Tanzania...
												</div>
											</div>
										</div>
									</div>

									{/* <!-- News Block --> */}
									<div class='news-block col-lg-6 col-md-6 col-sm-12'>
										<div class='inner-box'>
											<div class='image'>
												<a href='blog-single.html'>
													<img src='images/resource/news-8.jpg' alt='' />
												</a>
											</div>
											<div class='lower-content'>
												<h4>
													<a href='blog-single.html'>
														Mg expands with stoneacre and reaches landmark of
														100 uk dealerships
													</a>
												</h4>
												<div class='text'>
													Your donation to Children in Crossfire will make a
													huge difference in the lives of the children we work
													with in Tanzania...
												</div>
											</div>
										</div>
									</div>

									{/* <!-- News Block --> */}
									<div class='news-block col-lg-6 col-md-6 col-sm-12'>
										<div class='inner-box'>
											<div class='image'>
												<a href='blog-single.html'>
													<img src='images/resource/news-9.jpg' alt='' />
												</a>
											</div>
											<div class='lower-content'>
												<h4>
													<a href='blog-single.html'>
														Mg motor uk expands further into west wales with
														third oc davies site
													</a>
												</h4>
												<div class='text'>
													Your donation to Children in Crossfire will make a
													huge difference in the lives of the children we work
													with in Tanzania...
												</div>
											</div>
										</div>
									</div>

									{/* <!-- News Block --> */}
									<div class='news-block col-lg-6 col-md-6 col-sm-12'>
										<div class='inner-box'>
											<div class='image'>
												<a href='blog-single.html'>
													<img src='images/resource/news-10.jpg' alt='' />
												</a>
											</div>
											<div class='lower-content'>
												<h4>
													<a href='blog-single.html'>
														Mg expands with stoneacre and reaches landmark of
														100 uk dealerships
													</a>
												</h4>
												<div class='text'>
													Your donation to Children in Crossfire will make a
													huge difference in the lives of the children we work
													with in Tanzania...
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* <!-- Post Share Options --> */}
								<div class='styled-pagination'>
									<ul class='clearfix'>
										<li>
											<a href='#'>1</a>
										</li>
										<li>
											<a href='#'>2</a>
										</li>
										<li class='active'>
											<a href='#'>3</a>
										</li>
										<li>
											<a href='#'>4</a>
										</li>
										<li>
											<a href='#'>5</a>
										</li>
										<li class='next'>
											<a href='#'>
												<span class='flaticon-right-arrow'></span>{' '}
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog
