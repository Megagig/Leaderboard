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

// import './style.css';
// import { refresh, submit, generateScores } from './modules/api.js';

// const leaderboardApi =
//   'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

// const gameName = async () => {
//   const response = await fetch(`${leaderboardApi}games/`, {
//     method: 'POST',
//     body: JSON.stringify({
//       name: 'Tumaini Maganiko Game',
//     }),
//     headers: {
//       'content-type': 'application/json; charset=UTF-8',
//     },
//   });

//   const id = await response.json();
//   return id;
// };

// gameName();
// const gameID = 'YiYSP42Mr4UocCG8xuVc';
// const form = document.getElementById('submit-btn');
// form.addEventListener('click', (e) => {
//   e.preventDefault();
//   const name = document.getElementById('name');
//   const score = document.getElementById('score');
//   submit(name.value, score.value, gameID);
//   name.value = '';
//   score.value = '';
// });

// const refreshBtn = document.querySelector('#refresh-btn');
// refreshBtn.addEventListener('click', async (e) => {
//   e.preventDefault();
//   const retrieve = await refresh(gameID);
//   generateScores(retrieve.result);
// });
