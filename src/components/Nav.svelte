<script>
  export let segment;

  import { locale } from "svelte-i18n";

  $: nextLocale = $locale.startsWith("en") ? "ar" : "en";
</script>

<style>
  nav {
    font-weight: 700;
    font-size: 0.9rem;
    top: 0;
    left: 0;
    right: 0;
    min-height: 10rem;
    /* overflow: hidden; */
    box-sizing: content-box;
    z-index: 24;
    display: flex;
    align-items: flex-start;
    padding: 0 1rem;
    margin-bottom: -4rem;
  }

  nav > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-grow: 1;
  }

  a.selected {
    color: var(--themeColor) !important;
  }

  a,
  button {
    position: relative;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
    color: var(--darkGrey) !important;
    min-height: 5rem;
    border: none;
    background: none;
  }

  .logo {
    margin-top: 1rem;
  }
  .logo > * {
    max-height: 10rem;
  }

  .linkWrapper {
    display: flex;
    justify-content: space-between;
  }

  .linkWrapper > * {
    margin-left: 1rem;
  }

  img.flag {
    max-height: 1.3rem;
    max-width: 1.3rem;
    margin-right: 0.5rem;
  }
</style>

<nav>
  <div>
    <div class="logo">
      <a class="logoLink" class:selected={!segment} href=".">
        <div class="logo">
          <img src="logo.png" alt="Concrete Rose Foundation" />
        </div>
      </a>
    </div>
    <div class="linkWrapper">
      <a class:selected={segment === 'about'} href="about">About</a>

      <a class:selected={segment === 'sponsorship'} href="sponsorship">
        Sponsors
      </a>

      <a class:selected={segment === 'donate'} href="donate">Donate</a>

      <a class:selected={segment === 'contact'} href="contact">Contact</a>

      <button
        on:click={() => {
          $locale = nextLocale;
        }}>
        {#if $locale.startsWith('en')}
          <img class="flag" alt="Egyptian flag" src="arabic.png" />
          Arabic
        {:else}
          <img class="flag" alt="British flag" src="english.png" />
          English
        {/if}
      </button>
    </div>
  </div>

</nav>
