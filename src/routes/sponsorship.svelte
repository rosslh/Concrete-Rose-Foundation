<style>
  div.pdfWrapper {
    margin-top: 2rem;
    width: 100%;
    height: 66vh;
  }

  a.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: white;
    text-decoration: none;
    background-color: var(--themeColorDark);
    border-radius: 0.5rem;
    box-shadow: 1px 1px 2px 2px #dedededd;
  }

  .contentWrapper {
    margin-top: 2rem;
  }

  .mobile {
    display: none;
    justify-content: center;
  }

  @media (max-width: 700px) {
    .mobile {
      display: flex !important;
    }
    .desktop {
      display: none;
    }
  }
</style>

<svelte:head>
  <title>Concrete Rose Foundation</title>
</svelte:head>
<div class="contentWrapper desktop">
  <p>
    <a href="Sponsorship.pdf" download>Download our sponsorship package here</a>
  </p>
  <div class="pdfWrapper">
    <object
      width="100%"
      height="100%"
      title="Sponsorship"
      data="Sponsorship.pdf"
      type="application/pdf">
      <embed
        title="Sponsorship"
        width="100%"
        src="Sponsorship.pdf"
        type="application/pdf" />
    </object>
  </div>
</div>
<div class="contentWrapper mobile">
  <a class="button" href="Sponsorship.pdf">View Sponsorship Package</a>
</div>
