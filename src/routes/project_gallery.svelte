<script>
    // @ts-nocheck

    let website_data = {
        categories: [
            {
                display_name: "Custom Websites",
                unique_id: "car_1",
            },
            {
                display_name: "Standard Website",
                unique_id: "car_2",
            },
            {
                display_name: "Basic Website",
                unique_id: "car_3",
            },
        ],
        items: [
            {
                website_image: {
                    url: "/assets/project_gallery/ann_james.webp",
                },
                website_link: "https://modeloutlook.com/Ann_James",
                category: "car_1",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/appu.webp",
                },
                website_link: "https://modeloutlook.com/Appu",
                category: "car_1",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/aryan.webp",
                },
                website_link: "https://modeloutlook.com/Aryan_Kathuria",
                category: "car_1",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/athirs.webp",
                },
                website_link: "https://modeloutlook.com/Athira_Ravi",
                category: "car_2",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/ayisha.webp",
                },
                website_link: "https://modeloutlook.com/Ayisha__Nashva",
                category: "car_2",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/bensyrah.webp",
                },
                website_link: "https://bensyrah.com/",
                category: "car_2",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/chinju.webp",
                },
                website_link: "https://chinjumadhusudhanan.in/",
                category: "car_2",
            },

            {
                website_image: {
                    url: "/assets/project_gallery/fiona.webp",
                },
                website_link: "https://modeloutlook.com/FIONA_ROSE",
                category: "car_3",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/heaven.webp",
                },
                website_link: "https://modeloutlook.com/Heaven_Zairah",
                category: "car_3",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/ishan.webp",
                },
                website_link: "https://modeloutlook.com/Ishan_M_Anto",
                category: "car_3",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/kid.webp",
                },
                website_link: "https://sashaisla.in/",
                category: "car_3",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/leona.webp",
                },
                website_link: "https://modeloutlook.com/Janviya",
                category: "car_3",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/mahin.webp",
                },
                website_link: "https://modeloutlook.com/MAHIN_MONTIKA",
                category: "car_3",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/ramseena.webp",
                },
                website_link: "https://modeloutlook.com/Ramseena_R_Rahim",
                category: "car_3",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/ramya.webp",
                },
                website_link: "https://modeloutlook.com/RAMYA_SUKUMARAN",
                category: "car_3",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/rithu.webp",
                },
                website_link: "https://modeloutlook.com/Rithu_manthra",
                category: "car_3",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/sarath_chandran.webp",
                },
                website_link: "https://modeloutlook.com/Sarath__chandran",
                category: "car_3",
            },
            {
                website_image: {
                    url: "/assets/project_gallery/tess.webp",
                },
                website_link: "https://modeloutlook.com/TESSA_BIJO",
                category: "car_3",
            },
        ],
    };
    let selected_category_unique_id = null;
    function handle_new_category_selected(unique_id) {
        if (selected_category_unique_id === unique_id) {
            return;
        }
        selected_category_unique_id = unique_id;
    }
</script>

<section>
    <h1>Model Outlooks</h1>
    <!-- <p>Custom websites</p> -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- <div class="website_data">
        <ul>
            <li
                on:click={() => {
                    handle_new_category_selected(null);
                }}
                class:selected={selected_category_unique_id == null}
                value=""
            >
                All
            </li>
            {#each website_data.categories as category}
 
                <li
                    on:click={() => {
                        handle_new_category_selected(category.unique_id);
                    }}
                    class:selected={selected_category_unique_id ===
                        category.unique_id}
                    value={category.unique_id}
                >
                    {category.display_name}
                </li>
            {/each}
        </ul>
    </div> -->

    <section class="main">
        {#each website_data.items as web_data}
            <div
                class="wrap wrap--1"
                
            >
                <a href={web_data.website_link} target="_blank">
                    <div
                        class="main_container"
                        style="background-image: url(/assets/project_gallery/mobile.png)"
                    >
                        <img src={web_data.website_image.url} alt="" />
                    </div>
                </a>
            </div>
        {/each}
    </section>
</section>

<style>
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .wrap.d-n {
        display: none;
    }
    .wrap {
        display: block;
    }

    section {
        /* --background-color: hsl(180, 20%, 90%); */
        font-size: 62.5%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        height: auto;
        padding: 2rem;
        color: hsla(0, 0%, 0%, 0.6);
        background: var(--background-color);
        text-align: center;
        margin-bottom: 40px;
    }
    ul {
        list-style-type: none;
        margin-bottom: 50px;
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }

    ul li {
        display: inline-block;
        padding: 5px;
        border-bottom: 2px solid transparent;
        transition: border-bottom-color 300ms ease;
        cursor: pointer;
        font-size: 18px;
    }
    ul li.selected {
        border-bottom: 2px solid #e1002f;
    }
    /* section.pc .car_categories ul {
		display: block;
	} */
    h1 {
        font-size: 2.2rem;
        padding-top: 2rem;
    }

    .main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .wrap {
        margin: 2rem;
        transform-style: preserve-3d;
        transform: perspective(100rem);
        cursor: pointer;
        overflow: hidden;
    }
    .main_container:hover {
        transform: scale(1);
    }

    .main_container {
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        /* width: 566px; */
        height: auto;
        position: relative;
        z-index: 3;
        padding: 15px 54px 14px 54px;
        overflow: hidden;
        transform: scale(0.9);
        transition: all 200ms ease-in;
    }
    img {
        inset: 0;
        width: 260px;
        height: auto;
        border-radius: 34px;
    }
    @media only screen and (max-width: 600px) {
        section {
            padding: 0;
        }
        .main_container {
            padding: 15px 29px 9px 30px;
        }
        img {
            width: 250px;
        }
        ul {
            flex-wrap: wrap;
        }
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

        section{
            overflow: scroll;
        }
        .main{
            flex-wrap: nowrap;
            justify-content: none;
        }
        .wrap{
            overflow: visible;
        }
	}
	/* extra small devices */
	@media (max-width: 767px) and (min-width: 418px) {

        section{
            overflow: scroll;
        }
        .main{
            flex-wrap: nowrap;
             justify-content: flex-start;
        }
        .wrap{
            overflow: visible;
        }
	
	
	}

	@media (max-width:418px){
         section{
            overflow: scroll;
        }
        .main{
            flex-wrap: nowrap;
            justify-content: flex-start;
        }
        .wrap{
            overflow: visible;
        }
		
	}
</style>
