import React from 'react'
import s from './Preloader.module.scss'


let Preloader = () => {
  return <div className={s.wrapper}>
    <span className={s.preloader}></span>
  </div>
}


export default Preloader