<script>

    import template_data from "./data.json";

    let data=template_data

    let all_template_data = data.items

    let newFrame;
    let frame_src;
    let is_preview_enabled=false

    let template_generation_link ='fg'

    function handle_privew_element(template_link,redirect_link){
        console.log("clicked");
        frame_src=template_link
        const iframe = document.getElementById('template_fullscreen_view')
        iframe.src = frame_src
        template_generation_link=redirect_link
        is_preview_enabled=!is_preview_enabled

    }

    function close_template_preview(){
        is_preview_enabled=!is_preview_enabled
    }

    function go_to_create_website(){

    }


</script>



<div class="main_container">

    <div class="view_template_container">
        
        {#if template_data.length<1}
        <h1>no data to show</h1>
        {:else}
        {#each  all_template_data as  templates}
        <div class="templates" on:click={()=>{handle_privew_element(templates.preview_template_link,templates.redirect_link)}}>
            <img src="{templates.template_image}" alt="">
            <h1>{templates.template_name}</h1>
        </div>            
        {/each}
        {/if}
        
    </div>

<div class="preview_container" class:show_preview={is_preview_enabled}>

    <button on:click={close_template_preview}> close template</button>
    <a href="{template_generation_link}"> <button> create website</button> </a>
    <iframe id="template_fullscreen_view" src="{frame_src}" bind:this={newFrame} name="preview-frame" frameborder="0" noresize="noresize" data-view="fullScreenPreview" allow="geolocation 'self'; autoplay 'self'">
    </iframe>
</div>
  

</div>


<style>

.main_container{
    width: 100%;
    height: auto;
}
img{
    width: 300px;
    height: 500px;
}

.preview_container{
         width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        display: none;
}

.preview_container.show_preview{
    display: block;
}


#template_fullscreen_view{
    width: 100%;
    height: 100vh;
}

</style>