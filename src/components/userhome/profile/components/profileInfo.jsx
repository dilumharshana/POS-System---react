import { useHistory } from "react-router-dom";
import { Grid, Box, Typography, Avatar, IconButton } from "@material-ui/core";
import StoreIcon from "@mui/icons-material/Store";
import EditIcon from "@mui/icons-material/Edit";

//styles
import { StyledBadge } from "../profileStyles";

export const ProfileInfo = ({ classes, currentUser }) => {
  const history = useHistory();

  return (
    <>
      <Grid item xs={6}>
        <StyledBadge
          variant="dot"
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Avatar
            alt={currentUser.name}
            src={currentUser.adminProfilePicture}
            className={classes.profilePic}
          />
        </StyledBadge>
      </Grid>
      <Grid item>
        <Box mt={2}>
          <Typography variant="h6" className={classes.userName}>
            {currentUser.name}
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.email}>{currentUser.email}</Box>
      </Grid>
      <Grid>
        <Box display="flex" mt={2}>
          <Box>
            <StoreIcon />
          </Box>
          <Box className={classes.email} ml={2}>
            owns {currentUser.possystems && currentUser.possystems.length}{" "}
            active systems
          </Box>
        </Box>
      </Grid>
      <Grid>
        <Box display="flex" alignItems="center">
          <Box>
            <IconButton onClick={() => history.push("/editAdmin")}>
              <EditIcon />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
