import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Profile from "./../../Images/Profile.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "40px auto",
      width: "850px",
      height: "510px",
    },
  },
  image: {
    marginTop: "50px",
    marginBottom: "50px",
    marginLeft: "35px",
    marginRight: "-70px",
    width: "350px",
    height: "350px",
  },
  profile: {
    marginTop: "25px",
    marginBottom: "25px",
    width: "350px",
    height: "450px",
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RestaurantEditProfile = () => {

  const bgStyles = {
    backgroundColor:"lightgreen",
    marginTop: "-5px",
    backgroundSize: "cover",
    height: "400px",
  };
  
  const classes = useStyles();

  const [userDetails, setUserDetails] = useState({
    restaurantname : 'The Palace',
    managername : 'Jerry',
    email : 'tomjerry@gmail.com',
    phone : '7995191231'
  });

  const [readOnly, setReadOnly] = useState({ readOnly: true });

  const [textFieldType, setTextFieldType] = useState("standard");

  function toggleReadOnly() {
    setReadOnly({ readOnly: false });
    setTextFieldType("outlined");
  }

  function handleChange(e) {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    console.log(userDetails);
  }

  function onSubmit(e) {
    e.preventDefault();
    setReadOnly({ readOnly: true });
    setTextFieldType("standard");
  }

  return (
    <div style={{ height: "650px" }}>
      <div style={bgStyles}>
        <Container className={classes.root}>
          <Paper elevation={3}>
            <Box display="flex" justifyContent="center">
            <img
                className={classes.image}
                src={Profile}
                alt="Profile Image"
              />

              <Container className={classes.profile}>
                <Container component="main" style={{ width: "380px" }}>
                  <CssBaseline />
                  <div className={classes.paper}>
                    <h3>Profile Details</h3>
                    <form
                      className={classes.form}
                      validate
                      type="get"
                      onSubmit={onSubmit}
                    >
                      <Grid container spacing={5}>
                        <Grid item xs={12}>
                          <TextField
                            variant={textFieldType}
                            size="small"
                            name="restaurantname"
                            label="Restaurant Name"
                            fullWidth
                            id="restaurantname"
                            InputProps={readOnly}
                            type="text"
                            value={userDetails.restaurantname}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            variant={textFieldType}
                            size="small"
                            label="Manager Name"
                            fullWidth
                            id="managername"
                            InputProps={readOnly}
                            name="managername"
                            type="text"
                            value={userDetails.managername}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            variant={textFieldType}
                            size="small"
                            label="Phone"
                            fullWidth
                            id="phone"
                            InputProps={readOnly}
                            name="phone"
                            type="phone"
                            value={userDetails.phone}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            size="small"
                            variant={textFieldType}
                            id="email"
                            InputProps={readOnly}
                            name="email"
                            type="email"
                            label="Email Id"
                            autoComplete="email"
                            value={userDetails.email}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                      <Box display="flex" justifyContent="center">
                        {readOnly.readOnly && (
                          <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={toggleReadOnly}
                          >
                            Edit Profile
                          </Button>
                        )}

                        {!readOnly.readOnly && (
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                          >
                            Save
                          </Button>
                        )}
                      </Box>
                    </form>
                  </div>
                </Container>
              </Container>
            </Box>
          </Paper>
        </Container>
      </div>
    </div>
  );
};
export default RestaurantEditProfile;