import fetch from 'node-fetch';


export const handler = async (event, context) => {
    try {
        const apiToken = process.env.API_KEY;
        const apiUrl = 'https://api.openai.com/v1/completions';
        const message = event.queryStringParameters.message;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer' + apiToken);
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
            prompt: `Soy Patomocho, tu barman personal.\nSobre cócteles: Pregunta: ${message.text}\nRespuesta:`,
            max_tokens: 1000,
            model: 'text-davinci-003'
          })
        });

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