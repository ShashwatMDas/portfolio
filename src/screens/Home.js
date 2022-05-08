import React from 'react';
import Typography from '@material-ui/core/Typography';
import LeftNavBar from '../components/LeftNavBar'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { COLOR_CODES } from '../constants';


const drawerWidth = (window.screen.width > 600 ? '20vw' : '40vw');


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: COLOR_CODES['backgroundColor'],
    color: COLOR_CODES['textColor'],
    flexDirection: 'row',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#191d2b",
  },
  navbarcont: {
    backgroundColor: "#191d2b",
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    wordBreak: 'break-word',
    padding: theme.spacing(3),
    flex: 1,
    // height: "100vh",
    alignItems: 'center',
    marginTop: "10vh",
    alignSelf: 'center',
    alignContent: 'center'
  },
}));

function Home(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <LeftNavBar />
      <main className={classes.content}>
        <Typography variant={window.screen.width > 600 ? "h2" : "h3"} style={{marginBottom: 30}}>
          Hi! I am <span style={{color: COLOR_CODES['orange']}}>Shashwat M. Das</span>
        </Typography>
        <Typography paragraph variant={"h6"}>
          I am a <b style={{color: COLOR_CODES['red']}}>Software Engineer</b> currently working full-time at a Singapore based payments company <b style={{color: COLOR_CODES['red']}}>CODA Payments</b>.  
        </Typography>
        <a style={{color: COLOR_CODES['orange'], zIndex: 100, position: 'relative'}} href="https://www.facebook.com/yupiamshashwat"><FacebookIcon /></a>&emsp;
        <a style={{color: COLOR_CODES['orange'], zIndex: 100, position: 'relative'}} href="https://in.linkedin.com/in/shashwat-m-das-92bb8b156"><LinkedInIcon /></a>&emsp;
        <a style={{color: COLOR_CODES['orange'], zIndex: 100, position: 'relative'}} href="https://www.instagram.com/shashwatmdas/"><InstagramIcon /></a>&emsp;
        <a style={{color: COLOR_CODES['orange'], zIndex: 100, position: 'relative'}} href="https://github.com/ShashwatMDas"><GitHubIcon /></a>
      </main>
    </div>
  );
}

export default Home;