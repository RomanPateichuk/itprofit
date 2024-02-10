import ButtonHTML from './Button.html'
import convertStringToHTML from '../../common/convertStringToHTML'
import './Button.scss'


export const CommonButton = (text, callBack) => {
  let Button = convertStringToHTML(ButtonHTML)
  Button.innerText = text
  Button.addEventListener('click', callBack)


  return Button
}