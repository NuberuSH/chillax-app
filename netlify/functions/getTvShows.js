import fetch from 'node-fetch';


export const handler = async (event, context) => {
  try {
    const apiToken = process.env.TMDB_API_KEY;
    const page = parseInt(event.queryStringParameters.page) || 1;
    const apiUrl = 'https://api.themoviedb.org/3/discover/tv?api_key=' + apiToken + '&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + page;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' })
    };
  }
};