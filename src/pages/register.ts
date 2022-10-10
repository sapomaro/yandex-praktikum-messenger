import {NarrowLayout} from '../components/layouts/Narrow';
import {Form} from '../components/forms/Form';
import {StandardInput as Input} from '../components/forms/StandardInput';
import {StandardButton as Button} from '../components/forms/StandardButton';
import {StandardLink as Link} from '../components/forms/StandardLink';
import {JSONWrapper} from '../modules/Utils';

const view = new NarrowLayout({
  title: 'Регистрация',
  Form, Input, Button, Link,
});

const inputs = JSONWrapper.stringify([
  {name: 'email', type: 'email', label: 'Почта'},
  {name: 'login', type: 'text', label: 'Логин'},
  {name: 'first_name', type: 'text', label: 'Имя'},
  {name: 'second_name', type: 'text', label: 'Фамилия'},
  {name: 'phone', type: 'tel', label: 'Телефон'},
  {name: 'password', type: 'password', label: 'Пароль'},
  {name: 'password2', type: 'password', label: 'Пароль (ещё раз)'},
]);

view.props.contents = `%{ Form({"name": "reg", "action": "chats.html"}) }%`;

view.props.fieldset = () => `
  <h1 class="container__header">%{title}%</h1>
  %{ Input(${inputs}...) }%
  <br><br>
  %{ Button({"name": "submit", "type": "submit",
             "label": "Зарегистрироваться"}) }%
  %{ Link({"url": "auth.html", "label": "Войти"}) }%
`;

export {view};
