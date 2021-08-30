import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Divider,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import { UserAuthTemplate } from "../../pages/UserAuthTemplate/userAuthUserAuthTemplate";
import axios from "axios";

//actions
import { setUserLoginFail } from "../../state/actions/actionUserLoginState/Action-userLoginFail";

//api config file
import { config } from "../../configs/jsonConfig";

//styles
import { styles } from "./userLoginStyles";

//component

export const UserLogin = () => {
  const history = useHistory();

  useEffect(() => {
    const userLoged = localStorage.getItem("userInfo");

    if (userLoged) {
      history.push("/pos");
    }
  });

  const useStyles = styles();
  const classes = useStyles();

  //statets
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  //user login state
  const userLoginState = bindActionCreators(setUserLoginFail, useDispatch());

  //user authentication function

  const logUser = async () => {
    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:2000/api/login",
        {
          email,
          password,
        },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/pos");
      setLoading(false);
    } catch (error) {
      userLoginState(false);
      setLoading(false);

      setTimeout(() => userLoginState({ state: true, message: null }), 3000);
    }
  };

  return (
    <UserAuthTemplate page="Register">
      <Grid container direction="column">
        <Grid>
          <Box item pt={2} display="flex" justifyContent="center" pt={4} pb={3}>
            <h2>Login</h2>
          </Box>
        </Grid>

        <Grid>
          <Box item pt={2} display="flex" justifyContent="center" p={2}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              size="small"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
        </Grid>

        <Grid>
          <Box item pt={2} display="flex" p={2}>
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              id="outlined-basic"
              variant="outlined"
              size="small"
              label="Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {!showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid>
          <Box item pt={2} display="flex" justifyContent="center">
            {loading ? (
              <CircularProgress color="secondary" />
            ) : (
              <Button size="large" variant="contained" onClick={logUser}>
                Sign In
              </Button>
            )}
          </Box>
        </Grid>
        <Grid item pb={2}>
          <Box className={classes.forgotPasswordLables} p={2}>
            Forget password
          </Box>
        </Grid>

        <Divider light={true} />
        <Grid>
          <Box item pt={2} display="flex" justifyContent="center" mt={2} mb={3}>
            <Button size="large" variant="contained">
              Sign In with google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </UserAuthTemplate>
  );
};
