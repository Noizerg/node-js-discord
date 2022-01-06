const axios = require('axios');

async function sendMessage(token, chat, message, cookie) {
  url = `https://discord.com/api/v9/channels/${chat}/messages`;

  const options = {
    headers: {
      cookie: `${cookie}`,
      authorization: `${token}`,
    },
  };

  const params = {
    content: `${message}`,
    tts: 'False',
  };

  const res = await axios.post(url, params, options);
  return res;
}

module.exports = sendMessage;
