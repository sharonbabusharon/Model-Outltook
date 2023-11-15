<svelte:options accessors/>

<script>
    import { env } from '$env/dynamic/public'
    import {onMount} from "svelte";

    //let section_name;
    export let
        meta_title, // whatsapp preview top line
        meta_description;  // whatsapp middle line

    meta_title = 'Model Outlook - Portfolio Websites: Your Work, Magnificently Displayed';
    meta_description = 'Your journey, our canvas';

    const PUBLIC_WEBSITE_ROOT_URL = env.PUBLIC_WEBSITE_ROOT_URL || 'https://www.modeloutlook.com';
    const COMPANY_NAME = env.COMPANY_NAME || 'Binary Technologies';
    const PUBLIC_DOMAIN_NAME = env.PUBLIC_DOMAIN_NAME || 'www.modeloutlook.com';

    let website_full_url = PUBLIC_WEBSITE_ROOT_URL;
    let meta_tag_image_full_url = `${website_full_url}/logos/model_outlook_square_logo.jpg`;
    let meta_tag_thumb_full_url = `${website_full_url}/logos/model_outlook_square_logo.jpg`;

    onMount(() => {
        // console.log('env', env)
    });

</script>


<svelte:head>

    <meta name="bigdate:platform_meta_tags_start">
    <title>{meta_title}</title>

    <meta name="title" content="{meta_title}">
    <meta name="description" content="{meta_description}">
    <meta name="author" content="{COMPANY_NAME}">
    <meta name="designer" content="{COMPANY_NAME}">

    <meta property="og:title" content="{meta_title}">
    <meta property="og:description" content="{meta_description}">
    <meta property="og:url" content="{website_full_url}">
    <meta property="og:site_name" content="{PUBLIC_DOMAIN_NAME}">

    <meta property="og:image:url" content="{meta_tag_image_full_url}">
    <meta property="og:image" itemprop="image" content="{meta_tag_image_full_url}">
    <meta property="og:image:width" content="512">
    <meta property="og:image:height" content="512">

    <meta property="og:locale" content="en_IN">
    <meta property="og:type" content="website">

    <link rel="icon" sizes="256x256" href="{meta_tag_thumb_full_url}">
    <link rel="icon" sizes="512x512" href="{meta_tag_thumb_full_url}">
    <link rel="apple-touch-icon" sizes="180x180" href="{meta_tag_thumb_full_url}">
    <link rel="icon" type="image/png" href="{meta_tag_thumb_full_url}">

    <meta name="bigdate:platform_meta_tags_end">

</svelte:head>


