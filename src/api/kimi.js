import OpenAI from 'openai'

// Moonshot AI's Kimi K3 is served through an OpenAI-compatible API.
// Set REACT_APP_MOONSHOT_API_KEY in a .env file (never commit real keys).
// NOTE: calling the API straight from the browser exposes your key to
// anyone who opens dev tools — fine for local experiments, but route
// requests through a small backend before deploying publicly.
const kimi = new OpenAI({
  apiKey: process.env.REACT_APP_MOONSHOT_API_KEY,
  baseURL: 'https://api.moonshot.ai/v1',
  dangerouslyAllowBrowser: true,
})

export const KIMI_MODEL = 'kimi-k3'

export const askKimi = (prompt) =>
  kimi.chat.completions
    .create({
      model: KIMI_MODEL,
      messages: [{ role: 'user', content: prompt }],
    })
    .then(response => response.choices[0].message.content)

export default kimi
