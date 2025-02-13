import './FileInput.scss';

import {Input, InputPropsType} from './Input';

export class FileInput extends Input {
  constructor(props: InputPropsType) {
    super(props);
    this.on('change', () => {
      this.emit('updated');
    });
  }
  render(props: InputPropsType): string {
    let fileName = '';
    if (props && props.value) {
      fileName = props.value.split(/[\\/]+/).pop() as string;
    }
    return `
      <div class="container__element container__element_centered">
        <p class="form__input_file-note">
          ${fileName? 'Выбран файл: '+fileName : ''}
        </p>
        <label class="form__input_file-wrapper">
          <a class="container__link container__link_underlined">
            Выбрать ${fileName? 'другой' : ''} файл <br>на компьютере
          </a>
          <input name="${props.name}" type="file"
            accept="${props.accept}" 
            class="form__input_file"
            onchange="%{onChange}%">
        </label>
        <span class="form__input-error">${props.error || ''}</span>
      </div>
    `;
  }
}
