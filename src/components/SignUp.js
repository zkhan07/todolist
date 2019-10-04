import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Appbar from '../appbar';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { ENDPOINTS } from '../../utils/restCalling';
import Dashboard from '../dashboard';
// snackbar import
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Link} from 'react-router-dom';


const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };
  
  const useStyles1 = makeStyles(theme => ({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.main,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  }));
  
  function MySnackbarContentWrapper(props) {
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];
  
    return (
      <SnackbarContent
        className={clsx(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
        {...other}
      />
    );
  }
  
  MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
  };
  
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [login,setLogin]=React.useState({username:null,password:null,remember_me:false})
  const [open, setOpen] = React.useState(false);
  const [variant,setVariant] = React.useState("info");
  const [message,setMessage]=React.useState("Please Wait...");
  const [isAuth,setIsAuth]=React.useState(false);
  

  const handleClick = (msg,variant) => {
    setVariant(variant);
    setMessage(msg);  
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const loginAttempt = function loginAttempt(e){
    e.preventDefault();
    if(login.username && login.username!=="" && login.password && login.password!==""){
        const request={username:login.username,password:login.password};
        axios({method:"post",url:`${ENDPOINTS.BASE_URL}${ENDPOINTS.SERVICE_URL}${ENDPOINTS.ownerOrStaffLogin}`,data:request,headers:{"Content-Type":"application/json"}})
        .then((res)=>{
            console.log(res);
            if(res.data.msg==="success"){
            if(login.remember_me){
                localStorage.setItem("ownerId",res.data.details.owner_id);
                localStorage.setItem("accessToken",res.data.details.access_token);
                localStorage.setItem("remember",login.remember_me);
                handleClick("Login Success","success");
                setIsAuth(true);

            }else{
                sessionStorage.setItem("ownerId",res.data.details.owner_id);
                sessionStorage.setItem("accessToken",res.data.details.access_token);
                localStorage.setItem("remember",login.remember_me);
                handleClick("Login Success","success");
                setIsAuth(true);
            }
        }else{
            handleClick(res.data.details,"error");
        }
          
        }).catch((err)=>{
            handleClick(err,"error");
        });
    }
    else{
        handleClick("Improper value!!","error");
 
    }

  }
  const onTextChange=function onTextChange(event){
  setLogin({...login,[event.target.name]:event.target.value})
  console.log(login);
}
const onCheckChange=function onCheckChange(event){
    setLogin({...login,remember_me:event.target.checked});
}

useEffect(()=>{
    const remember=localStorage.getItem("remember")
    if(remember && remember!=="false"){
      const ownerId= localStorage.getItem("ownerId");
      const accessToken=localStorage.getItem("accessToken");
      if(ownerId && accessToken){
        setIsAuth(true);
      }else{
        setIsAuth(false);
      }

    }else{
      const ownerId =sessionStorage.getItem("ownerId");
      const accessToken =  sessionStorage.getItem("accessToken");
      
      if(ownerId && accessToken){
      
        setIsAuth(true);
      }else{
   
        setIsAuth(false);
      }

      
    }

  },[isAuth]);


if(isAuth){
    return(<Redirect to='dashboard'/>)
}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant={variant}
          message={message}
        />
      </Snackbar>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            onChange={onTextChange}
            label="Email Address"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            onChange={onTextChange}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            onChange={onCheckChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick = {loginAttempt}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="signup" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
       
      </Box>
    </Container>
  );
}