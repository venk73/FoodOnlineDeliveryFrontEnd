import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Link } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import * as Yup from 'yup'

const CustomerSignUp=()=> {
    let history = useHistory();
    const paperStyle = { padding: 20, width: 400, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const [initialValues,setCustomer] =useState( {
        firstName: '',
		lastName: '',
        email: '',
        gender: 'male',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false,
    });
    const {firstName,lastName,email,phoneNumber}=initialValues;
    const onInputChange=(e)=>{
        setCustomer({...initialValues,[e.target.name]: e.target.value});
    };
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "It's too short").required("Required"),
		lastName: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phoneNumber: Yup.number().min(10,"Enter valid Phone Number").required('Required'),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })
    //for form submition
  const onSubmit = async (e) => {
    e.preventDefault();
    //call post method
    await axios
      .post("http://localhost:1222/api/Restaurant/add", initialValues)
      .then((response) => {
        if (response.status === 200)
          alert("Successflly Signed Up!!\nWelcome to fooddelivery application");
        //history.push("/");
      })
      .catch((err) => console.log(err));
    //redirect to home page after storing
  };
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>

                            <Field as={TextField} fullWidth name="firstName" label='FirstName'
                                placeholder="Enter your first name" fullWidth required helperText={<ErrorMessage name="first name" value={firstName} onChange={(e) => onInputChange(e)}/>} />
							<Field as={TextField} fullWidth name="lastName" label='LastName'
                                placeholder="Enter your last name" fullWidth required helperText={<ErrorMessage name="last name" value={lastName} onChange={(e) => onInputChange(e)} />} />	
                            <Field as={TextField} fullWidth name="email" label='Email'
                                placeholder="Enter your email" fullWidth required helperText={<ErrorMessage name="email"value={email} onChange={(e) => onInputChange(e)}/>} />
                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend" fullWidth required>Gender</FormLabel>
                                < Field as={RadioGroup} aria-label="gender" name="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </ Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                            <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number'
                                placeholder="Enter your phone number" fullWidth required helperText={<ErrorMessage name="phoneNumber" value={phoneNumber} onChange={(e) => onInputChange(e)}/>} />
                            <Field as={TextField} fullWidth name='password' type="password"
                                label='Password' placeholder="Enter your password" fullWidth required
                                helperText={<ErrorMessage name="password"/>} />
                            <Field as={TextField} fullWidth name="confirmPassword" type="password"
                                label='Confirm Password' placeholder="Confirm your password" fullWidth required
                                helperText={<ErrorMessage name="confirmPassword" />} />
                            <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="I accept the terms and conditions."
                            />
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                            <center> <Link href="/Customer"  className="btn btn-primary btn btn-info">Sign Up</Link></center>

                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )

}

export default CustomerSignUp;