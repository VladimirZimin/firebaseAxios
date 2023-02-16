import {
  createMessage,
  getMessage,
  editMessage,
  deleteMessage,
} from './api-services';
import { messenger } from './data';
import getRefs from './get-refs';
import { postMessage } from './listMessage';

const refs = getRefs();

function chatForm() {
  const createNewMessage = evt => {
    evt.preventDefault();

    const message = evt.target.elements.input.value;

    createMessage({ message }).then(response => {
      const messages = { id: response.data.name, message: message };
      postMessage(messages);
      messenger.items = [...messenger.items, messages];
      console.log('messenger.items', messenger.items);
    });

    refs.form.reset();
  };

  refs.form.addEventListener('submit', createNewMessage);
}

export default chatForm;
