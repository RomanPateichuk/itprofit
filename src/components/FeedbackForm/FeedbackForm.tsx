import React, { useState, useEffect } from "react"
import s from "./FeedbackForm.module.scss"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import Preloader from "../common/Preloader/Preloader"
import ShowMessage from "../common/ShowMessage/ShowMessage"
import { feedbackFormApi } from '../../api/api'
const FeedbackForm = () => {

  useEffect(() => {
    setServerResponse(null)
    setStatusLoading('loading')
    feedbackFormApi.testServer().then(response => {
      setServerResponse({ status: response.data.status, message: response.data.message })
    }).catch(err => {
      setServerResponse({ status: err.response.data.status, message: err.response.data.message })
    }).finally(() => setStatusLoading('idle'))
  }, []);

  type serverResponseObject = {
    status: String,
    message: String,
  }

  const [statusLoading, setStatusLoading] = useState<string>('')
  const [serverResponse, setServerResponse] = useState<serverResponseObject | null>()

  const FeedbackFormValidateSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email("email must be a valid").required(),
    phone: Yup.number().required().typeError("phone must be a number type"),
    message: Yup.string().required(),
  })

  let sendFormData = (formData: Object) => {
    setServerResponse(null)
    setStatusLoading('loading')
    feedbackFormApi.sendFormData(formData).then(response => {
      setServerResponse({ status: response.data.status, message: response.data.message })
    })
      .catch(err => {
        setServerResponse({ status: err.response.data.status, message: err.response.data.message })
      }).finally(() => {
        setStatusLoading('idle')
      })
  }

  return (<div>
    {(statusLoading === "loading") && <Preloader />}
    {serverResponse && <ShowMessage status={serverResponse.status} message={serverResponse.message} />}

    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        message: '',
      }}
      validationSchema={FeedbackFormValidateSchema}
      onSubmit={(values, { resetForm }) => {
        sendFormData(values)
        if (serverResponse?.status === 'success') {
          resetForm({ values: undefined })
        }
      }}
    >
      {({ errors, touched }) => (
        <div className={s.wrapper}>
          <Form noValidate>
            <div className={s.title}>Feedback</div>
            <div className={s.inputWrapper}>
              <Field name="name" placeholder="name" />
              {errors.name ? (<div className={s.error}>{errors.name}</div>) : null}
            </div>
            <div className={s.inputWrapper}>
              <Field name="email" type="email" placeholder="email" />
              {errors.email ? (<div className={s.error}>{errors.email}</div>) : null}
            </div>
            <div className={s.inputWrapper}>
              <Field name="phone" type="phone" placeholder="phone" />
              {errors.phone ? (<div className={s.error}>{errors.phone}</div>) : null}
            </div>
            <div className={s.inputWrapper}>
              <Field name="message" as="textarea" placeholder="message" />
              {errors.message ? (<div className={s.error}>{errors.message}</div>) : null}
            </div>
            <button type="submit">Send</button>
          </Form>
        </div>
      )}


    </Formik>

  </div >
  )
}

export default FeedbackForm

