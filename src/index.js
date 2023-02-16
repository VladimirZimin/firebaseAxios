import chatForm from './js/chatForm';
import { getListMessage } from './js/listMessage';
import './sass/main.scss';

getListMessage();
chatForm();

// const BASE_URL = 'https://test-5e295-default-rtdb.firebaseio.com/';
// const refs = getRefs();

// refs.form.addEventListener('submit', onSubmit);

// async function onSubmit(evt) {
//   evt.preventDefault();

//   const value = evt.target.elements.text.value;

//   try {
//     const result = await axios.post(`${BASE_URL}/test.json`, { value });
//     console.log('POST', result.data);
//   } catch (error) {
//     throw error;
//   } finally {
//     console.log('All Ok');
//     getText();
//     deleteText('-NOGc2EmCE5_v0QLKxgh');
//   }

//   refs.form.reset();
// }

// async function getText() {
//   const response = await axios.get(`${BASE_URL}/test.json`);
//   console.log('GET', response.data);

//   const data = Object.keys(response.data).map(item => {
//     return { id: item, ...response.data[item] };
//   });
//   console.log('data', data);

//   const markup = data.reduce((acc, item) => {
//     return (acc += `
//     <li class="listItem">
//     <span class="spanItem">${item.value}</span>
//     <button class="delButton" data-id=${item.id}>Delete</button>
//     </li>
//     `);
//   });

//   document.querySelector('.list').innerHTML = markup;
// }

// const deleteText = async e => {
//   if (e.target.nodeName === 'BUTTON') {
//     const id = e.target.dataset.id;
//     try {
//       console.log('id', id);

//       await axios.delete(`${BASE_URL}/test/${id}.json`);
//       getText();
//     } catch (error) {
//       console.log('error', error);
//     }
//   } else return;
// };

// document.querySelector('.list').addEventListener('click', deleteText);
