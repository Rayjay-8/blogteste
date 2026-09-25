

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(`#app > div > div > div > div.px-0.py-3.flex.justify-center > a`)?.remove()

  const button = document.querySelector("#cw-bubble-holder > button");

  if (button) {
    button.addEventListener("click", () => {
      console.log("Chatwoot clicado");
      document.querySelector(`#app > div > div > div > div.px-0.py-3.flex.justify-center > a`)?.remove()
    });
}
})

document.addEventListener("load", () => {
  document.querySelector(`#app > div > div > div > div.px-0.py-3.flex.justify-center > a`)?.remove()

  const button = document.querySelector("#cw-bubble-holder > button");

  if (button) {
    button.addEventListener("click", () => {
      console.log("Chatwoot clicado");
      document.querySelector(`#app > div > div > div > div.px-0.py-3.flex.justify-center > a`)?.remove()
    });
  }
})

