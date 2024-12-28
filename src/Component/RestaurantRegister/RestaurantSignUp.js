import React from 'react'
import axios from "axios";
import '../../index.css'
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Paper, Avatar, Typography,Button, TextField } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import * as Yup from 'yup'
const RestaurantSignUp = () => {
    let history = useHistory();
    const paperStyle = { padding: 20, width: 400, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


   
    const [initialValues,setCustomer] =useState( {
        managerName: '',
		email: '',
        gender: '',
        phoneNumber: '',
		restaurantName: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false,
    });
    const signinHandler =()=>{
        history.push('/restaurant');
    }
    const {managerName,phoneNumber,restaurantName}=initialValues;
    const onInputChange=(e)=>{
        setCustomer({...initialValues,[e.target.name]: e.target.value});
    };
    const validationSchema = Yup.object().shape({
        managerName: Yup.string().min(3, "It's too short").required("Required"),
		email: Yup.string().email("Enter valid email").required("Required"),
        gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phone_number: Yup.string().matches(phoneRegExp,'phone number not valid').required("required"),
		restaurantName: Yup.string().min(3, "It's too short").required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })
    const onSubmit = async (e) => {
        e.preventDefault();
        //call post method
        await axios
          .post("http://localhost:1222/api/customer/add", initialValues)
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
                        <Form onSubmit={signinHandler}>

                            <Field as={TextField}  fullWidth name="managerName" label='ManagerName'
                                placeholder="Enter your manager name" fullWidth required  helperText={<ErrorMessage name="managerName" />} />
							<Field as={TextField} fullWidth name="email" label='Email'
                                placeholder="Enter your email" fullWidth required helperText={<ErrorMessage name="email" />} />
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
                            <Field as={TextField} fullWidth name="restaurantName" label='RestaurantName'
                                placeholder="Enter your restaurant name" fullWidth required helperText={<ErrorMessage name="restaurant name" value={restaurantName} onChange={(e) => onInputChange(e)} />} />
							<Field as={TextField} fullWidth name='password' type="password"
                                label='Password' placeholder="Enter your password" fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={TextField} fullWidth name="confirmPassword" type="password"
                                label='Confirm Password' placeholder="Confirm your password" fullWidth required
                                helperText={<ErrorMessage name="confirmPassword" />} />
                            <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="I accept the terms and conditions."
                            />
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                            <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                color='primary'>{props.isSubmitting ? "Loading" : "Sign up"}</Button>

                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )

}

export default RestaurantSignUp;