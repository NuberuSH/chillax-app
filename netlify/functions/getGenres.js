import axios from 'axios';


export const handler = async (event, context) => {
  try {
    const apiToken = process.env.TMDB_API_KEY;
    const contentType = event.queryStringParameters.contentType;
    const apiUrl = 'https://api.themoviedb.org/3/genre/' + contentType + '/list?api_key=' + apiToken + '&language=es-ES';

    const {data} = await axios.get(apiUrl);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Not Found' })
    };
  }
};