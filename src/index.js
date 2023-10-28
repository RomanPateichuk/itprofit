import { FeedbackForm } from "./components/FeedbackForm/FeedbackForm";
import { Preloader } from "./components/Preloader/Preloader"
import { Message } from "./components/Message/Message"
import { API } from "./common/api/api"
import "./index.scss"

const root = document.getElementById('root')

window.onload = async () => {
  root.append(Preloader())
  let resultTestServer = await API.testServer()
  document.querySelector('.preloader-wrapper').remove()
  root.prepend(Message({ status: resultTestServer.status, message: resultTestServer.message }))
}

root.append(FeedbackForm())