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

let p = document.createElement("p");
p.innerHTML = "Quis Id velit Veniam ipsum quis ad sit excepteur id tempor ea minim magna. Fugiat pariatur enim eu sint exercitation id anim ex dolor proident. Incididunt ad ipsum dolor exercitation.Id magna occaecat veniam elit sunt pariatur cillum mollit deserunt veniam laborum mollit adipisicing in. Commodo proident adipisicing in exercitation exercitation cillum cillum voluptate mollit duis id. Duis minim in laboris est excepteur pariatur voluptate ullamco aliquip ex irure et.Voluptate irure ipsum adipisicing anim quis magna nisi. Reprehenderit elit veniam occaecat cillum esse qui occaecat. Anim id deserunt culpa commodo tempor minim cillum ex sint ex id nostrud sit ipsum. Id do ea magna id eiusmod cillum amet. Et tempor voluptate aliqua sunt enim consequat est enim.Magna veniam laborum in eu. Enim laboris aliquip eiusmod dolor fugiat esse ad. Ea commodo tempor sit dolor aliquip id. Ad sit labore ut minim magna. Labore cupidatat eiusmod consequat culpa. Exercitation adipisicing minim labore ea deserunt duis ex.Labore duis aute ut minim aliquip irure fugiat consequat officia occaecat mollit ex. Magna et ex ea dolore labore ipsum in ut ipsum commodo id. Ea minim laboris nostrud officia ad eu. Ex dolore cillum laboris in nisi aliquip aliqua. Velit fugiat sint nostrud sit.Ad ad ."

root.append(CommonButton("Show modal", showModal), FeedbackForm(), p, Modal())


