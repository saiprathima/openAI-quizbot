# AI Quiz Chatbot

An interactive AI-powered quiz chatbot built with React, Node.js, and OpenAI's GPT-3.5. The chatbot generates dynamic quiz questions on various programming topics and provides immediate feedback with explanations.

## Features

- Dynamic quiz generation using OpenAI's GPT-3.5
- Multiple-choice questions with immediate feedback
- Timer for each question
- Score tracking
- Topic selection (JavaScript, React, HTML, CSS)
- Modern, responsive UI with animations
- Detailed explanations for correct/incorrect answers

## Tech Stack

- Frontend:
  - React
  - Framer Motion (animations)
  - Tailwind CSS (styling)
  - Vite (build tool)

- Backend:
  - Node.js
  - Express
  - OpenAI API

## Setup

1. Clone the repository
```bash
git clone [your-repo-url]
cd [repo-name]
```

2. Install dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
npm install
```

3. Create a `.env` file in the root directory with your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

4. Start the development servers
```bash
# Start backend server (port 8000)
npm run dev

# Start frontend server (port 3000)
npm run frontend:dev
```

## Project Structure

```
├── src/
│   ├── Chatbot.jsx        # Main chatbot component
│   └── components/
│       └── Header.jsx     # Header component
├── server.js              # Backend server
├── .env                   # Environment variables
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
├── postcss.config.js     # PostCSS configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## API Endpoints

- `POST /api/chat`
  - Generates a new quiz question
  - Request body: `{ message: "topic", askedQuestions: [] }`
  - Response: Question object with options and correct answer

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License
