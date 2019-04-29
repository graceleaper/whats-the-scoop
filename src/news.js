const reliableNews =
  "https://newsapi.org/v2/top-headlines?" +
  "sources=the-new-york-times,business-insider&" +
  "pageSize=10&" +
  "apiKey=1dd41cbc8a9142ccac472a5790494164";

const clickbait =
  "https://newsapi.org/v2/everything?" +
  "sources=mashable&" +
  "q=culture NOT porn NOT kiss&" +
  "pageSize=10&" +
  "apiKey=1dd41cbc8a9142ccac472a5790494164";

export async function getRealNews() {
  let realNewsResponse = await fetch(reliableNews).then(response => response.json());
  let unreliableNewsResponse = await fetch(clickbait).then(response => response.json());
  let realNews = realNewsResponse.articles;
  let unreliableNews = unreliableNewsResponse.articles;
  return realNews.concat(unreliableNews);
}
