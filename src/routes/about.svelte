<script context="module">
  export async function preload() {
    const result = await this.fetch("index.json");
    const { team } = await result.json();
    return {
      team
    };
  }
</script>

<script>
  import TeamImages from "../components/TeamImages.svelte";
  import InfoColumns from "../components/InfoColumns.svelte";
  import Overlay from "../components/Overlay.svelte";
  export let team = [];
</script>

<style>
  .secondColumn {
    background-image: url("/homepage.jpg");
  }

  h2 {
    margin-top: 0;
  }
</style>

<svelte:head>
  <title>Concrete Rose Foundation</title>
</svelte:head>
<div class="root">
  <div class="contentWrapper">
    <div class="twoColumns">
      <div class="firstColumn">
        <h2>About Us</h2>
        <div>
          Commodo deserunt excepteur incididunt anim culpa deserunt. Elit Lorem
          irure sunt nisi reprehenderit cillum. Labore sint ipsum tempor
          exercitation est cupidatat deserunt ullamco elit fugiat proident
          eiusmod non culpa.
        </div>
      </div>
      <div class="secondColumn" />
    </div>
  </div>
  <Overlay title="Who We Are">
    Individual pictures here?
    <TeamImages {team} />
  </Overlay>
</div>
