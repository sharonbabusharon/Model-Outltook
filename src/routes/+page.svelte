 <script>
    import Landing from "./landing.svelte";
    import About from "./about.svelte";
    import Contact from "./contact.svelte";
    import Testimonial from "./testimonial.svelte";
    import MoreDetails from "./more_details.svelte";
    // import Preloader from "./preloader.svelte";
 


  // let loading = true;
  // setTimeout(() => {
  //   loading = false;
  // }, 4100);
 </script>


<div>


<!-- {#if loading} -->
<!-- <Preloader/> -->
<!-- {/if}
{#if !loading} -->

<Landing/>
<About/>

<MoreDetails/>

<!-- {/if} -->


 </div>


 <style>


 </style>