<script>
  export let title;
</script>

<style>
  .overlay {
    padding: 0 5rem 5rem 5rem;
    background-color: white;
    border-top: 3px solid var(--themeColor);
    text-align: center;
    margin: 3rem 2rem;
    border-radius: 3px;
    z-index: 20;
    position: relative;
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
  }
</style>

<div class="contentWrapper">
  <div class="overlay">
    <h2>{title}</h2>
    <div>
      <slot />
    </div>
  </div>
</div>
