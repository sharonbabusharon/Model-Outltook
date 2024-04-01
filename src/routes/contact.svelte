<script>
  let FormData = {
    firstname: "",
    lastname: "",
    message: "",
    number: "",
  };

  let errors = {};

  async function handlesubmit() {
    const response = await fetch("/api/saveformdata", {
      method: "POST",
      body: JSON.stringify(FormData),
      headers: {
        "content-type": "application/json",
      },
    });

    console.log("Form Validated");
    console.log(FormData);
    alert("your response has been successfully submitted");

    await response.json();
    document.getElementById("myForm").reset();

    errors = {};
  }

  function validateform() {
    if (
      FormData.firstname.trim() === "" ||
      !/^[a-zA-Z\s]*$/.test(FormData.firstname)
    ) {
      errors.firstname = "Please Enter a Valid First Name";
      return;
    } else {
      if (errors.firstname) {
        delete errors.firstname;
      }
    }

    if (
      FormData.lastname.trim() === "" ||
      !/^[a-zA-Z\s]*$/.test(FormData.lastname)
    ) {
      errors.lastname = "Please Enter a Valid Second Name";
      return;
    } else {
      if (errors.lastname) {
        delete errors.lastname;
      }
    }

    if (!FormData.message.length) {
      errors.message = "Please Enter a Message";
      return;
    } else {
      if (errors.message) {
        delete errors.message;
      }
    }

    if (FormData.number === "" || !/^[0-9]{10}$/.test(FormData.number)) {
      errors.number = "Please Enter a Valid 10-Digit Contact Number";
      return;
    } else {
      if (errors.number) {
        delete errors.number;
      }
    }
    // if (!FormData.number) {
    //   errors.number = "Please Enter a Valid 10-Digit Contact Number";
    // }

    // if (Object.keys(errors).length === 0) {
    //   return true;
    // }

    handlesubmit();
  }
</script>

<div class="main_container" id="contact_form_div">
  <div class="form">
    <!-- on:submit|preventDefault={handlesubmit} -->
    <form id="myForm" on:submit|preventDefault={validateform}>
      <div class="title">Contact Us</div>
      <div class="subtitle">Let's create your MODEL OUTLOOK.</div>
      <div class="names">
        <div class="input-container ic1">
          <input
            id="firstname"
            class="input"
            bind:value={FormData.firstname}
            type="text"
            placeholder=" "
          />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">First name</label>
          {#if errors.firstname}
            <p id="error">{errors.firstname}</p>
          {/if}
        </div>
        <div class="input-container ic2">
          <input
            id="lastname"
            class="input"
            type="text"
            bind:value={FormData.lastname}
            placeholder=" "
          />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">Last name</label>
          {#if errors.lastname}
            <p id="error">{errors.lastname}</p>
          {/if}
        </div>
      </div>

      <div class="input-container ic2">
        <input
          id="message"
          class="input"
          type="text"
          bind:value={FormData.message}
          placeholder=" "
        />
        <div class="cut cut-short"></div>
        <label for="message" class="placeholder">Message</label>
        {#if errors.message}
          <p id="error">{errors.message}</p>
        {/if}
      </div>

      <div class="input-container ic2">
        <input
          id="number"
          class="input"
          type="number"
          bind:value={FormData.number}
          placeholder=" "
        />
        <div class="cut"></div>
        <label for="number" class="placeholder">Contact Number</label>
        {#if errors.number}
          <p id="error">{errors.number}</p>
        {/if}
      </div>

      <button type="submit" class="submit">Submit</button>

    </form>

    <div class="or_container" style="color: white;">
      <h3 style="font-style: italic;">Or</h3>
    </div>

    <div class="button_container">
    <a target="_blank" href="https://wa.me/7994844456"><button style="margin-top: 28px;" class="submit green" type="submit">Contact Us<i style="margin-left: 10px;" class="fa-brands fa-whatsapp"></i></button></a>
  </div>
  </div>

  
</div>

<style>
  .button_container{
    width: 40%;
  }
  .button_container .green{
    background-color: green !important;
  }
  .button_container button{
    width: 100%;
  }
  .main_container {
    widows: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00003d;
    padding-bottom: 60px;
    padding-top: 60px;
  }
  #error {
    color: red;
    margin-top: 6px;
    z-index: 1;
  }
  form {
    width: 40%;
    height: auto;
  }
  .form {
    box-sizing: border-box;
    height: auto;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    color: #eee;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
  }

  .subtitle {
    color: #eee;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }

  .input-container {
    height: 50px;
    position: relative;
    width: 100%;
  }

  .ic1 {
    margin-top: 50px;
  }

  .ic2 {
    margin-top: 50px;
  }

  .input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
  }

  .cut {
    background-color: #00003d;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76%;
    z-index: -1;
  }
  .names {
    width: 100%;
    height: aut0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  .cut-short {
    width: 86%;
    z-index: -1;
  }

  .input:focus ~ .cut,
  .input:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
  }

  .placeholder {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition:
      transform 200ms,
      color 200ms;
    top: 20px;
  }

  .input:focus ~ .placeholder,
  .input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  .input:not(:placeholder-shown) ~ .placeholder {
    color: #808097;
  }

  .input:focus ~ .placeholder {
    color: #dc2f55;
  }

  .submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    margin-bottom: 28px;
    text-align: center;
    width: 100%;
  }

  .submit:active {
    background-color: #06b;
  }


  /* large screen */
	@media (min-width: 1920px) {
	}
	/* desktops */
	@media (max-width: 1919px) and (min-width: 1200px) {

	}
	/* laptops */
	@media (max-width: 1199px) and (min-width: 992px) {


	}
	/* small tablets */
	@media (max-width: 991px) and (min-width: 768px) {
	
	}
	/* extra small devices */
	@media (max-width: 767px) and (min-width: 418px) {
  	#myForm{
      width: 90%;
    }
         .button_container{
    width: 90%;
  }
	
	}

	@media (max-width:418px){
		#myForm{
      width: 90%;
    }

     .button_container{
    width: 90%;
  }
	}


</style>
