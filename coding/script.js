let data_div = document.getElementById("container");
async function showNews() {
  let res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e308112c7b5348b7a70a4810ed9cd537"
  );
  let data = await res.json();
  console.log(data);
  let artical = data.articles;
  console.log(artical);
  showArtcal(artical);
}
showNews();

function showArtcal(data) {
  data.forEach((element) => {
    let title = document.createElement("p");
    let img = document.createElement("img");
    let para = document.createElement("para");
  });
}
