// Module for API-related functions
const leaderboardApi =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const submitScore = async (name, score, gameID) => {
  const response = await fetch(`${leaderboardApi}games/${gameID}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });

  const data = await response.json();
  return data;
};

const refreshScores = async (gameID) => {
  const response = await fetch(`${leaderboardApi}games/${gameID}/scores/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data;
};

const displayScores = (scores) => {
  const ul = document.querySelector('.score-list');
  ul.innerHTML = '';
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.textContent = `${score.user} : ${score.score}`;
    ul.appendChild(li);
  });
};

export { submitScore, refreshScores, displayScores };
