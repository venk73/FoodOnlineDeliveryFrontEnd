import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid,Paper, Avatar, TextField,  Button,Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {makeStyles} from '@material-ui/core';
const useStyles=makeStyles(()=>(
    {
      tabname:{
        fontSize:20
      }
    }
  )
  )
const CustomerLogin=({handleChange})=>{
    let history = useHistory();
    const classes=useStyles();
    const paperStyle = { padding: 20, height: '73vh', width: 400, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const [initialValues,setCustomerLogin] =useState( {
        userName: '',
        password: '',
        
    });
    const loginHandler =()=>{
        history.push('/customerdashboard');

    }
    const {userName,password}=initialValues;
    const onInputChange=(e)=>{
        setCustomerLogin({...initialValues,[e.target.name]: e.target.value});
    };
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),

        password: Yup.string().min(8, "Password minimum length should be 8").required("Required")
    })
    const onSubmit = async (e) => {
        e.preventDefault();
        //call post method
        await axios
          .post("http://localhost:1222/api/customerLogin/addCustomerLogin", initialValues)
          .then((response) => {
            if (response.status === 200)
              alert("Successflly Logged In!!\nWelcome to fooddelivery application");
            //history.push("/");
          })
          .catch((err) => console.log(err));
          
        //redirect to home page after storing
      };
    return (
        <Grid >
            <Paper style={paperStyle} className={classes.tabname}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form onSubmit={loginHandler}>
                            <Field as={TextField}  label='Username' type="email" name="userName"
                            value={userName} onChange={(e) => onInputChange(e)}
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="username" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                            value={password} onChange={(e) => onInputChange(e)}
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                              <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}</Button>
 
                           {/* <Button onClick={loginHandler}>Login</Button> */}

                        </Form>
                    )}
                </Formik>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={() => handleChange("event", 1)} >
                        Sign Up
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )

}

export default CustomerLogin