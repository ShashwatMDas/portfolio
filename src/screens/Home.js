import React from 'react';
import Typography from '@material-ui/core/Typography';
import LeftNavBar from '../components/LeftNavBar'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const drawerWidth = (window.screen.width > 600 ? '20vw' : '40vw');


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#000",
    color: "#fff",
    height: "100vh",
    flexDirection: 'row',
    fontFamily: "'Poppins', sans-serif !important"
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
      fontFamily: "'Poppins', sans-serif !important"
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
    fontFamily: "'Poppins', sans-serif !important"
  },
  navbarcont: {
    backgroundColor: "#191d2b",
    color: "#fff",
    fontFamily: "'Poppins', sans-serif !important"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    flex: 1,
    // height: "100vh",
    alignItems: 'center',
    alignSelf: 'center',
    fontFamily: "'Poppins', sans-serif !important",
    alignContent: 'center'
  },
}));

function Home(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <LeftNavBar />
      <main className={classes.content}>
        <Typography variant="h2" style={{marginBottom: 30}}>
          Hi, I am <span style={{color: "#037fff"}}>Shashwat M. Das</span>
        </Typography>
        <Typography paragraph>
          I am a Full-Stack Developer. I am currently Senior Manager at Entrepreneurship Cell, IIT Kharagpur 
        </Typography>
        <a href="https://www.facebook.com/yupiamshashwat" style={{color: "#fff", zIndex: 100, position: 'relative'}}><FacebookIcon /></a>&emsp;<a style={{color: "#fff", zIndex: 100, position: 'relative'}} href="https://in.linkedin.com/in/shashwat-m-das-92bb8b156"><LinkedInIcon /></a>&emsp;<a style={{color: "#fff", zIndex: 100, position: 'relative'}} href="https://www.instagram.com/shashwatmdas/"><InstagramIcon /></a>&emsp;<a style={{color: "#fff", zIndex: 100, position: 'relative'}} href="https://github.com/ShashwatMDas"><GitHubIcon /></a>
      </main>
    </div>
  );
}

export default Home;