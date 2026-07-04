<template>
  <section>
    <div class="container">
      <div class="photo-grid">
        <div class="photo-item">
          <img
            src="https://images.pexels.com/photos/19145881/pexels-photo-19145881.jpeg"
            alt="cachorro no banho"
          />
        </div>
        <div class="photo-item">
          <img
            src="https://images.unsplash.com/photo-1547565527-389ccd19e85b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Foto 2"
          />
        </div>
        <div class="photo-item">
          <img
            src="https://plus.unsplash.com/premium_photo-1677165482547-92ff0142af12?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Foto 3"
          />
        </div>

        <div class="photo-item">
          <img
            src="https://plus.unsplash.com/premium_photo-1665952050540-9597bcef1274?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRvc2ElMjBkZSUyMGNhY2hvcnJvfGVufDB8fDB8fHww"
            alt="Foto 4"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 60px 0;
}

.photo-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
