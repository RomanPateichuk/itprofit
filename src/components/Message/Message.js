import MessageHTML from "./Message.html"
import convertStringToHTML from "../../common/convertStringToHTML"
import "./Message.scss"


export const Message = (params) => {
  let messageComponent = convertStringToHTML(MessageHTML)
  messageComponent.classList.add(params.status)
  messageComponent.innerText = params.message

  setTimeout(() => {
    document.querySelector('.message').remove()
  }, 2000)

  return messageComponent
}