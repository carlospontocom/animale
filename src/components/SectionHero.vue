<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div>
          <img
            src="https://images.unsplash.com/photo-1599194921977-f89d8bd0eefb?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pet"
          />
        </div>
        <div>
          <h1>O melhor para seu pet começa com <span>animale</span></h1>
          <p>Prestamos amor para seu amigo, carinho e conforto</p>

          <div class="actions">
            <button class="btn-solid">Agendar consulta</button>
            <button class="btn-outline">Saiba mais</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Variáveis locais do escopo da Hero */
:host {
  --color-primary: #ff6b6b;
  --color-primary-hover: #fa5252;
  --color-text-dark: #2b2b2b;
  --color-text-muted: #5c5c5c;
  --color-white: #ffffff;
  --radius-lg: 24px;
  --radius-full: 9999px;
  --transition-fast: 0.2s ease;
}

.hero-section {
  padding: 4rem 0;
  background-color: #fff9f9;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: 1140px;
}

h1 {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

h1 span {
  color: var(--color-primary);
}

.hero-content p {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

button {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-solid {
  background-color: var(--color-primary);
  color: var(--color-white);
  border: 1px solid transparent;
  box-shadow: 0 4px 14px rgba(255, 107, 107, 0.3);
}

.btn-solid:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-outline:hover {
  background-color: rgba(255, 107, 107, 0.05);
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;
  }

  .hero-content div:nth-child(1) {
    order: 2;
  }
  .hero-content div:nth-child(2) {
    order: 1;
  }

  h1 {
    font-size: 3.5rem;
  }

  img {
    height: 480px;
  }
}
</style>
