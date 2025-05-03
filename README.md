# QuizBot - AI-Powered Quiz Application

A quiz application powered by OpenAI, built using React for the front-end, Express.js for the backend, Axios for handling API requests, and OpenAI's API for generating quiz questions.

## Features

- **AI-Powered Questions**: Fetch quiz questions dynamically from OpenAI's API.
- **User Interaction**: Allows users to answer questions in a clean, interactive UI.
- **Responsive Design**: Built with Tailwind CSS for a modern, responsive design.
- **Backend**: Express.js handles the server-side logic and OpenAI API requests.
- **API Integration**: Axios is used for frontend-backend communication, making it easy to fetch quiz questions.

## Project Setup

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn

### Frontend Setup (React + Vite)

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/quizbot.git
    cd quizbot
    ```

2. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    ```

3. Set up your environment variables:
    - Create a `.env` file in the `frontend` directory.
    - Add the OpenAI API key and backend URL (if needed).

    Example:
    ```env
    REACT_APP_OPENAI_API_KEY=your_openai_api_key
    REACT_APP_BACKEND_URL=http://localhost:5000
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

    Your front-end should now be running at `http://localhost:3000`.

### Backend Setup (Express.js)

1. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

2. Set up your environment variables:
    - Create a `.env` file in the `backend` directory.
    - Add your OpenAI API key.

    Example:
    ```env
    OPENAI_API_KEY=your_openai_api_key
    ```

3. Start the backend server:
    ```bash
    npm start
    ```

    Your backend should now be running at `http://localhost:5000`.

### Using the App

- When you visit the front-end URL (typically `http://localhost:3000`), it will fetch quiz questions from the backend, which in turn calls the OpenAI API to generate dynamic questions.
- Answer the questions and get immediate feedback.

## Technologies Used

- **Frontend**:
    - React
    - Vite.js
    - Tailwind CSS
    - Axios (for API requests)

- **Backend**:
    - Express.js
    - OpenAI API (for quiz question generation)

- **Tools**:
    - OpenAI GPT-3 (to generate quiz questions)

## Environment Variables

You need to set up the following environment variables for both the backend and frontend:

- `OPENAI_API_KEY`: Your OpenAI API key (required for fetching quiz questions).
- `REACT_APP_OPENAI_API_KEY`: Your OpenAI API key (for frontend access).
- `REACT_APP_BACKEND_URL`: The backend URL for fetching quiz data.

## Contributing

1. Fork the repository.
2. Create your branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI GPT-3 for powering the quiz questions.
- Tailwind CSS for the sleek, responsive design.
- React and Express.js for building a seamless full-stack application.
