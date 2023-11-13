<script>
    import {onMount} from "svelte"

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
              url:"/assets/testimonial/sarath.jpg"
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
                 <a href="{testimonial.customer_link}">view portfolio</a>
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


</div>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

    .main_container{
        
        /* display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center; */
        margin: 40px 15px;
        font-family: 'Poppins', sans-serif;

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
    width:80vw;
    box-shadow: 0px 5px 30px 0px rgba(167, 167, 167, 0.16);
    padding: 8px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    padding-top: 38px;
    padding-inline: 12px;
    padding-bottom: 30px;
  }
  .customer_name{
    font-weight: 800;
    font-size: 1.5rem;
    
    font-family: 'Poppins', sans-serif;
  }
  .testimonial_inner .para{
     font-weight: 500;
     font-family: 'Poppins', sans-serif;
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
</style>