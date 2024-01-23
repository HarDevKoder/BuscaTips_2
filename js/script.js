// --------------------------------------------------------------
// Importacion de Funciones
// --------------------------------------------------------------
import {
  referenciarElementosDom,
  verificarServiceWorker
} from "./libreria.js";

// --------------------------------------------------------------
// Variables Globales
// --------------------------------------------------------------


// --------------------------------------------------------------
// PROGRAMA PRINCIPAL
// --------------------------------------------------------------

// Verifico en consola si el navegador soporta service worker
verificarServiceWorker();

// Referencio elementos del DOM
referenciarElementosDom();


