require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  try {
    const { topic } = req.body; // <-- we expect a topic from frontend!

    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key is missing');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    console.log('Generating quiz for topic:', topic);

    const systemPrompt = `
      You are a quiz generator for the topic: ${topic}.
      Every time you respond, you MUST answer ONLY in this JSON format:

      {
        "question": "Question here?",
        "options": ["Option1", "Option2", "Option3", "Option4"],
        "answerIndex": 0
      }

      Only create questions related to ${topic}.
      Do not explain anything. Only JSON format.
    `;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Give me a ${topic} quiz question.` }
        ],
        temperature: 0.5,
        max_tokens: 300
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
      }
    );

    if (!response.data.choices || !response.data.choices[0]) {
      throw new Error('Invalid response from OpenAI');
    }

    res.json({ 
      question: response.data.choices[0].message.content,
      status: 'success'
    });
  } catch (error) {
    console.error('Quiz generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate quiz question', 
      details: error.response?.data || error.message
    });
  }
});

module.exports = router;

