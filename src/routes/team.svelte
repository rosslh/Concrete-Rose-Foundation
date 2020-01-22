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
  import { onMount } from "svelte";
  import TeamImages from "../components/TeamImages.svelte";

  onMount(async () => {
    gtag("config", "UA-93549235-6", { page_path: "/team" });
  });
  export let team = [];
</script>

<svelte:head>
  <title>Our Team | Concrete Rose Foundation</title>
</svelte:head>
<TeamImages {team} />
