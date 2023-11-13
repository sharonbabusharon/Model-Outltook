<script>
    import {onMount} from "svelte"

</script>

<div>
    <div class="main_container">
        <div class="more_details">
          
          <div class="main_div">
            <div class="main_heading">
              <h2 id="head">Support Whenever
                You Need It</h2>
                <div class="sub_div">
                  <div class="sub_text">
                    <h2>Real-time support to grow your portfolio.</h2>
                  </div>
                </div>
            </div>
          </div>
  
          
          <div class="details_div">
            <div class="detail_container">
              <div class="details">
                <div class="main_content">
                  <div class="content_image">
                    <img  loading="lazy"  src="/assets/more/image1.png" alt="">
                  </div>
                  <div class="content_details">
                    <div class="content_heading">
                      <h2>Templates that are designed to look great on mobile devices.</h2>
                    </div>
                    <div class="content_para">
                      <p>Fully responsive templates, pages, and layouts are designed for a mobile-first experience so your work looks amazing on any screen.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="details_div">
            <div class="detail_container">
              <div class="details">
                <div class="main_content_2">
                  <div class="content_image_2">
  
                    <div class="images">
                      <img  loading="lazy"  src="/assets/more/image3.png" alt="">
                      <img  loading="lazy" src="/assets/more/image5.png" alt="">
                    </div>
                    
                  </div>
                  <div class="content_details">
                    <div class="content_heading">
                      <h2>Update your website yourself</h2>
                    </div>
                    <div class="content_para">
                      <p>Launch your new site as quickly as possible with hands-on help. Our Format Experts can build your photography website for you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="details_div">
            <div class="detail_container">
              <div class="details">
                <div class="main_content">
                  <div class="content_image_3">
  
                    <div class="images">
                      <img  loading="lazy" src="/assets/more/time2.png" alt="">
                      <img  loading="lazy" src="/assets/more/time3.png" alt="">
                    </div>
  
                  </div>
                  <div class="content_details">
                    <div class="content_heading">
                      <h2>24/7 help and support.</h2>
                    </div>
                    <div class="content_para">
                      <p>Our support team is made up of creators like you who are available to answer all Format questions 24/7. Go ahead, ask us anything about your portfolio website.</p>
                      <!-- <i class="fa-brands fa-instagram"></i>
                      <i class="fa-brands fa-whatsapp"></i>
                      <i class="fa-brands fa-square-facebook"></i>
                      <i class="fa-solid fa-location-dot"></i>
                      <i class="fa-solid fa-phone"></i>
                      <i class="fa-solid fa-envelope"></i> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
  
        </div>
      </div>
</div>

<style>


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');


  .main_container{
    width: 100%;
    height: auto;
  }
  .more_details{
    width: 100%;
    height: auto;
  }
  .main_div{
    width: 100%;
    height: 400PX;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://www.format.com/wp-content/uploads/support.png);
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 50px;
    position: relative;
  }

  .main_heading{
    width: 65%;
    height: auto;
  }
  #head{
    font-size: 60px;
    line-height: 80px;
    max-width: 50%;
    font-weight: 500;
    color: #FCBD18;
    font-family: 'Poppins', sans-serif;
  }
  .sub_div{
    width: 300px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 21rem;
    background-color: #FF6550;
  }
  .sub_text{
    max-width: 70%;
    height: auto;
    color: white;
  }
  .sub_text h2{
    font-size: 28px;
    line-height: 35px;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
  }
  .details_div{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
  .detail_container{
    width: 65%;
    height: auto;
    display: flex;
    justify-content: end;
  }
  .details{
    width: 60%;
    height: auto;
  }
  .main_content{
    width: 100%;
    height: auto;
    display: flex;
  }
  .main_content_2{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
  }
  .content_image{
    width: 300px;
    margin: 20px;
    height: auto;
  }
  .content_image img{
    max-width: 280px;
    height: auto;

  }
  .content_image_2{
    width: 300px;
    margin: 20px;
    height: auto;
    position: relative;

  }
  .images{
    width: 300px;
    height: 200px
  }
  .content_image_2 img{
    max-width: 280px;
    height: auto;
    position: absolute;
  }


  .content_image_3{
    width: 300px;
    margin: 20px;
    height: auto;
    position: relative;

  }
  .images{
    width: 300px;
    height: 200px
  }
  .content_image_3 img{
    max-width: 280px;
    height: auto;
    position: absolute;
  }
 
  .content_details{
    width: 60%;
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .content_heading h2{
    font-family: 'Poppins', sans-serif;
  }
  .content_para p{
    font-family: 'Poppins', sans-serif;
    color:#6A6972;
  }




  /* large screen */
@media (min-width:1920px)  {


}
/* desktops */
@media (max-width:1919px) and (min-width:1600px) {


}
@media (max-width:1600px) and (min-width:1200px) {

.main_content{
  flex-direction: column;
}
.main_content_2{
  flex-direction: column;
}
.content_details{
  width: 100%;
}
}
/* laptops */
@media (max-width:1199px) and (min-width:992px) {

  .main_content{
  flex-direction: column;
}
.main_content_2{
  flex-direction: column;
}
.content_details{
  width: 100%;
}

.main_div{
  margin-bottom: 250px;
}
.detail_container{
  justify-content: center;
}

}
/* small tablets */
@media (max-width:991px) and (min-width:768px) {
  .main_content{
  flex-direction: column;
}
.main_content_2{
  flex-direction: column;
}
.content_details{
  width: 100%;
}

.main_div{
  margin-bottom: 250px;
}
.detail_container{
  justify-content: center;
  width: 100%;
}

}
/* extra small devices */
@media (max-width:767px) and  (min-width:418px) {
  .main_content{
  flex-direction: column;
}
.main_content_2{
  flex-direction: column;
}
.content_details{
  width: 100%;
}

.main_div{
  margin-bottom: 250px;
}
.detail_container{
  justify-content: center;
  width: 100%;
}
.details{
  width: 80%;

}
}

@media(max-width:418px){
  .main_heading{
    width: 80%;
  }
  .main_content{
  flex-direction: column;
}
.main_content_2{
  flex-direction: column;
}
.content_details{
  width: 100%;
}

.main_div{
  margin-bottom: 250px;
}
.detail_container{
  justify-content: center;
  width: 100%;
}
.details{
  width: 80%;

}
.details_div{
  margin-bottom: 0px;
}
.content_image{
  width: 260px;
}
.content_image_2{
  width: 260px;
}
.images{
  width: 260px;
}
.content_image_3{
  width: 260px;
}
.content_image img{
  width: 260px;
}
.content_image_2 img{
  width: 260px;
}
.content_image_3 img{
  width: 260px;
}
#head{
  font-size: 40px;
    line-height: 50px;
    max-width: 100%;
    
}
.sub_text h2{
  font-size: 22px;
    line-height: 30px;
}
.content_heading h2{
  font-size: 24px;
    line-height: 32px;
    font-weight: 600;
}
.content_para p{
  font-size: 16px;
    line-height: 26px;
    font-weight: 400;
}
}
</style>