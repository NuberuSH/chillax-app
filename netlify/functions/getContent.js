const axios = require("axios");


const handler = async (event, context) => {
  try {
    const apiToken = process.env.TMDB_API_KEY;
    const page = parseInt(event.queryStringParameters.page) || 1;
    const selectedGenre = event.queryStringParameters.selectedGenre;
    const contentType = event.queryStringParameters.contentType;
    const apiUrl = 'https://api.themoviedb.org/3/discover/' + contentType + '?api_key=' + apiToken + '&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + page + '&with_genres=' + selectedGenre;

    const {data} = await axios.get(apiUrl);


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

module.exports = { handler };