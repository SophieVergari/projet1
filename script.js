// const wiki = async (searchInput) => {
//   const response = await fetch(
//     "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}"
//   );
//   const data = await response.json();

//   const searchinfo = data.query.search;

//   const titleContainer = document.querySelector(".titleResults");
//   titleContainer.innerHTML = " ";

//   searchinfo.forEach((INFO) => {
//     const searchElement = document.createElement("div");
//     searchElement.innerHTML = `
//     <div class="result">
//     <h2>${INFO.title}</h2>
//     <p>${INFO.snippet}</p>
//     `;
//     titleContainer.appendChild(searchElement);
//   });
// };
// const input = document.getElementById("research");
// input.addEventListener("input", () => {
//   const searchInput = input.value.trim();
//   if (searchInput) {
//     wiki(searchInput);
//   }
// });
