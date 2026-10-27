// ===== CONFIGURAÇÃO RÁPIDA =====
// Troque pelo número real da VM Transfer, somente números, com código do país.
// Exemplo: 5511999999999
const WHATSAPP_NUMBER = "5511954277497";

const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para um transfer.";

function whatsappUrl(message = whatsappMessage) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach(link => {
  link.href = whatsappUrl();
});

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});

const form = document.querySelector(".quote-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const text = [
    "Olá! Gostaria de solicitar um orçamento para a VM Transfer.",
    "",
    `Nome: ${data.get("nome")}`,
    `WhatsApp: ${data.get("telefone")}`,
    `Origem: ${data.get("origem")}`,
    `Destino: ${data.get("destino")}`,
    `Data: ${data.get("data")}`,
    `Horário: ${data.get("horario")}`,
    `Passageiros: ${data.get("passageiros")}`,
    `Observações: ${data.get("observacoes") || "Não informado"}`
  ].join("\n");

  window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
});
