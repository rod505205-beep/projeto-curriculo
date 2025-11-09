// Mostrar formulário
document.getElementById("startBtn").onclick = function() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("form").classList.remove("hidden");
};

// Calcular idade automaticamente
document.getElementById("nascimento").onchange = function() {
  const nasc = new Date(this.value);
  const hoje = new Date();
  let idade = hoje.getFullYear() - nasc.getFullYear();
  const m = hoje.getMonth() - nasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
  document.getElementById("idade").textContent = "Idade: " + idade + " anos";
};

// Adicionar experiência
document.getElementById("addExp").onclick = function() {
  const nova = document.createElement("div");
  nova.className = "exp-item";
  nova.innerHTML = `
    <input class="cargo" placeholder="Cargo">
    <input class="empresa" placeholder="Empresa">
    <input class="periodo" placeholder="Período (ex: 2020 - 2023)">
  `;
  document.getElementById("experiencias").appendChild(nova);
};

// Visualizar currículo
document.getElementById("verBtn").onclick = function() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;

  const experiencias = Array.from(document.querySelectorAll(".exp-item"))
    .map(exp => {
      const cargo = exp.querySelector(".cargo").value;
      const empresa = exp.querySelector(".empresa").value;
      const periodo = exp.querySelector(".periodo").value;
      return `<p><b>${cargo}</b> - ${empresa} (${periodo})</p>`;
    })
    .join("");

  document.getElementById("tituloNome").textContent = nome;
  document.getElementById("output").innerHTML = `
    <p><b>E-mail:</b> ${email}</p>
    <p><b>Telefone:</b> ${telefone}</p>
    <h3>Experiências</h3>
    ${experiencias}
  `;

  document.getElementById("form").classList.add("hidden");
  document.getElementById("visualizar").classList.remove("hidden");
};

// Voltar ao formulário
document.getElementById("voltarBtn").onclick = function() {
  document.getElementById("visualizar").classList.add("hidden");
  document.getElementById("form").classList.remove("hidden");
};

// Imprimir
document.getElementById("printBtn").onclick = function() {
  window.print();
};
