import React from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import {Helmet} from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import Footer from '../../Layout/Footer/Footer';
function Add() {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Navbar/>
        <Formik
       initialValues={{ image: '', title: '', description: '' }}
       validationSchema={Yup.object({
        image: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
           title: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
           description: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
       })}
       onSubmit={(values)=>
      axios.post("http://localhost:7000/users", values)
      }
     >
       <Form>
         <label htmlFor="image">image</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />
 
         <label htmlFor="title">title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
 
         <label htmlFor="description">description </label>
         <Field name="description" type="description" />
         <ErrorMessage name="description" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
     <Footer/>
    </div>
  )
}

export default Add