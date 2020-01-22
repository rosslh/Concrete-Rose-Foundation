<script context="module">
  export async function preload() {
    const result = await this.fetch("index.json");
    const { timeline } = await result.json();
    return {
      timeline
    };
  }
</script>

<script>
  import { onMount } from "svelte";

  import InfoColumns from "../components/InfoColumns.svelte";

  onMount(async () => {
    gtag("config", "UA-93549235-6", { page_path: "/" });
  });
</script>

<style>
  div.fullScreen {
    width: 100%;
    background-clip: border-box;
    background-origin: padding-box;
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: cover;
    box-sizing: border-box;
  }

  div.fullScreen p {
    font-style: italic;
    font-size: 1.5rem;
    line-height: 3rem;
    font-weight: 500;
    color: #eee;
    text-shadow: 0px 0px 1px #222;
  }
  div.fullScreen > div.fullScreenContent {
    min-height: calc(100vh - 3rem); /* 3rem is nav height */
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    box-sizing: border-box;
  }

  div.infoColumnSection {
    background-color: #f9f9f9;
    padding: 3rem 0;
    margin-bottom: 6rem;
  }

  div.logoWrapper {
    max-height: 14rem;
    max-width: 14rem;
    margin: 0 auto 3rem;
  }
  .logo > * {
    height: 100%;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Concrete Rose Foundation</title>
</svelte:head>
<div class="root">
  <div class="fullScreen" style="background-image: url('background.jpg')">
    <div class="fullScreenContent">
      <div class="contentWrapper">
        <div class="logoWrapper">
          <picture class="logo">
            <source srcset="logo-white.webp" type="image/webp" />
            <source srcset="logo-white.png" type="image/png" />
            <img src="logo-white.png" alt="Concrete Rose Foundation" />
          </picture>
        </div>
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.”
        </p>
      </div>
    </div>
  </div>
  <div class="infoColumnSection">
    <div class="contentWrapper">

      <h2>Who we are</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <InfoColumns />
    </div>
  </div>
</div>
