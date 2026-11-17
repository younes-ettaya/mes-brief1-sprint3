const API_URL = "https://countries.dev/countries";

// Tous les pays reçus de l'API (rempli une seule fois, au chargement)
let allCountries = [];

// TODO : récupère ici les éléments du DOM dont tu as besoin

/**
 * Récupère tous les pays depuis l'API.
 * - Utilise fetch avec async/await.
 * - Appelée UNE SEULE FOIS, au chargement de la page.
 *
 * @returns {Promise<Array>} Le tableau de tous les pays.
 */
async function fetchCountries() {
  // TODO
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des pays");
    }

    const data = await response.json();

    allCountries = data;

    console.log(allCountries);

    return allCountries;
    console.log(allCountries);

  } catch (error) {
    console.error(error);
    return [];
  }
}

fetchCountries()








/**
 * Crée la carte HTML d'un pays, sur le modèle de la maquette :
 * drapeau (avec un texte alternatif utile), nom, capitale, population.
 *
 * @param {Object} country - Un pays tel que renvoyé par l'API.
 * @returns {HTMLElement} La carte, prête à être ajoutée à la grille.
 */
const liste_article = document.getElementById("liste-article");

function createCountryCard(country) {
  // TODO
  liste_article.textContent = ""
  allCountries.forEach(data => {


    const article = document.createElement("article");


    const image = document.createElement("img");
    image.className = "rounded-[8px]";
    image.src = data.svg
    image.appendChild(article);

    const Titre = document.createElement("h3");
    Titre.className = " p-2 font-bold";
    Titre.textContent = data.name;
    Titre.appendChild(article);


    const div1 = document.createElement("div");
    div1.className = "flex justify-between p-2";
    article.appendChild(div1);

    const Capitale = document.createElement("p");
    Capitale.className = "text-gray-600 text-[13px]";
    div1.appendChild(Capitale);

    const nameCapitale = document.createElement("p");
    nameCapitale.className = "text-gray-600 text-[13px]";
    nameCapitale.textContent = data.capital;
    div1.appendChild(nameCapitale);


    const div2 = document.createElement("div");
    div2.className = "flex justify-between p-2";
    article.appendChild(div2);

    const population = document.createElement("p");
    population.className = "text-gray-600 text-[13px]";
    div2.appendChild(population);

    const number_Population = document.createElement("p");
    number_Population.className = "text-gray-600 text-[13px]";
    number_Population.textContent = data.population;
    div2.appendChild(number_Population);

    liste_article.appendChild(article);
  })
}


/**
 * Affiche une liste de pays dans la grille.
 * - Vide d'abord la grille (sinon les cartes s'accumulent).
 * - Ajoute une carte par pays.
 * - Si la liste est vide, affiche le message « Aucun pays ne correspond ».
 *
 * @param {Array} countries - Les pays à afficher.
 */
function displayCountries(countries) {
  // TODO
}

/**
 * Applique les deux filtres EN MÊME TEMPS sur allCountries :
 * - le continent choisi dans la liste déroulante ;
 * - le texte saisi dans la recherche (majuscules et minuscules ignorées).
 * Puis affiche le résultat avec displayCountries().
 *
 * Aucune requête vers l'API ici !
 */
function filterCountries() {
  // TODO
}


// ------------------------------------------------------------
// BONUS
// ------------------------------------------------------------

/**
 * (Bonus) Trie des pays par population, du plus peuplé au moins peuplé.
 * Attention : ne modifie pas le tableau allCountries d'origine.
 *
 * @param {Array} countries
 * @returns {Array} Un nouveau tableau trié.
 */
function sortByPopulation(countries) {
  // TODO
}

/**
 * (Bonus) Affiche ou masque le message « Chargement des pays… ».
 *
 * @param {boolean} isLoading - true pour l'afficher, false pour le masquer.
 */
function showLoader(isLoading) {
  // TODO
}

/**
 * (Bonus) Affiche un message d'erreur clair quand l'API ne répond pas.
 *
 * @param {string} message
 */
function showError(message) {
  // TODO
}


// ------------------------------------------------------------
// DÉMARRAGE
// ------------------------------------------------------------

/**
 * Point d'entrée de l'application :
 * 1. récupère les pays avec fetchCountries() et les stocke dans allCountries ;
 * 2. affiche les pays du continent sélectionné par défaut ;
 * 3. écoute les changements de continent et la saisie dans la recherche.
 *
 * (Bonus) Gère le chargement et les erreurs avec try...catch.
 */
async function init() {
  // TODO
}

init();
