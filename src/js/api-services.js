import axios from 'axios';

const BASE_URL = 'https://test-5e295-default-rtdb.firebaseio.com';

const convertData = data => {
  const result = Object.keys(data).map(item => {
    return { id: item, ...data[item] };
  });

  return result;
};

getMessage().then(data => convertData(data));

function createMessage(content) {
  try {
    return axios.post(`${BASE_URL}/messenger.json`, content);
  } catch (error) {
    console.log(error);
  }
}

async function getMessage() {
  try {
    const resault = await axios.get(`${BASE_URL}/messenger.json`);
    return convertData(resault.data);
  } catch (error) {
    console.log(error);
  }
}

function editMessage(id, content) {
  axios.patch(`${BASE_URL}/messenger/${id}.json`, content);
}

function deleteMessage(id) {
  axios.delete(`${BASE_URL}/messenger/${id}.json`);
}

export { createMessage, getMessage, editMessage, deleteMessage };
