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
const CustomerLogin=({handleChange})=>{
    let history = useHistory();
    const paperStyle = { padding: 20, height: '73vh', width: 400, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const [initialValues,setCustomerLogin] =useState( {
        username: '',
        password: '',
        remember: false,
    });
    const loginHandler =()=>{
        history.push('/CustomerDashboard');
    }
    const {username,password}=initialValues;
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
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="username" value={username} onChange={(e) => onInputChange(e)}/>}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" value={password} onChange={(e) => onInputChange(e)}/>} />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            
                           <Button onClick={loginHandler}>LOgin</Button>

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