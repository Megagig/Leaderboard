import './style.css';
import { refreshScores, submitScore, displayScores } from './modules/api.js';

const leaderboardApi =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const createGame = async () => {
  const response = await fetch(`${leaderboardApi}games/`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Uchenna Nwachukwu Game',
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });

  const gameId = await response.json();
  return gameId;
};

createGame();
const gameId = 'goj8zLpWxg6tYc45ekxHn';
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  submitScore(nameInput.value, scoreInput.value, gameId);
  nameInput.value = '';
  scoreInput.value = '';
});

const refreshBtn = document.querySelector('#refresh-btn');
refreshBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const scores = await refreshScores(gameId);
  displayScores(scores.result);
});
