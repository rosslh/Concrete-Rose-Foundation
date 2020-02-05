<script>
  export let segment;
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

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: inline-block;
    padding: 0;
    margin: 0 0.8rem;
  }

  a.selected {
    color: var(--themeColor) !important;
  }

  a {
    position: relative;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
    color: var(--darkGrey) !important;
    min-height: 5rem;
  }

  .logo {
    margin-top: 1rem;
  }
  .logo > * {
    max-height: 10rem;
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
    <ul>
      <li>
        <a class:selected={segment === 'about'} href="about">About</a>
      </li>
      <li>
        <a class:selected={segment === 'sponsorship'} href="sponsorship">
          Sponsors
        </a>
      </li>
      <li>
        <a class:selected={segment === 'donate'} href="donate">Donate</a>
      </li>
      <li>
        <a class:selected={segment === 'contact'} href="contact">Contact</a>
      </li>
    </ul>
  </div>

</nav>
