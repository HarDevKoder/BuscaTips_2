// -----------------------------------------------------------------------
// LIBRERIA DE FUNCIONES A UTILIZAR EN EL PROYECTO
// -----------------------------------------------------------------------
// Comprobación e Compatibilidad con Service Worker (PWA)
// -----------------------------------------------------------------------
export const verificarServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./js/sw.js")
      .then((reg) => console.log("Registro de SW exitoso", reg))
      .catch((err) => console.warn("Error al tratar de registrar el sw", err));
  }
};

// -----------------------------------------------------------------------
// Referencias de elementos del DOM
// -----------------------------------------------------------------------
export const referenciarElementosDom = () => {
  return {
    btnCalcular: document.querySelector("#btnCalcular"),
    inputNombre: document.querySelector("#inputNombre")

  };
};
