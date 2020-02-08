<script context="module">
  import { waitLocale, locale } from "svelte-i18n";

  export async function preload() {
    // awaits for the loading of the 'en-CA' and 'en' dictionaries
    return waitLocale();
  }
</script>

<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    margin-bottom: 3rem;
  }

  .rtl {
    direction: rtl;
  }
</style>

<Nav {segment} />
<main class={$locale.startsWith('ar') ? 'rtl' : ''}>
  <slot />
</main>
