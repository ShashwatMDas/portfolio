import React from 'react';
import Typography from '@material-ui/core/Typography';
import LeftNavBar from '../components/LeftNavBar'
import '../App.css'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-animated-progress-bar';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import Education from '../components/Education'
import GetAppIcon from '@material-ui/icons/GetApp';
import "../App.css"
const drawerWidth = (window.screen.width > 600 ? '20vw' : '40vw');


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#000",
    color: "#fff",
    height: "100%",
    width: '100%',
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
  actionsContainer: {
    marginBottom: theme.spacing(2),
    backgroundColor: "#000"
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#fff",
    backgroundColor: 'rgba(30, 30, 30, 0.8)'
  },
}));



function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LeftNavBar />
      <main className={classes.content}>
        <Typography variant="h2" style={{marginBottom: 30}}>
          Proficiency
        </Typography>
        <div style={{width: "10vw", height: 3, flexDirection: 'column', backgroundColor: "#fff", borderRadius: 5, marginBottom: 30}}><div style={{flex: 1, backgroundColor: "#037fff", width: "5vw", height: 3, borderRadius: 5}}></div><div style={{flex: 1, backgroundColor: "#000", width: "5vw"}}></div></div>
        <div style={{flexDirection: 'column', width: "100%"}}>
        <Grid container spacing={2}>
        <Grid item sm={3} xs={6} style={{ padding: "1vw"}} >
        <Typography style={{height: 20}}>Frontend Development</Typography><br />
        <ProgressBar
          width="100%"
          height="10px"
          rect
          fontColor="gray"
          percentage="90"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          defColor={{
            fair: '#037fff',
            good: '#037fff',
            excellent: '#037fff',
            poor: '#037fff',
          }}
          bgColor="#037fff"
          trackBorderColor="grey"
        />
        </Grid>
        <Grid item sm={3} xs={6} style={{ padding: "1vw"}} >
        <Typography style={{height: 20}}>Backend Development</Typography><br />
        <ProgressBar
        width="100%"
        height="10px"
        rect
        fontColor="gray"
        percentage="90"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#037fff"
        defColor={{
          fair: '#037fff',
          good: '#037fff',
          excellent: '#037fff',
          poor: '#037fff',
        }}
        trackBorderColor="grey"
      />
        </Grid>
        <Grid item sm={3} xs={6} style={{ padding: "1vw"}} >
        <Typography style={{height: 20}}>DBMS</Typography><br />
        <ProgressBar
        width="100%"
        height="10px"
        rect
        fontColor="gray"
        percentage="90"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#037fff"
        defColor={{
          fair: '#037fff',
          good: '#037fff',
          excellent: '#037fff',
          poor: '#037fff',
        }}
        trackBorderColor="grey"
      />
        </Grid>
        <Grid item sm={3} xs={6} style={{ padding: "1vw"}} >
        <Typography style={{height: 20}}>AWS/Google Cloud/Azure</Typography><br />
        <ProgressBar
        width="100%"
        height="10px"
        rect
        fontColor="gray"
        percentage="50"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#037fff"
        defColor={{
          fair: '#037fff',
          good: '#037fff',
          excellent: '#037fff',
          poor: '#037fff',
        }}
        trackBorderColor="grey"
      />
        </Grid>
        </Grid>
        <Grid container spacing={2}>
        <Grid item sm={3} xs={6} style={{ padding: "1vw"}} >
        <Typography style={{height: 20}}>Python</Typography><br />
        <ProgressBar
        width="100%"
        height="10px"
        rect
        fontColor="gray"
        percentage="60"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#037fff"
        defColor={{
          fair: '#037fff',
          good: '#037fff',
          excellent: '#037fff',
          poor: '#037fff',
        }}
        trackBorderColor="grey"
      />
        </Grid>
        <Grid item sm={3} xs={6} style={{ padding: "1vw"}} >
        <Typography style={{height: 20}}>Javascript</Typography><br />
        <ProgressBar
        width="100%"
        height="10px"
        rect
        fontColor="gray"
        percentage="80"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#037fff"
        defColor={{
          fair: '#037fff',
          good: '#037fff',
          excellent: '#037fff',
          poor: '#037fff',
        }}
        trackBorderColor="grey"
      />
        </Grid>
        
        <Grid item sm={3} xs={6} style={{ padding: "1vw"}} >
        <Typography style={{height: 20}}>C/C++</Typography><br />
        <ProgressBar
        width="100%"
        height="10px"
        rect
        fontColor="gray"
        percentage="70"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#037fff"
        defColor={{
          fair: '#037fff',
          good: '#037fff',
          excellent: '#037fff',
          poor: '#037fff',
        }}
        trackBorderColor="grey"
      />
        </Grid>
        <Grid item sm={3} xs={12} style={{ padding: "1vw"}} >
        <Typography style={{height: 20}}>App Development(React Native)</Typography><br />
        <ProgressBar
        width="100%"
        height="10px"
        rect
        fontColor="gray"
        percentage="80"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#037fff"
        defColor={{
          fair: '#037fff',
          good: '#037fff',
          excellent: '#037fff',
          poor: '#037fff',
        }}
        trackBorderColor="grey"
      />
        </Grid>
        </Grid>
        <Typography variant="h2" style={{marginBottom: 30}}>
          Resume
        </Typography>
        <div style={{width: "10vw", height: 3, flexDirection: 'column', backgroundColor: "#fff", borderRadius: 5, marginBottom: 30}}><div style={{flex: 1, backgroundColor: "#037fff", width: "5vw", height: 3, borderRadius: 5}}></div><div style={{flex: 1, backgroundColor: "#000", width: "5vw"}}></div></div>
        <center>
        <a href="/cvGenerateFinal.pdf" download className="btn third" style={{zIndex: 100, position: 'relative', width: "80%", maxWidth: 330}}><span style={{marginTop: 3}} >Download Resume</span> &emsp; <GetAppIcon /></a>
        </center>
        <Typography variant="h5" style={{marginBottom: 30, textAlign: 'center'}}>
          <BusinessCenterIcon style={{paddingTop: 2}} />&emsp;Skills
        </Typography>
        <Grid container spacing={3}>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" style={{margin: 10, textAlign: 'center', color: "#037fff"}}>Programming/Scripting Languages</Typography>
            <p style={{margin: 'auto', textAlign: 'center'}}>
            C | C++ | Python | Javascript | PHP | SQL
            </p>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" style={{margin: 10, textAlign: 'center', color: "#037fff"}}>Frameworks, APIs and Libraries</Typography>
            <p style={{margin: 'auto', textAlign: 'center'}}>
            Django | NodeJS | ReactJS | JQuery | React Native | Redux | Bootstrap | Express.js | C++ STL
            </p>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" style={{margin: 10, textAlign: 'center', color: "#037fff"}}>Software and DBMS</Typography>
            <p style={{margin: 'auto', textAlign: 'center'}}>
            VS Code | MS Office | Android Studio | Expo | MySQL | PostgreSQL | MongoDB | Firestore | DynamoDB
            </p>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" style={{margin: 10, textAlign: 'center', color: "#037fff"}}>Cloud Services</Typography>
            <p style={{margin: 'auto', textAlign: 'center'}}>
            Google Cloud | AWS | Firebase
            </p>
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" style={{margin: 10, textAlign: 'center', color: "#037fff"}}>Relevant Coursework</Typography>
            <p style={{margin: 'auto', textAlign: 'center'}}>
            <b>•IIT Kharagpur</b>: Programming and Data Structures | Design and Analysis of Algorithms | Probability and Statistics | Basic Electronics |
            Partial Differential Equations | Linear Algebra and Numerical Analysis(in Mathematics 2) | Economics<br /><br />
            <b>•Miscellaneous</b>: The Complete React Developer Course(Udemy) | The Complete Node.js Developer Course (Udemy) | The Complete
            React Native + Hooks Course(Udemy) | Complete Linux Training (Udemy) | Ultimate AWS Certified Developer Associate(Udemy)
            </p>
          </Paper>
        </Grid>
        </Grid>
        <Typography variant="h5" style={{marginBottom: 50,marginTop: 80, textAlign: 'center'}}>
          <BusinessCenterIcon style={{paddingTop: 2}} />&emsp;Work Experience
        </Typography>
        <WorkExperience />
        <Typography variant="h5" style={{marginBottom: 30, textAlign: 'center', marginTop: 50}}>
        <BusinessCenterIcon style={{paddingTop: 2}} />&emsp;Projects
        </Typography>
        <Projects />
        <Typography variant="h5" style={{marginBottom: 30, textAlign: 'center', marginTop: 50}}>
        <BusinessCenterIcon style={{paddingTop: 2}} />&emsp;Educational Qualification
        </Typography>
        <Education />
        </div>
      
      </main>
    </div>
  );
}

export default Home;