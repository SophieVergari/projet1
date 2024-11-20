//!appel api et aller recherche infos dedans
const wiki = async (searchInput) => {
  const url = `https:en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`; // Correction : inclure ${searchInput} directement dans le template literal
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données"); // Gestion des erreurs API
    }
    const data = await response.json(); // Conversion en JSON
    const searchInfo = data.query.search; // Recherche dans l'objet data
//!appel api et aller recherche infos dedans fin 

    const titleContainer = document.querySelector(".mainDiv"); // Où les résultats vont être affichés

    titleContainer.innerHTML = ""; // Réinitialise le container

    // Boucle pour parcourir chaque élément de l'API
    searchInfo.forEach((info) => {
      // Crée une div pour afficher
      const searchElement = document.createElement("div");
      searchElement.classList.add("result"); // Ajout d'une classe pour le style
      searchElement.innerHTML = `
        <h2>${info.title}</h2>
        <p>${info.snippet}</p>
        <a href="https://en.wikipedia.org/wiki/${info.title}" target="_blank" rel="noopener noreferrer">En savoir plus</a>
      `;
      titleContainer.appendChild(searchElement); // Ajout de l'élément dans le container
    });
  } catch (error) {
    console.error("Une erreur est survenue :", error.message); // Gestion des erreurs
  }
};

// Sélection de l'input dans le DOM
const input = document.getElementById("research");
// Ajout d'un événement
input.addEventListener("input", () => {
  // Récupère la valeur saisie par l'utilisateur
  const searchInput = input.value.trim(); //trim supprimer les espaces

  const titleContainer = document.querySelector(".mainDiv");
  //* Si il n'y a rien dans la barre de recherche tu ne fais rien mais si il y a quelque chose tu fais une recherche d'api via la const wiki
  if (searchInput === "") {
    titleContainer.innerHTML = "";
  } else {
    wiki(searchInput);
  }
})
