

<slot></slot>

<script>
    import {onMount} from "svelte"
	import MetaTags from "./MetaTags.svelte";

</script>

<MetaTags/>

<div>
	<div class="main_container"  itemscope itemtype="https://schema.org/Organization">
		<div class="elipse_1">
			<img src="/assets/elip1.png" alt="" />
		</div>
		<div class="contact_container" id="contact_div">
			<div class="contact">
				<div class="first_container">
					<div class="logo_main"  itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
						<meta itemprop="caption" content="Model Outlook Logo"/>
						<img itemprop="contentUrl" src="/assets/contact/Model_outlook_logo_Transparent.png" alt="" />
					</div>
					<div class="heading">
						<h3  itemprop="brand" itemscope itemtype="https://schema.org/Brand">Model Outlook</h3>
					</div>
					<div class="contact_about">
						<p  itemprop="description">
							We are dedicated to your success, and our team is here to assist you every step of the way. Feel free to reach out with any questions or feedback, we're excited to be part of your modeling journey!
						</p>
					</div>
					<div class="contact_links">
						<div class="instagram">
							<a id="links"  href="https://instagram.com/binary.technologies?igshid=MzMyNGUyNmU2YQ=="><i class="fa-brands fa-instagram logo" /></a>
						</div>
						<div class="whatsapp">
							<a id="links"  href="tel:7994844456"><i class="fa-solid fa-phone logo" /></a>
						</div>
						<div class="email">
							<a id="links"  href="mailto:sales@binarytechs.in"><i class="fa-regular fa-envelope logo" /></a>
						</div>
					</div>

					<div class="contact_address">
						<div class="address">
							<div class="address_head">
								<h4>office</h4>
							</div>
							<p  itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">Binary Technologies

								Room No. 67/4333, Ground Floor
								
								Swapnil Enclave
								
								Marine Drive, Kochi
								
								Kerala 682031</p>
						</div>
					</div>
				</div>

				<div class="second_container">
					<div class="second_container_first_part"  itemscope itemtype="https://schema.org/CreativeWork">
						<div class="resourses">
							<div class="resourse_head">
								<h4>Social</h4>
							</div>
							<div class="resourse_content"  itemscope itemtype="https://schema.org/CreativeWork">
								<p><a id="links1"  itemprop="url"   href="https://instagram.com/binary.technologies?igshid=MzMyNGUyNmU2YQ==">Instagram</a></p>
								<p><a id="links1"  itemprop="url"   href="https://twitter.com/BinaryTechsIN">Twitter</a></p>
								<p><a id="links1"  itemprop="url"   href="https://www.linkedin.com/company/binarytechs/">Linkedin</a></p>
							</div>
						</div>
						<div class="company">
							<div class="company_head">
								<h4>company</h4>
							</div>
							<div class="company_content" itemscope itemtype="https://schema.org/CreativeWork">
			
								<p><a id="links1"  itemprop="url"   href="/whymodeloutlook">Why Us?</a></p>
								<p><a id="links1"  itemprop="url"   href="/privacy_and_policy">Privacy Policy</a></p>
								<p><a id="links1"  itemprop="url"   href="/refund_policy">Refund policy</a></p>
								<p><a id="links1"  itemprop="url"   href="/terms_and_conditions">Terms and Conditions</a></p>
								
							</div>
						</div>
						
					</div>

					<div class="second_container_second_part">
						<div class="second_container_second_part_content">
							<h4>support</h4>
						</div>
						<div class="second_container_second_part_contents_list"   itemscope itemtype="https://schema.org/CreativeWork">
							<p><a id="links" href="mailto:sales@binarytechs.in">sales@binarytechs.in</a> </p>
							<p><a  id="links" href="tel:7994844456">+91 7994844456</a> </p>
							<!-- <p>FAQ's</p>
							<p>Support</p> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
	.main_container {
		width: 100%;
		height: auto;
		overflow: hidden;
        margin-top: 50px;
		background-color: rgba(255, 255, 255, 1.5);
	}
	
	.elipse_1 {
		width: 100%;
		height: auto;
		overflow: hidden;
		position: relative;
	}
	.elipse_1 img {
		width: 400px;
		right: -1rem;
		position: absolute;
	}

	.contact_container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: end;
		background: url(/assets/contact/background2.png);
		background-color: rgba(255, 255, 255, 1.5);
		/* opacity: 0.25; */
		
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: bottom;
		padding-top: 150px;
	}

	.contact {
		width: 70%;
		height: auto;
		display: flex;
		margin-bottom: 120px;
	}
	.contact p {
		color: white;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		font-family: 'Poppins', sans-serif;
		/* margin: 0px; */
	}

	.contact h3 {
		color: white;

		font-family: 'Poppins', sans-serif;
		text-transform: uppercase;
		margin-bottom: 20px;
	}
	.logo_main {
		width: 40px;
		height: 40px;
		margin-bottom: 10px;
		margin-top: 20px;
	}
	.logo_main img {
		width: 100%;
	}
	.heading h3{
		color: #F8DE22;
	}
	.contact h4 {
		color: white;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		font-size: 0.975rem;
		line-height: 1.25rem;
		text-transform: uppercase;
		margin-bottom: 10px;
	}
	.contact_about p {
		max-width: 70%;
		font-family: 'Poppins', sans-serif;
	}
	.contact_links {
		display: flex;
		margin-bottom: 30px;
		margin-top: 20px;
	}
	.logo {
		font-size: 30px;
		margin-right: 20px;
		color: white;
	}
	.first_container {
		width: 100%;
		height: auto;
	}
	.second_container {
		width: 100%;
		height: auto;
	}
	.second_container_first_part {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
	}
	.address p {
		max-width: 70%;
		font-family: 'Poppins', sans-serif;
	}

	.png_images img:hover {
		transform: rotate(20deg);
	}
	.sales_content p {
		word-break: break-all;
		font-size: 16px;
	}

	#links{
		text-decoration: none;
		color: white;
	}
	#links1{
		text-decoration: none;
		color: white;
	}

	@media (min-width: 1920px) {
	}
	/* desktops */
	@media (max-width: 1919px) and (min-width: 1200px) {
		.contact_container {
			height: 100%;
		}
	}
	/* laptops */
	@media (max-width: 1199px) and (min-width: 992px) {
		.contact {
			flex-direction: column;
			width: 80%;
			margin-bottom: 50px;
			margin-top: 50px;
		}
		.contact_container {
			height: 100%;
		}
		.contact h4 {
			font-weight: 700;
			font-size: 0.875rem;
			line-height: 1.25rem;
			color: white;
		}
		
		.second_container_first_part {
			gap: 13px;
			margin-bottom: 30px;
		}
		.contact p {
			font-size: 0.875rem;
			line-height: 1.25rem;
			font-weight: 500;
		}
		.second_container {
			font-size: 0.875rem;
			line-height: 1.25rem;
			font-weight: 500;
		}
		.contact_address {
			margin-bottom: 30px;
		}
		.contact p {
			max-width: 100%;
			color: white;
		}
		.logo {
			color: white;
			margin-top: 20px;
			margin-bottom: 20px;
		}
		.contact h3 {
			color: white;
		}
		#links{
			color: white;
		}
	}
	/* small tablets */
	@media (max-width: 991px) and (min-width: 768px) {
		.contact {
			flex-direction: column;
			width: 80%;
			margin-bottom: 50px;
			margin-top: 50px;
		}
		.contact_container {
			height: auto;
			
		}
		.contact h4 {
			font-weight: 700;
			font-size: 0.875rem;
			line-height: 1.25rem;
			color: white;
		}

		.second_container_first_part {
			gap: 13px;
			margin-bottom: 30px;
		}
		.contact p {
			font-size: 0.875rem;
			line-height: 1.25rem;
			font-weight: 500;
		}
		.second_container {
			font-size: 0.875rem;
			line-height: 1.25rem;
			font-weight: 500;
		}
		.contact_address {
			margin-bottom: 30px;
		}
		.contact p {
			max-width: 100%;
			color: white;
		}
		.logo {
			color: white;
			margin-top: 20px;
			margin-bottom: 20px;
		}
		.contact h3 {
			color: white;
		}
		#links{
			color: white;
		}
	}
	/* extra small devices */
	@media (max-width: 767px) and (min-width: 418px) {
		.contact {
			flex-direction: column;
			width: 80%;
			margin-bottom: 50px;
			margin-top: 20px;
		}
		.contact_container {
			height: auto;
			padding-top: 0px;
		}
		.contact h4 {
			font-weight: 700;
			font-size: 0.875rem;
			line-height: 1.25rem;
			color: black;
		}
	
		.second_container_first_part {
			gap: 13px;
			margin-bottom: 30px;
		}
		.contact p {
			font-size: 0.875rem;
			line-height: 1.25rem;
			font-weight: 500;
		}
		.second_container {
			font-size: 0.875rem;
			line-height: 1.25rem;
			font-weight: 500;
		}
		#links{
			color: white;
		}
		#links1{
		text-decoration: none;
		color: white;
	}
		.contact_address {
			margin-bottom: 30px;
		}
		.contact p {
			max-width: 100%;
			color: black;
			font-weight: 600;
		}
		.logo {
			color: #6a6972;
			margin-top: 20px;
			margin-bottom: 20px;
		}
		.contact h3 {
			color: black;
		}
		.second_container_second_part h4{
			color: white;
		}
	}

	@media (max-width: 418px) {
		.contact {
			flex-direction: column;
			width: 80%;
			margin-bottom: 50px;
		}
		.contact_container {
			height: auto;
			padding-top: 0px;
			background-position: -60% 120%;
		}
		.contact h4 {
			font-weight: 900;
			font-size: 0.999rem;
			line-height: 1.25rem;
			color: rgb(41, 41, 41);
		}
	
		.second_container_first_part {
			gap: 16px;
			margin-bottom: 30px;
		}
	
		.second_container {
			font-size: 0.875rem;

			font-weight: 500;
		}
		.contact_address {
			margin-bottom: 30px;
		}
		.contact p {
			max-width: 100%;
			color: rgb(0, 0, 0);
			font-size: 15px;
			margin-bottom: 0.2rem;
			line-height: 28px;
			font-weight: 500;
			margin: 0px;
		}
		.logo {
			color: black;
			margin-top: 20px;
			margin-bottom: 20px;
		}
		.contact h3 {
			color: #FCBD18;
			font-size: 24px;
			font-weight: 900;
		}
		.sales_content p {
			word-break: break-all;
			font-size: 14px;
		}
		/* #links{
			color: rgb(0, 0, 0);
		} */
		.resourse_content p{
			color: black;
		}
		.second_container_second_part h4{
			color: white;
		}
		.second_container_second_part_contents_list p{
			color: white;
		}
		#links1{
		text-decoration: none;
		color: black;
	}
	}


</style>