<template>
  <section class="plans-section">
    <h2>Nossos Planos</h2>

    <div class="plans">
      <div class="plan-card basic">
        <h3>Plano Básico</h3>
        <p>Ideal para cuidados essenciais do seu pet.</p>
        <ul>
          <li>Banho mensal</li>
          <li>Tosa higiênica</li>
          <li>Check-up anual</li>
        </ul>
      </div>

      <div class="plan-card vip">
        <h3>Plano VIP</h3>
        <p>Mais conforto e atenção para o seu bichinho.</p>
        <ul>
          <li>Banho quinzenal</li>
          <li>Tosa completa</li>
          <li>Vacinação</li>
          <li>Consultas semestrais</li>
        </ul>
      </div>

      <div class="plan-card premium">
        <h3>Plano Premium</h3>
        <p>O tratamento mais completo e exclusivo.</p>
        <ul>
          <li>Banho semanal</li>
          <li>Tosa estilizada</li>
          <li>Vacinação completa</li>
          <li>Consultas ilimitadas</li>
          <li>Serviços de emergência</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.plans-section {
  padding: 5rem 1.5rem;
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
}

.plans-section h2 {
  font-size: 2.25rem;
  font-weight: 800;
  color: #2b2b2b;
  margin-bottom: 3rem;
}

.plans {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.plan-card {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
}

.plan-card:hover {
  transform: translateY(-6px);
}

.plan-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.plan-card p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #555;
}

.plan-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.plan-card li {
  margin: 0.5rem 0;
  font-size: 0.95rem;
  color: #333;
}

/* Diferenciação visual */
.basic {
  border-top: 4px solid #6bcff6;
}
.vip {
  border-top: 4px solid #ff6b6b;
}
.premium {
  border-top: 4px solid #ffd93d;
}
</style>
