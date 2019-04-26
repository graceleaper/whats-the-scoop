const reliableNews =
'https://newsapi.org/v2/top-headlines?' +
          'sources=the-new-york-times&' +
          'apiKey=1dd41cbc8a9142ccac472a5790494164'

const clickbait =
'https://newsapi.org/v2/top-headlines?' +
          'sources=buzzfeed&' +
          'apiKey=1dd41cbc8a9142ccac472a5790494164'

export async function getRealNews() {
  let result = await fetch(reliableNews).then(response => response.json());
  let result2 = await fetch(clickbait).then(response => response.json());
  let results = result.articles;
  let results2 = result2.articles
  return results.concat(results2);
}