import React from 'react';
import Typography from '@material-ui/core/Typography';
import LeftNavBar from '../components/LeftNavBar'
import '../App.css'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LanguageIcon from '@material-ui/icons/Language';
import AppleIcon from '@material-ui/icons/Apple';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import StorageIcon from '@material-ui/icons/Storage';
import AndroidIcon from '@material-ui/icons/Android';
import CloudIcon from '@material-ui/icons/Cloud';
import SettingsIcon from '@material-ui/icons/Settings';
import { COLOR_CODES } from '../constants';
const drawerWidth = (window.screen.width > 600 ? '20vw' : '40vw');


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: COLOR_CODES['backgroundColor'],
    color: COLOR_CODES['textColor'],
    height: "100%",
    flexDirection: 'row'
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
  media: {
    width: "100%",
    height: 300
    
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#191d2b"
  },
  navbarcont: {
    backgroundColor: "#191d2b",
    color: "#fff"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    flex: 1,
    marginTop: "10vh",
    textAlign: 'left'
    // height: "100vh",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    color: "#fff"
  },
  pos: {
    marginBottom: 12,
  },
  card: {
      width: "100%",
      backgroundColor: "rgba(30, 30, 30, 0.8)",
      boxShadow: `0 7px 18px ${COLOR_CODES['red']}, 0 7px 18px rgba(0,0,0,0.22)`,
      color: "#fff"
  }
}));

function Home(props) {
  const classes = useStyles();

  function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }

  return (
    <div className={classes.root}>
      <LeftNavBar />
      <main className={classes.content}>
        <Typography variant="h2" style={{marginBottom: 30, color: COLOR_CODES['orange']}}>
          About Me
        </Typography>
        <div style={{width: window.screen.width > 600 ?  "10vw" : "50vw", height: 3, flexDirection: 'column', backgroundColor: "#fff", borderRadius: 5, marginBottom: 30}}><div style={{flex: 1, backgroundColor: COLOR_CODES['red'], width: window.screen.width > 600 ?  "5vw" : "25vw", height: 3, borderRadius: 5}}></div><div style={{flex: 1, backgroundColor: "#000", width: "5vw"}}></div></div>
        <div style={{flexDirection: 'column', width: "100%"}}>
        <Grid container >
        <Grid item lg={5} style={{flex: 1}}>
        <img src="/shashwatgoa.jpg" alt='shashwat' style={{height: window.screen.width > 600 ? '25vw' : '40vh'}} />
        </Grid>
        <Grid item lg={7}>
        <Typography variant="h4">
        <b style={{color: COLOR_CODES['orange']}}>Hey, Nice to meet you! </b>
        </Typography><br />
            I am an India based Software Engineer, graduated from IIT Kharagpur in May 2022. In the 4 years of my journey as a Software engineer, I have been passionate about building and delivering 
            the most beautiful and perfomant softwares. I have worked in quite a few different companies as an intern or as a part time engineer, ranging from early stage startups to multi-million dollar MNCs.
             And now I'm currently working as a Full-time Software Engineer at CODA Payments. I'm quietly confident, 
            naturally curious, and perpetually working on improving my chops one design problem at a time.<br /><br />
        <Typography paragraph style={{marginTop: 30}}>
            <b>Name: </b>Shashwat M. Das<br />
            <b>Age: </b>{getAge(new Date(2000, 5, 7))}<br />
            <b>Current Company: </b>CODA Payments<br />
            <b>Nationality: </b>Indian<br />
            <b>Languages: </b>English, Hindi<br />
            <b>Phone: </b>(+91) 9609942333<br />
            <b>Email: </b>shashwatmd.iitkgp@gmail.com<br /><br />
        </Typography>
        </Grid>
        </Grid>
        </div>
        <Typography variant="h5" style={{marginBottom: 50,marginTop: 80, textAlign: 'center'}}>
          
        </Typography>
        <Grid container spacing={3}>
        <Grid item sm={4}>
          <Card className={classes.card}>
            <CardContent>
              <LanguageIcon style={{color: COLOR_CODES['red'], fontSize: 50}} />
              <Typography className={classes.title} style={{color: COLOR_CODES['red']}} variant="h6" gutterBottom>
                  Full-Stack Development
              </Typography>
              <div style={{width: window.screen.width > 600 ?  "6vw" : "35vw", height: 5, flexDirection: 'column', backgroundColor: "#fff", borderRadius: 5, marginBottom: 30}}><div style={{flex: 1, backgroundColor: COLOR_CODES['red'], width: window.screen.width > 600 ?  "3vw" : "17.5vw", height: 5, borderRadius: 5}}></div><div style={{flex: 1, backgroundColor: "#000", width: "2vw"}}></div></div>
              <Typography paragraph style={{color: COLOR_CODES['textColor']}}>
                  Adept in Frontend and Backend Development. Some skills - Django, NodeJS, Spring Boot, Gin, GraphQL, ReactJS
              </Typography>  
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.card}>
            <CardContent>
              <AndroidIcon style={{color: COLOR_CODES['red'], fontSize: 50}} /><AppleIcon style={{color: COLOR_CODES['red'], fontSize: 50, marginLeft: 20}} />
              <Typography style={{color: COLOR_CODES['red']}} className={classes.title} color="textSecondary" variant="h6" gutterBottom>
                  App Development
              </Typography>
              <div style={{width: window.screen.width > 600 ?  "6vw" : "35vw", height: 5, flexDirection: 'column', backgroundColor: "#fff", borderRadius: 5, marginBottom: 30}}><div style={{flex: 1, backgroundColor: COLOR_CODES['red'], width: window.screen.width > 600 ?  "3vw" : "17.5vw", height: 5, borderRadius: 5}}></div><div style={{flex: 1, backgroundColor: "#000", width: "2vw"}}></div></div>
              <Typography paragraph style={{color: COLOR_CODES['textColor']}}>
                  Adept in Cross-Platform App Development and deployment using React Native. (React Native Cli + Expo Cli)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.card}>
            <CardContent>
              <StorageIcon style={{color: COLOR_CODES['red'], fontSize: 50}} />
              <Typography style={{color: COLOR_CODES['red']}} className={classes.title} color="textSecondary" variant="h6" gutterBottom>
                  Databse
              </Typography>
              <div style={{width: window.screen.width > 600 ?  "6vw" : "35vw", height: 5, flexDirection: 'column', backgroundColor: "#fff", borderRadius: 5, marginBottom: 30}}><div style={{flex: 1, backgroundColor: COLOR_CODES['red'], width: window.screen.width > 600 ?  "3vw" : "17.5vw", height: 5, borderRadius: 5}}></div><div style={{flex: 1, backgroundColor: "#000", width: "2vw"}}></div></div>
              <Typography paragraph style={{color: COLOR_CODES['textColor']}}>
                  Experienced in working with various SQL and NoSQL databases. Ex - MySQL, PostgreSQL, MongoDB, DynamoDB
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        </Grid><br /><br />
        <Grid container spacing={3}>
        <Grid item sm={4}>
          <Card className={classes.card}>
            <CardContent>
              <ViewWeekIcon style={{color: COLOR_CODES['red'], fontSize: 50}} />
              <Typography style={{color: COLOR_CODES['red']}} className={classes.title} color="textSecondary" variant="h6" gutterBottom>
                  Blockchain Development
              </Typography>
              <div style={{width: window.screen.width > 600 ?  "6vw" : "35vw", height: 5, flexDirection: 'column', backgroundColor: "#fff", borderRadius: 5, marginBottom: 30}}><div style={{flex: 1, backgroundColor: COLOR_CODES['red'], width: window.screen.width > 600 ?  "3vw" : "17.5vw", height: 5, borderRadius: 5}}></div><div style={{flex: 1, backgroundColor: "#000", width: "2vw"}}></div></div>
              <Typography paragraph style={{color: COLOR_CODES['textColor']}}>
                  Smart contracts and Web3 developer on the Ethereum(Solidity) and Solana Blockchains(Rust - Anchor)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.card}>
            <CardContent>
              <CloudIcon style={{color: COLOR_CODES['red'], fontSize: 50}} />
              <Typography className={classes.title} style={{color: COLOR_CODES['red']}} variant="h6" gutterBottom>
                  Cloud Computing
              </Typography>
              <div style={{width: window.screen.width > 600 ?  "6vw" : "35vw", height: 5, flexDirection: 'column', backgroundColor: "#fff", borderRadius: 5, marginBottom: 30}}><div style={{flex: 1, backgroundColor: COLOR_CODES['red'], width: window.screen.width > 600 ?  "3vw" : "17.5vw", height: 5, borderRadius: 5}}></div><div style={{flex: 1, backgroundColor: "#000", width: "2vw"}}></div></div>
              <Typography paragraph style={{color: COLOR_CODES['textColor']}}>
                  Experienced in most of the cloud computing tools for software development and deployment in AWS and GCP
              </Typography>  
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.card}>
            <CardContent>
              <SettingsIcon style={{color: COLOR_CODES['red'], fontSize: 50}} />
              <Typography style={{color: COLOR_CODES['red']}} className={classes.title} color="textSecondary" variant="h6" gutterBottom>
                  DevOps
              </Typography>
              <div style={{width: window.screen.width > 600 ?  "6vw" : "35vw", height: 5, flexDirection: 'column', backgroundColor: "#fff", borderRadius: 5, marginBottom: 30}}><div style={{flex: 1, backgroundColor: COLOR_CODES['red'], width: window.screen.width > 600 ?  "3vw" : "17.5vw", height: 5, borderRadius: 5}}></div><div style={{flex: 1, backgroundColor: "#000", width: "2vw"}}></div></div>
              <Typography paragraph style={{color: COLOR_CODES['textColor']}}>
                  Experienced in building and deploying performant and scalable infrastructures. Skills - AWS/GCP, Terraform 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
        <br /><br /><br />
      </main>
    </div>
  );
}

export default Home;