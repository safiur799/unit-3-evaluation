async function showNews() {
  let res = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2021-07-09&sortBy=publishedAt&apiKey=e308112c7b5348b7a70a4810ed9cd537"
  );
  let data = await res.json();
  console.log(data);
}
showNews();
