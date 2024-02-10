import PreloaderHTML from "./Preloader.html"
import convertStringToHTML from '../../common/convertStringToHTML'
import "./Preloader.scss"


export const Preloader = () => {
  return convertStringToHTML(PreloaderHTML)
}