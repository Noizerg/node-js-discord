require('dotenv').config();
const sendMessage = require('./api/sendMessage');
const questions = require('./messages/questions');
const answers = require('./messages/answers');

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const main = async () => {
  let i = 0;
  for (i; i < questions.length; i++) {
    let result = await sendMessage(
      process.env.DISCORD_TOKEN,
      process.env.CHAT_ID,
      questions[i],
      process.env.COOKIE
    );
    console.log('Жду две секунды');
    await sleep(1000);
    console.log('Подождал');
    result = await sendMessage(
      process.env.SECONDARY_TOKEN,
      process.env.CHAT_ID,
      answers[i],
      process.env.SECONDARY_COOKIE
    );
    console.log('Жду 120 секунд');
    await sleep(121000);
    console.log('Подождал');
  }
};
(async () => {
  while (true) {
    await main();
  }
})();
