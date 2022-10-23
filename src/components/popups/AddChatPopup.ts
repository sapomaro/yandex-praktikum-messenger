import {Popup, PopupProps} from './Popup';
import {Form} from '../forms/Form';
import {FormSet} from '../forms/FormSet';
import {addChatService} from '../../services/chatChannels';

export class AddChatPopup extends Popup {
  constructor(props: PopupProps) {
    super(props);
    const addChatForm = new FormSet({
      name: 'addChat',
      header: 'Добавить чат',
      submitLabel: 'Добавить',
      inputs: '%{ Input({"name": "title", "label": "Чат"}) }%',
    });
    this.setProps({popupContent: addChatForm});
    addChatForm.on(Form.EVENTS.SUBMIT_SUCCESS, addChatService);
  }
}
