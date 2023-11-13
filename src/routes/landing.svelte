<script>
  import {onMount} from "svelte"; 


  let slider_array_of_events = ['"GO FROM PRINT TO WEB!"','"EMBRACE LIVE UPDATES"','"INSTANTLY ACCESSIBLE"','"THE FUTURE OF MODELING"']
    let selected_item_index = 0;

	function translateText() {
		if (selected_item_index == slider_array_of_events.length - 1) {
			selected_item_index = 0;
		} else {
			selected_item_index++;
		}
	}

    onMount(() => {
		setInterval(function () {
			translateText();
		}, 4000);


	});




</script>



    <div class="main_container">

	
		<div class="heading_container">
			<div class="heading">
				<div class="logo">
					<img src="/assets/landing/logo.png" alt="">
				</div>
				<!-- <div class="logo_name">
					<h1>Model Outlook</h1>
				</div> -->
				
			</div>
		</div>

		<div class="hero_container">
			<div class="left_png">
				<img  loading="lazy"  src="/assets/landing/left.png" alt="">
			</div>
			<div class="middle_hero_section">
				<div class="middle_hero_section_part_1">
					<div class="main_heading">
						<h1>Portfolio Websites: Your Work, Magnificently Displayed</h1>
					</div>
					<div class="sub_heading_section">
						<p>say goodbye to static PDFs:</p>
					</div>



					<div class="content">
						{#each slider_array_of_events as curr_text, index_of_item}
							<h2 class="slider-text" class:text-active={index_of_item === selected_item_index}>
								{#each curr_text as curr_letter, index}
									<span
										style=" animation-delay: {index * 80}ms;"
										class:in={index_of_item === selected_item_index}
										class:out={index_of_item != selected_item_index}>{curr_letter}</span
									>
								{/each}
							</h2>
						{/each}
						<!-- <h2> {landing_heading} </h2> -->
					</div>
















					

				</div>
				<div class="middle_hero_section_part_2">
					<div class="boxes">
						<div class="box_1">
							<div class="details">
								<h4>For Women</h4>
								<p>Start Building Your Online Portfolio</p>
								<a href="#contact_div" id="contact"><h4 id="contact2" >Contact  <i class="fa-solid fa-arrow-right"></i></h4></a>
							</div>
							<div class="image_1">
								<img src="/assets/landing/new_model2.png" alt="">

							</div>
						</div>
						<div class="box_2">
							<div class="details">
								<h4>For Men</h4>
								<p>Start Building Your Online Portfolio</p>
								<a  href="#contact_div" id="contact"><h4 id="contact">Contact  <i class="fa-solid fa-arrow-right"></i></h4></a>
							</div>
							<div class="image_2">
								<img src="/assets/landing/men3.png" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="right_png">
				<img loading="lazy"   src="/assets/landing/right.png" alt="">
			</div>
		</div>
	</div>



	<a href="https://wa.me/7994844456"><div  id="fixedbutton">
		<img src="/assets/landing/contact2.png" >
		
	</div></a>



<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');

#fixedbutton {
    position: fixed;
    bottom: 30px;
    right: 0px; 
	width: 70px;
	height: 70px;
	z-index: 999;
	background-color: rgba(241, 240, 219, 0.4);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(5px);
	display: flex;
	/* border-radius: 20px; */
	justify-content: center;
	align-items: center;
	border-top-left-radius: 35px;
	border-bottom-left-radius: 35px;


}
@keyframes updown {
  0% {
    transform: translateY(-10%);
  }

  50% {
    transform: translateY(0%);
  }

  100% {
    transform: translateY(-10%);
  }
}
#fixedbutton img{
		width: 60%;
		margin-left: 5px;
		animation: updown 1s ease infinite;
}	


*{
    margin: 0px;	
	scroll-behavior: smooth;
	
}
    



.main_container{
	width: 100%;
	height: auto;
	padding-top: 50px;
	margin-bottom: 50px;
    margin-left: 0px;
	background: url(/assets/landing/banner-bg.png);
	background-position: 10% 80%;
	scroll-behavior: smooth;
}
.heading_container{
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
}
.logo{
	width: 80px;
	height: 80px;
}

.logo_name{
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: white;
}
.logo img{
	width: 100%;
	height: auto;
}
.heading{
	width: 40%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.heading h1{
	margin: 20px;
}
.hero_container{
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
}

.miidle_hero_section{
	width: 80%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
}
#contact{
	text-decoration: none;
	color: white;
	margin-top: 10px;
}
#contact2{
	text-decoration: none;
	color: black;
	margin-top: 10px;
}
.middle_hero_section_part_1{
	width: 100%;
	height: auto;
}
.middle_hero_section_part_2{
	width: 100%;
	height: auto;

}
.boxes{
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
}

.box_1{
	max-width: 32%;
	height: auto;
	
	background-color: #FFC436;
	border-radius: 1.5rem;
	position: relative;
	color: black;
	display: flex;
	min-width: 400px;
	overflow: hidden;
}
.box_1:hover .image_1 img{
	animation-name: example;
		animation-duration: 1s;
}

	@keyframes example {
		0% {
			transform: scale(1);
			transition-timing-function: ease;
		}

		50% {
			transform: scale(1.2);
			transition-timing-function: ease;
		}
		/* 100% {
			transform: scale(1.5);
			transition-timing-function: ease;
		} */
	}
	.box_2:hover .image_2 img{
	animation-name: example;
		animation-duration: 1s;
}

	@keyframes example {
		0% {
			transform: scale(1);
			transition-timing-function: ease;
		}

		50% {
			transform: scale(1.2);
			transition-timing-function: ease;
		}
		/* 100% {
			transform: scale(1.5);
			transition-timing-function: ease;
		} */
	}
.box_2{
	max-width: 32%;
	height: auto;
	background-color: #0174BE;
	border-radius: 1.5rem;
	position: relative;
	color: white;
	display: flex;
	min-width: 400px;
	overflow: hidden;
}
.details{
	width: 70%;
	padding-left: 2.5rem;
	padding-top: 2rem;
	padding-bottom: 2rem;
	z-index: 999;
}
.details p{
	font-size:24px;
	font-family: 'Poppins', sans-serif;
	line-height:32px;
	font-weight:600;

}
.details h4{
	font-size: 14px;
	font-family: 'Poppins', sans-serif;
	line-height:25px;
	font-weight:400;
}
.image_1,.image_2{
	width: 50%;
	height: auto;
	display: flex;
	justify-content: end;
	align-items: end;
	padding-right: 20px;
	
	
}
.image_1 img{
	width: 181px;
    height: 170px;	
}
.image_2 img{
	width: 181px;
    height: 187px;
}

.main_heading{
	width: 87%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 5rem;
	padding-bottom: 3rem;
}
.main_heading h1{
	max-width: 80%;
	color:RGB(0, 0, 0);
	font-size:50px;
	line-height:75px;
	font-weight:900;
	font-family: 'Poppins', sans-serif;
color: white;
}
.sub_heading_section{
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	text-align: center;
	margin-bottom: 20px;
}
.sub_heading_section p{
	font-size:28px;
	max-width: 50%;
	font-family: 'Poppins', sans-serif;
	font-weight:600;
	
	color: #FF9130;
	padding: 2rem;
	padding-bottom: 0px;
}

.right_png{
	width: 200px;
	height: auto;
	display: flex;
	justify-content: end;
	align-items: center;

}
.left_png{
	width: 200px;
	height: auto;
	display: flex;
	justify-content: start;
	align-items: center;
}
.right_png img{
	width: 170px;
	height: auto;
}
.left_png img{
	width: 150px;
	height: auto;
}





.content {
    position: relative;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    height: 45px;
    margin-top: -11px;
	margin-bottom: 100px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
}
.slider-text {
		display: inline-block;
		position: absolute;
		white-space: nowrap;
		left: 0;
		top: 0;
		opacity: 1;
        width: 100%;
		font-size:28px;
	
		font-family: 'Poppins', sans-serif;
		font-weight:600;
		color: white;
	}
	.slider-text span {
		display: inline-block;
		transform-style: preserve-3d;
		backface-visibility: hidden;
		transform: translateZ(-20px) rotateX(90deg);
		opacity: 1;
		min-width: 8px;
	}


	span.in {
		animation: ah-rotate-2-in 0.3s forwards;
	}

	span.out {
		animation: ah-rotate-2-out 0.3s forwards;
		animation-delay: initial !important;
	}

	@keyframes ah-rotate-2-in {
		0% {
			opacity: 0;
			transform: translateZ(-20px) rotateX(90deg);
		}

		60% {
			opacity: 1;
			transform: translateZ(-20px) rotateX(-10deg);
		}

		100% {
			opacity: 1;
			transform: translateZ(-20px) rotateX(0);
		}
	}

	@keyframes ah-rotate-2-out {
		0% {
			opacity: 1;
			transform: translateZ(-20px) rotateX(0);
		}

		60% {
			opacity: 0;
			transform: translateZ(-20px) rotateX(-100deg);
		}

		100% {
			opacity: 0;
			transform: translateZ(-20px) rotateX(-90deg);
		}
	}




/* large screen */
@media (min-width:1920px)  {


}
/* desktops */
@media (max-width:1919px) and (min-width:1200px) {

	.slider-text{
	color: white;
}
}
/* laptops */
@media (max-width:1199px) and (min-width:992px) {
.boxes{
	flex-direction: column;
}

.left_png{
	width:100px; 

}
.right_png{
	width:100px; 
}
.main_heading{
	padding: 2rem;
	padding-bottom: 2rem;
}
.main_heading h1{
	font-size: 44px;
	line-height: 64px;
}
.logo_name h1{
	font-size: 30px;
}
.main_heading h1{
	max-width: 100%;
}
.sub_heading_section p{
	max-width: 100%;
	padding-bottom: 0px;
}
.sub_heading_section{
	margin-bottom: 0px;
}
.content{
	margin-bottom: 80px;
	margin-top: 8px;
}
.slider-text{
	color: white;
}
}
/* small tablets */
@media (max-width:991px) and (min-width:768px) {
	.sub_heading_section p{
	max-width: 100%;
	color: #F8DE22;
	padding-bottom: 0px;
}

.sub_heading_section{
	margin-bottom: 15px;
	
}
.content{
	margin-bottom: 40px;
}
.slider-text{
	color: #F8DE22;
}
.main_heading h1{
	font-size: 34px;
	line-height: 64px;
}
	.boxes{
	flex-direction: column;
}

.left_png{
	width:100px; 

}
.right_png{
	width:100px; 
}
.main_heading{
	padding: 2rem;
	padding-bottom: 2rem;
}

.logo_name h1{
	font-size: 30px;
}
.main_heading h1{
	max-width: 100%;
}
.slider-text{color: white;}

}
/* extra small devices */
@media (max-width:767px) and  (min-width:418px) {


	.boxes{
	flex-direction: column;
}
.box_1{
	min-width: 97%;

}
.box_2{
	min-width: 97%;
	
}
.details p{
	font-size:14px;
	font-family: 'Poppins', sans-serif;
	line-height:20px;
	font-weight:600;
	z-index: 999;
}


.left_png{
	width:100px; 
	align-items: end;
}
.left_png img{
	position: absolute;
	width: 110px;
}
.right_png{
	width:100px; 
	align-items: start;
}
.right_png img{
	position: absolute;
	width: 130px;
}
.main_heading{
	padding: 1rem;
	padding-bottom: 1rem;
}
.main_heading h1{
	font-size: 26px;
	line-height:37.5px;
}
.logo_name h1{
	font-size: 30px;
}
.main_heading h1{
	max-width: 100%;
}
.sub_heading_section p{
	max-width: 100%;
	color: #F8DE22;
}

.image_1 img{
	width: 173px;
    height: 152px;
    position: absolute;
	z-index: 1;
}
.image_2 img{
	width: 175px;
    height: 155px;
    position: absolute;
}

.heading{
	width: 80%;
}
.logo{
	width: 65px;
	height: 65px;
}
.sub_heading_section p{
	font-size: 18px;
	padding: 0px;
	margin: 0px;
	color: #F8DE22;
}


.sub_heading_section{
	margin-bottom: 15px;
}
.content{
	margin-bottom: 40px;
}
.slider-text{
	font-size: 18px;
	color: white;
}
.right_png img{
	position: absolute;
	width: 130px;
	z-index: -1;
	margin-top: 70px;
	opacity: .3;
}
.boxes{
			gap: 2rem;
		}

}

@media(max-width:418px){

	.boxes{
	flex-direction: column;
}
.boxes{
			gap: 2rem;
		}
.box_1{
	min-width: 97%;

}
.box_2{
	min-width: 97%;
	
}
.details p{
	font-size:14px;
	font-family: 'Poppins', sans-serif;
	line-height:20px;
	font-weight:600;
	z-index: 999;
}



.left_png{
	width:100px; 
	align-items: end;
}
.left_png img{
	position: absolute;
	width: 110px;
	display: none;
	
}
.right_png{
	width:100px; 
	align-items: start;
	
}
.right_png img{
	position: absolute;
	width: 130px;
	z-index: -1;
	margin-top: 20px;
	opacity: .3;
	display: none;
}
.main_heading{
	padding: 0rem;
	padding-top: 30px;
	padding-bottom: 35px;
	width: 100%;
}
.sub_heading_section p{
	max-width: 100%;
	color: #F8DE22;
}
.main_heading h1{
	font-size: 24px;
	line-height:40px;
	font-weight: 900;
}
.logo_name h1{
	font-size: 22px;
}
.main_heading h1{
	max-width: 100%;
	font-weight: 500;
}

.image_1 img{
	width: 153px;
    height: 142px;
    position: absolute;
	z-index: 1;
}
.image_2 img{
	width: 151px;
    height: 155px;
    position: absolute;
}
.image_1, .image_2{
	padding-right: 0px;
}



.heading{
	width: 80%;
	margin-block: 30px;
}
.logo{
	width: 130px;
	height: 130px;
}
.sub_heading_section p{
	padding: 0px;
	margin: 0px;
	font-size: 18px;
}
.sub_heading_section{
	margin-bottom: 19px;
}
.slider-text{
	font-size: 18px;
	color: white;
}
.content{
	margin-bottom: 40px;
}

}
   
</style>