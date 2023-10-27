import React from "react"
import s from "./ShowMessage.module.scss"

const ShowMessage = (props) => {
  return (
    <div className={props.status === 'error' ? s.error : s.success}>
      {props.status === 'error' &&

        <p className={s.error}>{props.message}</p>

      }
      {props.status === 'success' &&

        <p className={s.success}>{props.message}</p>

      }
    </div>
  )

}


export default ShowMessage