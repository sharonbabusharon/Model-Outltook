<script>
import {onMount} from "svelte"

let text;
	let text_2;

    export let testimonials,section_editable_heading,text_pos,autoslide;

    testimonials = {
      items:[
        { customer_name: 'Aryan Kathuria',
      customer_message: ' "The templates customization options are a huge plus, and the responsive design ensures my portfolio looks great on any device. Its truly a fantastic tool for anyone looking to make a strong online presence in the modeling industry" ',
      customer_image:{
          url:"/assets/testimonial/aryan.JPG" 
         
      } ,
      customer_link:"https://modeloutlook.com/Aryan_Kathuria"
      },
      
        { customer_name: 'Bensyrah',
      customer_message: '"Its incredibly user-friendly, and the clean design allowed me to present my work professionally and with a personal touch. The customization options gave me the flexibility to make it truly my own."',
      customer_image:{
          url:"/assets/testimonial/bensy2.jpeg"
        }  ,
          customer_link:"https://bensyrah.com/"
        },
        { customer_name: 'Sarath Krishna', 
          customer_message: '"Using the model portfolio website template has been a game-changer for me. Its incredibly user-friendly and customizable, allowing me to showcase my work with style and ease."',
          customer_image:{
              url:"/assets/testimonial/sarath.webp"
          }  ,
          customer_link:"https://modeloutlook.com/Sarath"
        }
        ,
        { customer_name: 'Athira Ravi', 
          customer_message: '"I used to rely on outdated PDFs, but these website templates took my modeling career to the next level. The interactive features and customization options are a game-changer."',
          customer_image:{
              url:"/assets/testimonial/athira.jpeg"
          } ,
          customer_link:"https://modeloutlook.com/Athira_Ravi"
        }
        ,
        { customer_name: 'Mahin Montika', 
          customer_message: '"As a model, I needed a digital edge, and these templates provided just that. I love the modern look and the ability to showcase my work beautifully."',
          customer_image:{
              url:"/assets/testimonial/mahin.jpeg"
          }  ,
          customer_link:"https://modeloutlook.com/Mahin_Montika123"
        }
        
      ]
  }
  text_pos = "center"
  autoslide = true
 

    let currentIndex = 0;
    let slideInterval;
    let sliderRef;
    let isSwiping = false;
    let swipeStartX = 0;
    let swipeEndX = 0;
    const startSlideInterval = () => {
    slideInterval = setInterval(() => {
      nextSlide();
    }, 6000);
  };

  const stopSlideInterval = () => {
    clearInterval(slideInterval);
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % testimonials.items.length;
    // currentIndex = nextIndex === 0 ? testimonials.items.length : nextIndex;
    
  };

  const previousSlide = () => {
    currentIndex = currentIndex === 0 ? testimonials.items.length - 1 : currentIndex - 1;
  };

  const handleSwipeStart = (event) => {
    isSwiping = true;
    swipeStartX = event.touches[0].clientX;
  };

  const handleSwipeMove = (event) => {
    if (isSwiping) {
      swipeEndX = event.touches[0].clientX;
    }
  };

  const handleSwipeEnd = () => {
    if (isSwiping) {
      const distance = swipeStartX - swipeEndX;
      if (distance > 0) {
        nextSlide();
      } else if (distance < 0) {
        previousSlide();
      }
      isSwiping = false;
    }
  };
  function go_to_item_based_on_index(new_index){
    currentIndex = new_index;
    }

    

    onMount(() => {
    console.log(window.location.href);

    if (autoslide){
    startSlideInterval();
    }
  });
</script>

<div>

    <div class="main_container">
		<div class="heading_container">
			<div class="heading">
				<div class="divicer">
					<div class="line" />
				</div>
				<div class="main_heading">
					<h3>Carefully-crafted design makes your work truly shine.</h3>
				</div>
			</div>
		</div>


	


		<div class="phone_anination_container">
			<div class="names" id="names">
				<div class="name_div">
					<h1 id="text" bind:this={text}>Model</h1>
					
					<img loading="lazy" class="rotate_1" src="/assets/about/elip2.png
					" alt="">
				</div>
				<div class="animation_div">
					<img  loading="lazy"  id="back" 
						src="/assets/about/phoneback_compressed.png"
						alt=""
					/>
                    <img  loading="lazy" id="front"
                    src="/assets/about/athira_optimised.webp"
                    alt=""
                />
         
				</div>
				<div class="name_div">
					<h1 id="text_2" bind:this={text_2}>Outlook</h1>

					
					<img  loading="lazy"  class="rotate_2" src="/assets/about/elip1.png" alt="">
					

				</div>
			</div>
		</div>

<div class="testimonials">


		{#if section_editable_heading}
		<h1>{section_editable_heading}</h1>
	 {/if}
		<div
	  class="testimonial-slider"
	  on:touchstart={handleSwipeStart}
	  on:touchmove={handleSwipeMove}
	  on:touchend={handleSwipeEnd}
	  bind:this={sliderRef}
	>
	  {#if testimonials && testimonials.items}
	  {#each testimonials.items as testimonial, index }
		<div
		  class="testimonial"
		  style={`transform: translateX(-${currentIndex * 100}%)`}
		  key={index}
		> 
		  <div class="testimonial_inner" >
		   {#if testimonial.customer_image && testimonial.customer_image.url}
			  <img src="{testimonial.customer_image.url}" alt="">
		   {/if}
			  <p class="customer_name">{testimonial.customer_name}</p>
			  <p class="para">{testimonial.customer_message}</p>
			  <!-- <a id="profile_links" target="_blank" href="{testimonial.customer_link}"><button class="button-17" role="button">view profile <img src="/assets/about/arrow.gif" alt="" id="arrow_gif"></button></a> -->
		  </div>
		</div>
	  {/each}
	  {/if}
	 </div>
	 <div id="sliderDot" class="">
	   {#if testimonials && testimonials.items}
		 {#each testimonials.items as slider_item, index_of_item}
			 <span on:click={() =>go_to_item_based_on_index(index_of_item) }   class:white-heart2 = {index_of_item === currentIndex} ><i class="fa fa-circle-o" aria-hidden="true" ></i></span>
		 {/each}
		{/if}
	</div>
	
</div>








		




		<div class="details_container_1">
			<div class="details">
				<div class="detail_content">
					<div class="detail_para">
						<div class="divicer_2">
							<div class="line" />
						</div>
						<h4>
							<span>EXPERIENCE THE FUTURE OF MODELING: </span>USER-FRIENDLY & DYNAMIC WITH MODEL
							OUTLOOK
						</h4>
						<p>
							Model Outlook is not just a modeling platform; it's an immersive, user-friendly, and
							dynamic experience. We've redefined the way models and visitors interact with a
							platform. Our intuitive design ensures that models can effortlessly showcase their
							talents, while visitors enjoy a seamless exploration of diverse portfolios.
						</p>
					</div>
					<div class="detail_image_1">
						<img id="assets"
							src="/assets/about/image2.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="details_container_2">
			<div class="details">
				<div class="detail_content_2">
					<div class="detail_image_2">
						<img id="assets"
							src="/assets/about/image1.png"
							alt=""
						/>
					</div>
					<div class="detail_para">
						<div class="divicer_2">
							<div class="line" />
						</div>
						<h4>
							<span>ELEVATING EXCELLENCE: </span>WHERE PROFESSIONALISM FINDS A HOME - MODEL OUTLOOK
						</h4>
						<p>
							Model Outlook is more than a platform; it's a launchpad for professionalism in the
							world of modeling. We understand that the path to success is paved with dedication,
							discipline, and a commitment to excellence. With our robust tools and resources, we
							empower models to elevate their professionalism.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="details_container_1">
			<div class="details">
				<div class="detail_content">
					<div class="detail_para">
						<div class="divicer_2">
							<div class="line_2" />
						</div>
						<h4>
							<span>UNLEASH YOUR TALENT AND VERSATILITY: </span>MODEL OUTLOOK, YOUR CREATIVE CANVAS
						</h4>
						<p>
							Model Outlook is your creative canvas, where you have the power to unleash your unique
							talent and showcase your boundless versatility. Our platform is designed to empower
							models to shine like never before. Whether it's your striking poses, captivating
							expressions, or extraordinary skills, Model Outlook provides the stage for your
							talents to take center spotlight
						</p>
					</div>
					<div class="detail_image_1">
						<img id="assets"
							src="/assets/about/image.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>







		<div class="properties_container">
			<div class="properties">
				<div class="props">
					<div class="prop_image">
						<div class="png_images">
							<img
								class="animate"
								src="https://preview.uideck.com/items/basic/assets/images/services/services-shape.svg"
								alt=""
							/>
							<img id="property_icons"
								src="/assets/about/interactive.png"
								alt=""
							/>
						</div>
					</div>
					<div class="prop_head">
						<h4>Interactive and Engaging</h4>
					</div>
					<div class="prop_about">
						<p>
							Your website offers interactive elements like image sliders, galleries, and videos, making it far more engaging than static PDFs.						</p>
					</div>
				</div>
				<div class="props">
					<div class="prop_image">
						<div class="png_images">
							<img id="round"
								class="animate"
								src="https://preview.uideck.com/items/basic/assets/images/services/services-shape.svg"
								alt=""
							/>
							<img id="property_icons"
								src="/assets/about/devices.png"
								alt=""
							/>
						</div>
					</div>
					<div class="prop_head">
						<h4>Responsive Design</h4>
					</div>
					<div class="prop_about">
						<p id="dummy">
							The website templates are designed to be responsive, ensuring that portfolios look great on all devices, from desktop to mobile.						</p>
					</div>
				</div>
				<div class="props">
					<div class="prop_image">
						<div class="png_images">
							<img 
								class="animate"
								src="https://preview.uideck.com/items/basic/assets/images/services/services-shape.svg"
								alt=""
							/>
							<img id="property_icons"
								src="/assets/about/social-media.png"
								alt=""
							/>
						</div>
					</div>
					<div class="prop_head">
						<h4>Social Media Integration</h4>
					</div>
					<div class="prop_about">
						<p>
							The website can be seamlessly linked to social media profiles, making it easier to share and promote their portfolio online.						</p>
					</div>
				</div>
			</div>
		</div>








	</div>
</div>


<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');


/* testimonials */
.testimonials{
	margin-bottom: 80px;
}

     .testimonial-slider {
    display: flex;
    overflow-x: hidden;
    width: 100%;
    /* height: auto; */
  
  }

  .testimonial {
    flex: 0 0 100%;
    transition: transform 0.5s ease;
    /* border: 5px solid; */
   
    padding-bottom: 30px;
    
  }
  
  .testimonial_inner{
    width:70vw;
    box-shadow: 0px 5px 30px 0px rgba(167, 167, 167, 0.16);
    padding: 8px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    padding-top: 38px;
    padding-inline: 12px;
    padding-bottom: 30px;
	background-color: bisque;
	border-radius: 20px;
  }
  .customer_name{
    font-weight:700;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
  }
  .testimonial_inner .para{
     font-weight: 500 !important;
     font-family: 'Poppins', sans-serif;
  }
  #profile_links{
	
  }
  .testimonial_inner img{
    width: 100px;
    height: 100px;
    border-radius: 1.5rem;
    object-fit: cover;
  }
  .testimonial_inner a{
    text-decoration: underline;
    color: black;
  }
  #sliderDot{
        /* position: absolute;
        z-index: 99;
        top: 0;
        left: 0; */
        width: 100%;
        height: 50px;
        text-align: center;
        display: flex;
    justify-content: center;
    align-items: center;
        /* color: gold; */
    }
    :global(span.dotSpan) {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
        
        margin: 0 2px 0 2px;
        opacity: .3;
        transition: all 300ms ease;
        cursor: pointer;
    }
    #sliderDot span{
      color:  black;
        font-size: 15px;
        margin-left: -10px;
        position: relative;
        z-index: 2;
        margin-inline: 1px;
    }
    #sliderDot span:hover{
      cursor: pointer;
    }
    #sliderDot .white-heart2 {
        color: #FE8269;
        font-size: 23px;
        /* margin-left: -10px; */
        position: relative;
        z-index: 2;
        animation:white-heart 8s infinite;
    }

    .left{
      text-align: left;
    }
    .right{
      text-align: right;
    }
    .center{
      text-align: center;
    }

	
/* CSS */
.button-17 {
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 37px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 0px 16px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
}
#arrow_gif{
	width: 25px;
	height: auto;
	margin-left: 7px;
}

.button-17:hover {
  background: #F6F9FE;
  color: #174ea6;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}




.round{
		width: 300px;
		height: 300px;
	}
	.phone_anination_container {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
        
	}
	.animation_div {
		width: 70%;
		height: auto;
		display: flex;
		justify-content: center;
        position: relative;
        align-items: center;
	}
	.animation_div #back{
		width: 470px;
        position: absolute;
	}
    .animation_div #front{
		width: 307px;
        /* position: absolute; */
	}
    .animation_div #logo{
		width: 130px;
        position: absolute;
	}
	#text {
		color: black;
		position: absolute;
		right: 0rem;
		font-size: 7em;
		z-index: -1;
		background-image: linear-gradient(90deg, #f46692, #ffc444);
		text-align: left;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	#text_2 {
		color: black;
		position: absolute;
		left: 0rem;
		font-size: 7em;
		z-index: -1;
		background-image: linear-gradient(90deg, #f46692, #ffc444);
		text-align: left;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
#assets{
	width: 500px;
	height: 400px;
}
	.name_div {
		width: 100%;
		height: 400px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
        overflow: hidden;
	}
	.name_div .rotate_1{
		width: 269px;
    position: absolute;
    right: 0rem;
    top: 10rem;
	display: none;
	}
	.name_div .rotate_2{
	    width: 245px;
    position: absolute;
    right: -8rem;
    top: -5rem;
    z-index: -1;
	display: none;
	}

	.name_div .rotate_1 {
    animation: rotation 5s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.name_div .rotate_2 {
    animation: rotation 5s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}


	.names {
		display: flex;
		height: 100vh;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.props:hover .png_images .animate {
		animation-name: example;
		animation-duration: 1s;
		
	}
	 .animate {
		margin-left: 15px;
	}
	@keyframes example {
		0% {
			transform: rotate(0deg);
			transition-timing-function: ease;
		}

		50% {
			transform: rotate(30deg);
			transition-timing-function: ease;
		}
		100% {
			transform: rotate(0deg);
			transition-timing-function: ease;
		}
	}

	#property_icons{
		width: 70px;
	}

	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
	.main_container {
		width: 100%;
		height: auto;
		padding-top: 100px;
	}
	.heading_container {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		padding-bottom: 100px;
	}
	.divicer {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.line {
		background: linear-gradient(#fe8464 0%, #fe6e9a 100%);
		width: 150px;
		height: 5px;
		margin-bottom: 10px !important;
	}
	.line_2 {
		background: linear-gradient(#fe8464 0%, #fe6e9a 100%);
		width: 180px;
		height: 5px;
		margin-bottom: 10px !important;
	}
	.heading {
		width: 70%;
		height: auto;
	}
	.main_heading {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		text-align: center;
	}
	.main_heading h3 {
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		color: #2e2e2e;
		margin: 0px;
		font-size: 32px;
		padding-top: 10px;
	}
	.properties_container {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		padding-top: 100px;
		padding-bottom: 100px;
	}
	.properties {
		width: 70%;
		height: auto;
		display: flex;
		/* flex-wrap: wrap; */
		justify-content: space-between;
		gap: 2rem;
	}

	.props {
		background-color: #fff;
		min-width: 250px;
		box-shadow: 0px 5px 30px 0px rgba(167, 167, 167, 0.16);

		transition: all 0.3s ease-out 0s;
		padding: 50px 30px;
		border: 2px solid transparent;
		border-radius: 8px;
	}

	.props:hover {
		border: #fe7489 solid 3px;
		transition: ease-in-out;
	}

	.prop_head {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 20px;
	}
	.prop_head h4 {
		font-family: 'Poppins', sans-serif;
		font-size: 26px;
		font-weight: 700;
		color: #2e2e2e;
        margin: 0px;
		text-align: center;
	}
	.prop:hover .prop_head {
		color: #fe6e9a;
	}
	.prop_about {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.prop_about p {
		font-size: 16px;
		font-weight: 400;
		line-height: 26px;
		color: #6a6972;
		margin: 0px;
		font-family: 'Poppins', sans-serif;
	}
	.prop_image {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.color {
		color: #fe6e9a;
	}

	.png_images {
		position: relative;
		width: 120px;
		height: 120px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.png_images img {
		position: absolute;
	}
	.details_container_1 {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		padding-bottom: 100px;
		padding-top: 100px;

		background: url(/assets/about/cropped.png);
		background-repeat: no-repeat;
		background-size: 30%;
		background-position: right;
	}
	.details_container_2 {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		padding-bottom: 100px;
		padding-top: 100px;

		background: url(assets/about/cropped_2__1_-removebg-preview.png);
		background-repeat: no-repeat;
		background-size: 30%;
	}
	.detail_image_1 img {
		width: 70%;
	}
	.detail_image_2 img {
		width: 70%;
	}
	.detail_image_1{
		display: flex;
		justify-content: end;
	}
	.details {
		width: 70%;
		height: auto;
	}
	.detail_content {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
	}
	.detail_content_2 {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
	}

	.detail_image {
		width: 50%;
		height: auto;
	}
	.detail_para {
		max-width: 480px;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.detail_para h4 {
		font-size: 32px;
		padding-top: 15px;
        padding-bottom: 15px;
		font-weight: 600;
		font-family: 'Poppins', sans-serif;
        margin: 0px;
		color: rgb(76, 75, 75);


	}
	.detail_para span {
		font-size: 32px;
		padding-top: 10px;
		
		font-weight: 900;
		font-family: 'Poppins', sans-serif;
		color: #FCBD18;
		
	}
	.detail_para p {
		font-size: 16px;
		font-weight: 400;
		line-height: 26px;
		color: #6a6972;
		margin: 0px;
		font-family: 'Poppins', sans-serif;
	}

	/* large screen */
	@media (min-width: 1920px) {
        .phone_anination_container{
            /* display: none; */
        }
	}
	/* desktops */
	@media (max-width: 1919px) and (min-width: 1200px) {
        .phone_anination_container{
            /* display: none; */
        }
	}
	/* laptops */
	@media (max-width: 1199px) and (min-width: 992px) {
		.properties {
			flex-direction: column;
		}
		.detail_content {
			flex-direction: column;
			gap: 2rem;
		}
		.detail_content_2 {
			flex-direction: column-reverse;
			gap: 2rem;
		}
		.detail_para {
			max-width: 100%;
		}
		.detail_image {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.detail_image img {
			width: 60%;
		}
        .phone_anination_container{
            /* display: none; */
        }
	}
	/* small tablets */
	@media (max-width: 991px) and (min-width: 768px) {
		.properties {
			flex-direction: column;
			width: 80%;
		}
		.detail_content {
			flex-direction: column;
			gap: 2rem;
		}
		.detail_content_2 {
			flex-direction: column-reverse;
			gap: 2rem;
		}
		.detail_para {
			max-width: 100%;
		}
		.detail_para h4 {
			font-size: 24px;
			line-height: 32px;
		}
		.detail_para span {
			font-size: 24px;
			line-height: 32px;
		}
		.details {
			width: 80%;
		}
		.detail_image {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.detail_image img {
			width: 100%;
		}
		.details_container_1 {
			padding-top: 0px;
		}
		.props {
			padding: 25px 20px;
		}
		.pro h4 {
			font-size: 20px;
			line-height: 24px;
		}
		.heading {
			width: 90%;
		}
		.heading_container {
			padding-bottom: 60px;
		}
		.main_heading h3 {
			font-weight: 500;
			font-size: 24px;
			line-height: 28px;
		}
		.main_container {
			padding-top: 50px;
		}

		.details_container_1 {
			background-size: 60%;
		}
		.details_container_2 {
			background-size: 60%;
		}
		.detail_image_1{
			justify-content: center;
		}
        .phone_anination_container{
            /* display: none; */
        }
	}
	/* extra small devices */
	@media (max-width: 767px) and (min-width: 418px) {
        .phone_anination_container{
            /* display: none; */
        }
		.properties {
			flex-direction: column;
			width: 80%;
		}
		.properties_container{
            padding-bottom: 100px;
		}
		.detail_content {
			flex-direction: column;
			gap: 2rem;
		}
		.detail_content_2 {
			flex-direction: column-reverse;
			gap: 2rem;
		}
		.detail_para {
			max-width: 100%;
		}
		.detail_para h4 {
			font-size: 24px;
			line-height: 32px;
            margin: 0px;
            padding-top: 15px;
            padding-bottom: 15px;
		}
		.detail_para span {
			font-size: 24px;
			line-height: 32px;
		}
		.details {
			width: 80%;
		}
		.detail_image {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.detail_image_1 img {
			width: 100%;
		}
		.detail_image_2 img {
			width: 100%;
		}
		.details_container_1 {
			padding-top: 0px;
		}
		.props {
			padding: 25px 20px;
		}
		.pro h4 {
			font-size: 20px;
			line-height: 24px;
		}
		.heading {
			width: 90%;
		}
		.heading_container {
			padding-bottom: 60px;
		}
		.main_heading h3 {
			font-weight: 500;
			font-size: 24px;
			line-height: 28px;
		}
		.main_container {
			padding-top: 50px;
		}

		.details_container_1 {
			background-size: 60%;
			padding-bottom: 50px;
		}
		.details_container_2 {
			background-size: 60%;
		}
		.detail_image_1{
			justify-content: center;
		}
		.boxes{
			gap: 2rem;
		}
		
		.name_div .rotate_2{

display: block;
}
.name_div .rotate_1{

display: block;
}

		
		
	}

	@media (max-width: 418px) {
		.properties {
			flex-direction: column;
			width: 80%;
		}
        .properties_container{
            padding-bottom: 100px;
        }
		.detail_content {
			flex-direction: column;
			gap: 2rem;
		}
		.detail_content_2 {
			flex-direction: column-reverse;
			gap: 2rem;
		}
		.detail_para {
			max-width: 100%;
            
		}
		.detail_para h4 {
			font-size: 24px;
			line-height: 32px;
            padding-top: 15px;
            padding-bottom: 15px;
		}
		.detail_para span {
			font-size: 24px;
			line-height: 32px;
		}
		.details {
			width: 80%;
		}
		.detail_image {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.detail_image_1 img {
			width: 100%;
		}
		.detail_image_2 img {
			width: 100%;
		}
		.details_container_1 {
			padding-top: 0px;
		}
		.props {
			padding: 25px 20px;
		}
		.pro h4 {
			font-size: 20px;
			line-height: 24px;
		}
        .prop_head{
	    margin: 15px;
        }
		.prop_head h4{
			font-size: 22px;
		}
		.heading {
			width: 90%;
		}
		.heading_container {
			padding-bottom: 0px;
		}
		.main_heading h3 {
			font-weight: 500;
			font-size: 24px;
			line-height: 28px;
		}
		.main_container {
			padding-top: 20px;
		}

		.details_container_1 {
			background-size: 60%;
			padding-bottom: 50px;
		}
		.details_container_2 {
			background-size: 60%;
		}
		.detail_image_1{
			justify-content: center;
		}
		.name_div .rotate_2{

	display: block;
	}
	.name_div .rotate_1{

display: block;
}

.name_div .rotate_2{

top: -1rem;
}
.name_div .rotate_1{
	top: 8rem;
}

	
		
	}

















    
	/* large screen */
	@media (min-width: 1920px) {
	}
	/* desktops */
	@media (max-width: 1919px) and (min-width: 1500px) {

	}

    @media (max-width: 1500px) and (min-width: 1200px){
        #text {
		
		right: 2rem;
		font-size: 5em;
	
	}
	#text_2 {

		left: 2rem;
		font-size: 5em;
	
	}

    }
	/* laptops */
	@media (max-width: 1199px) and (min-width: 992px) {
        #text {
		
		right: 2rem;
		font-size: 5em;
	
	    }
	    #text_2 {

		left: 2rem;
		font-size: 5em;
	
	    }
        .animation_div #back{
		width: 387px;
  
	    }
        .animation_div #front{
		width: 253px;
  
	    }
        .animation_div #logo{
		width: 70px;

	    }

	}
	/* small tablets */
	@media (max-width: 991px) and (min-width: 768px) {
        #text {
		
		right: 2rem;
		font-size: 5em;
	
	    }
	    #text_2 {

		left: 2rem;
		font-size: 5em;
	
	    }
		.phone_anination_container{
			margin-bottom: 50px;
		}
        .animation_div #back{
		width: 380px;
  
	    }
        .animation_div #front{
		width: 246px;
  
	    }
        .animation_div #logo{
		width: 70px;

	    }
	}
	/* extra small devices */
	@media (max-width: 767px) and (min-width: 418px) {
		.phone_anination_container{
			margin-bottom: 50px;
		}
        #text {
		
		right: 20rem;
		font-size: 3em;
	
	    }
	    #text_2 {

		left: 22rem;
		font-size: 3em;
	
	    }
        .animation_div #back{
		width: 350px;
  
	    }
        .animation_div #front{
		width: 240px;
  
	    }
        .animation_div #logo{
		width: 70px;

	    }
		.names {
	
			max-height: 75vh;
	
	}
	#text {
		
		right: 20rem;
		font-size: 3em;
            display: none;
	    }
	    #text_2 {

		left: 22rem;
		font-size: 3em;
        display: none;
	
	    }
		#assets{
	width: 320px;
	height: 250px;
}


	}

	@media (max-width: 418px) {
		#assets{
	width: 320px;
	height: 250px;
}
.testimonial_inner{
	width: 80vw;
}

        #text {
		
		right: 20rem;
		font-size: 3em;
            display: none;
	    }
	    #text_2 {

		left: 22rem;
		font-size: 3em;
        display: none;
	
	    }
        .animation_div #back{
		width: 330px;
  
	    }
        .animation_div #front{
		    width: 210px;
    		height: 407px;
  
	    }
        .animation_div #logo{
		width: 70px;

	    }
        .names {
		display: flex;
		max-height: 75vh;
		min-height: 600px;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	}
   
</style>