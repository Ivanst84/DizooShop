import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();

    // Log the messages before sending to OpenAI
    console.log('Mensaje enviado a OpenAI:', messages);

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages,
    });

    // Log the OpenAI API response
    console.log('Respuesta de OpenAI:', response);

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.error('Error al procesar la solicitud:', error);

    if (error.code === 'insufficient_quota') {
      // Handle insufficient quota error
      return new Response('Error: Cuota insuficiente. Actualiza tu plan en OpenAI.', { status: 403 });
    }

    // Other error handling cases
    return new Response('Error interno del servidor', { status: 500 });
  }
}
