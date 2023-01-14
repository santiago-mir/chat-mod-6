import { state } from "../../state";

export function initChat() {
  const div = document.createElement("div");
  const userName: string = state.getUserName();
  div.innerHTML = `
    <header class="header"></header>
    <div class="container">
    <h1 class="title">Chat de ${userName}</h1>
    <div class="chat-area">
    </div>
    <form class="form">
    <input type="text" class="input"/>
    <button class="button">Enviar</button>
    </form>
    </div>
  `;

  const formEl = div.querySelector(".form");
  formEl?.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hola");
  });
  return div;
}
