import axios from 'axios';
import { deleteMessage, getMessage, editMessage } from './api-services';
import getRefs from './get-refs';
import { messenger } from './data';

const refs = getRefs();

const innerItem = message => {
  return `<p class="listText">${message}</p>
  <p class="btn-wrap">
  <button class="delete" data-action="delete"></button>
  <button class="edit" data-action="edit"></button>
  </p>`;
};

const createItem = ({ message, id }) => {
  return `
<li data-id=${id}>
  ${innerItem(message)}
</li>
`;
};

const deleteItem = id => {
  messenger.items = messenger.items.filter(item => item.id !== id);
};

const handleClick = evt => {
  if (evt.target.dataset.action === 'delete' || evt.target.nodeName === 'IMG') {
    const id = evt.target.closest('li[data-id]').dataset.id;
    console.log('id', id);
    deleteItem(id);
    createListItem(messenger.items);
    deleteMessage(id);
  }
  if (evt.target.dataset.action === 'edit' || evt.target.nodeName === 'IMG') {
    const elementLi = evt.target.closest('li[data-id]');
    const id = elementLi.dataset.id;
    const messageAds = messenger.items.find(item => item.id === id);
    const innerMarkup = `
    <input class="listText-input" type="text" value="${messageAds.message}" />
    <p class="btn-wrap">
    <button class="save" data-action="save"></button>
    </p>`;
    elementLi.innerHTML = innerMarkup;
    const saveNewData = () => {
      const message = document.querySelector('.listText-input').value;
      document.querySelector('.save').removeEventListener('click', saveNewData);
      elementLi.innerHTML = innerItem(message);
      messageAds.message = message;

      editMessage(id, { message });
    };

    document.querySelector('.save').addEventListener('click', saveNewData);
  }
};

const editItem = id => {};

export const postMessage = message => {
  refs.listMessage.insertAdjacentHTML('beforeend', createItem(message));
};

const createListItem = messages => {
  const createMarkup = messages.reduce((acc, messages) => {
    return (acc += createItem(messages));
  }, '');
  refs.listMessage.innerHTML = createMarkup;
};

export const getListMessage = () => {
  getMessage().then(response => {
    createListItem(response);
    messenger.items = [...response];
    refs.listMessage.addEventListener('click', handleClick);
  });
};
