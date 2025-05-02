router.post('/', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    console.log("Received body:", req.body);
    // Process the message and generate a response
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        ...(history || []).map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text
        })),
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 1000
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    res.json({
      response: response.data.choices[0].message.content,
      status: 'success'
    });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    res.status(500).json({
      error: 'Failed to process chat message',
      details: error.message,
      status: 'error'
    });
  }
});
