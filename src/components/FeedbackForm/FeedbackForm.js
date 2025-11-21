import FeedbackFormHTML from "./FeedbackForm.html"
import convertStringToHTML from '../../common/convertStringToHTML'
import IMask from 'imask';
import { API } from '../../common/api/api'
import { Preloader } from "../Preloader/Preloader"
import { Message } from "../Message/Message"
import "./FeedbackForm.scss"

export const FeedbackForm = () => {
  let FeedbackForm = convertStringToHTML(FeedbackFormHTML)
  let form = FeedbackForm.querySelector('.feedback-form')
  let inputs = form.querySelectorAll('.input')
  const root = document.getElementById('root')

  // add phone mask
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  let inputPhone = form.querySelector('.input[name="phone"]')
  const mask = IMask(inputPhone, maskOptions);


  // form validation

  let removeError = (input) => {
    const parent = input.parentNode
    if (parent.querySelector('.error-form')) {
      parent.querySelector('.error-form').remove()
    }
  }

  let showError = (input, text) => {
    const parent = input.parentNode
    let div = document.createElement('div')
    div.classList.add('error-form')
    div.innerText = text
    parent.append(div)
  }

  let validation = (form) => {
    let validate = true
    inputs.forEach(input => {
      removeError(input)
      if (input.value === '') {
        showError(input, 'field cannot be empty')
        validate = false
      }
      else if (input.name === 'name') {
        if (!input.value.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u)) {
          showError(input, 'name must contain only characters')
          validate = false
        }
      }

      else if (input.name === 'email') {
        if (!input.value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)) {
          showError(input, 'email is not correct')
          validate = false
        }
      }

      else if (input.name === 'phone') {
        if (!input.value.match(/^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/)) {
          showError(input, 'phone is not correct')
          validate = false
        }
      }
    });
    return validate
  }


  // send form data

  const buttonSubmit = form.querySelector('button[type="submit"]')

  const sentData = async () => {
    root.append(Preloader())
    let data = await Array.from(inputs).reduce((object, input) => ({ ...object, [input.name]: input.value }), {})
    let resultSendData = await API.sendFeedbackFromData(data)
    document.querySelector('.preloader-wrapper').remove()
    if (resultSendData.status === 'success') {
      form.reset()
    }
    root.prepend(Message({ status: resultSendData.status, message: resultSendData.message }))
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validation(form) ? sentData() : null
  })

  return FeedbackForm
}
