import { state } from "../../state";
export function initWelcome(params) {
  const div = document.createElement("div");
  div.innerHTML = `
        <header class="header"></header>
        <div class="container">
        <h1 class="title">Bienvenidx</h1>
        <div class="form-container">
        <form class="form">
        <label class="label">Nombre</label>
        <input name="nombre" type="text" class="input"/>
        <button class="button">Comenzar</button>
        </form>
        </div>
        </div>
        `;
  const formEl = div.querySelector(".form");
  formEl?.addEventListener("submit", (event) => {
    event.preventDefault();
    const target = event.target as any;
    const currentState = state.getState();
    currentState.userName = target.nombre.value;
    state.setState(currentState);
    state.setUserName();

    params.goTo("/chat");
  });

  return div;
}
