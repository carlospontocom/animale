<template>
  <footer class="footer">
    <div class="footer-columns">
      <div class="footer-col">
        <h4>Sobre Nós</h4>
        <p>Petshop dedicado ao bem-estar e carinho dos animais.</p>
      </div>

      <div class="footer-col">
        <h4>Serviços</h4>
        <ul>
          <li>Banho & Tosa</li>
          <li>Vacinação</li>
          <li>Consultas</li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contato</h4>
        <p>Rua Exemplo, 123 - Sobral/CE</p>
        <p>Telefone: (88) 99999-9999</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} | Por Carlos Nascimento</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Ano dinâmico
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: #2b2b2b;
  color: #fff;
  padding: 3rem 1.5rem;
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-col h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
}

.footer-col p,
.footer-col li {
  font-size: 0.95rem;
  line-height: 1.5;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 0.5rem;
}

.footer-bottom {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #aaa;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
}

/* Responsivo para mobile */
@media (max-width: 768px) {
  .footer-columns {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
