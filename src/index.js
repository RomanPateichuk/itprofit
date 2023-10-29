import { Modal, showModal } from "./components/Modal/Modal"
import { FeedbackForm } from "./components/FeedbackForm/FeedbackForm"
import { CommonButton } from "./components/Button/Button"
import { API } from "./common/api/api"
import "./index.scss"


const root = document.getElementById('root')

const serverInit = async () => {
  let resultTestServer = await API.testServer()
  console.log("server init: ", { status: resultTestServer.status, message: resultTestServer.message });
}

window.onload = serverInit


root.append(CommonButton("Show modal", showModal), FeedbackForm(), Modal())


