<template>
  <section class="services-section">
    <h2>
      Seu animal merece <br />
      cuidados especiais!
    </h2>

    <div class="services">
      <div class="bagde">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/shampoo-dispenser.png"
          alt="shampoo-dispenser"
        />
        <span>Banho</span>
      </div>

      <div class="bagde">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/hair-dryer.png"
          alt="hair-dryer"
        />
        <span>Secagem</span>
      </div>

      <div class="bagde">
        <img width="50" height="50" src="https://img.icons8.com/ios/50/syringe.png" alt="syringe" />
        <span>Vacinação</span>
      </div>

      <div class="bagde">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/veterinarian.png"
          alt="veterinarian"
        />
        <span>Consulta Veterinária</span>
      </div>
    </div>

    <button class="btn-agenda">Agende agora</button>
  </section>
</template>

<style scoped>
/* Variáveis locais do escopo de Serviços */
:host {
  --color-primary: #ff6b6b;
  --color-text-dark: #2b2b2b;
  --radius-md: 16px;
  --transition-fast: 0.2s ease;
}

.services-section {
  background-color: tomato;
  padding: 5rem 1.5rem;
  margin: 0 auto;
  text-align: center;
}

h2 {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-text-dark);
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
}

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.bagde {
  background-color: #ffffff;
  padding: 2.5rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  transition: all var(--transition-fast);
  cursor: pointer;
}

.bagde:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(255, 107, 107, 0.1);
  border-color: rgba(255, 107, 107, 0.2);
}

.bagde p {
  margin: 0;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 107, 107, 0.1);
  color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
}

.bagde span {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text-dark);
  line-height: 1.3;
}

.btn-agenda {
  margin-top: 3rem;
  background-color: steelblue;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: var(--radius-md);
  font-size: 1.125rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}
</style>
