import ModalHtml from './Modal.html'
import './Modal.scss'
import convertStringToHTML from '../../common/convertStringToHTML'

let _Modal = convertStringToHTML(ModalHtml)

export const showModal = () => {
  document.body.style.overflow = "hidden";
  _Modal.classList.add("show-modal")
}


export const Modal = () => {
  let btnModal = _Modal.querySelector(".modal-close")

  const hideModal = () => {
    document.body.style.overflow = "auto";
    _Modal.classList.remove("show-modal")
  }

  btnModal.addEventListener('click', (event) => {
    event.stopPropagation()
    hideModal()
  })


  _Modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('cover-div')) {
      hideModal()
    }
  })
  return _Modal
}
