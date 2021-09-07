import React from "react";
import {
  Grid,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Typography,
} from "@material-ui/core";

//styles
import { styles } from "./systemInfoStyles";

//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import GroupIcon from "@material-ui/icons/Group";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AssessmentIcon from "@material-ui/icons/Assessment";
import CloseIcon from "@material-ui/icons/Close";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import LinearProgress from "@material-ui/core/LinearProgress";

export const SystemInfo = (props) => {
  const classes = styles(props);
  return (
    <Grid container>
      {/* //close buton */}

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={props.close}>
            <CloseIcon color="primary" />
          </IconButton>
        </Box>
      </Grid>

      {/* //heading */}

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box display="flex" justifyContent="center" mb={5}>
          <h3>Features you have</h3>
        </Box>
      </Grid>

      {/* //free feature list */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        style={classes.divider}
        mb={2}
      >
        <Box display="flex" alignItems="center" flexDirection="column">
          {/* //category topic */}
          <Box>
            <Typography style={classes.categoryTopics}>Totaly Free</Typography>
          </Box>

          {/* //feature list */}
          <Box>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ShowChartIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Mange your Stocks" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AttachMoneyIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Manage your sales" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <GroupIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Manage your employees" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AssessmentIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Analize your biz" />
              </ListItem>
            </List>
          </Box>
          <Box mt={2} mb={3}>
            <Button variant="contained" color="primary">
              Create Free
            </Button>
          </Box>
        </Box>
      </Grid>

      {/* //paid feature list */}
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box mt={3}>
            <Typography style={classes.categoryTopics}>Premium</Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <TransferWithinAStationIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Manage your customers" />
              </ListItem>
            </List>
          </Box>
          <Box>
            <Button variant="contained" style={classes.btnTryFree}>
              Try Premium
            </Button>
          </Box>
        </Box>
      </Grid>

      {/* //navigator and add button */}
      <Grid item item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box display="flex" justifyContent="center" mt={3}>
          <Box mt={props.deviceWidth < 1280 ? 2 : 0}>
            <IconButton
              style={classes.btnBackButton}
              onClick={props.changePage}
            >
              <NavigateBeforeIcon color="primary" />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
