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
  import { _ } from "svelte-i18n";

  import InfoColumns from "../components/InfoColumns.svelte";
  import Overlay from "../components/Overlay.svelte";
</script>

<style>
  .secondColumn {
    background-image: url("/homepage.jpg");
  }
</style>

<svelte:head>
  <title>Concrete Rose Foundation</title>
</svelte:head>
<div class="root">
  <div class="contentWrapper">
    <div class="twoColumns">
      <div class="firstColumn">
        <h2>{$_('page_title')}</h2>
        <div>
          Commodo deserunt excepteur incididunt anim culpa deserunt. Elit Lorem
          irure sunt nisi reprehenderit cillum. Labore sint ipsum tempor
          exercitation est cupidatat deserunt ullamco elit fugiat proident
          eiusmod non culpa. Aliquip ad do elit consectetur laboris eiusmod nisi
          sit. Enim nisi proident nisi exercitation et ex culpa pariatur.
        </div>
      </div>
      <div class="secondColumn" />
    </div>
  </div>
  <Overlay title="Our Work">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <InfoColumns />
  </Overlay>
</div>
