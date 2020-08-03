import React from 'react';
import Typography from '@material-ui/core/Typography';
import LeftNavBar from '../components/LeftNavBar'
import '../App.css'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import LanguageIcon from '@material-ui/icons/Language';
import CodeIcon from '@material-ui/icons/Code';
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
const drawerWidth = (window.screen.width > 600 ? '20vw' : '40vw');


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#000",
    color: "#fff",
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
      color: "#fff"
  }
}));

function Home(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <LeftNavBar />
      <main className={classes.content}>
        <Typography variant="h2" style={{marginBottom: 30}}>
          About Me
        </Typography>
        <div style={{width: "10vw", height: 10, flexDirection: 'column', backgroundColor: "#fff", borderRadius: 5, marginBottom: 30}}><div style={{flex: 1, backgroundColor: "#037fff", width: "5vw", height: 10, borderRadius: 5}}></div><div style={{flex: 1, backgroundColor: "#000", width: "5vw"}}></div></div>
        <div style={{flexDirection: 'column', width: "100%"}}>
        <Grid container >
        <Grid item xs={6} style={{flex: 1}}>
        <img src="/shashwat.jpg" style={{height: '40vh', width: '30vw'}} />
        </Grid>
        <Grid item xs={6} >
        <Typography variant="h4">
        Hi, I am <span style={{color: "#037fff"}}>Shashwat M. Das</span>
        </Typography>
        <Typography paragraph style={{marginTop: 30}}>
            I am a Full-Stack Developer.<br /><br />
            <b>Full Name: </b>Shashwat M. Das<br /><br />
            <b>Age: </b>20<br /><br />
            <b>Nationality: </b>Indian<br /><br />
            <b>Languages: </b>English, Hindi<br /><br />
        </Typography>
        </Grid>
        </Grid>
        </div>
        <Typography variant="h5" style={{marginBottom: 50,marginTop: 80, textAlign: 'center'}}>
          
        </Typography>
        <Grid container spacing={3}>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardContent>
        <CodeIcon style={{color: "#fff", fontSize: 50}} />
            <Typography className={classes.title} color="textSecondary" variant="h6" gutterBottom>
                Programming
            </Typography>
            <div style={{width: "6vw", height: 5, flexDirection: 'column', backgroundColor: "#fff", borderRadius: 5, marginBottom: 30}}><div style={{flex: 1, backgroundColor: "#037fff", width: "3vw", height: 5, borderRadius: 5}}></div><div style={{flex: 1, backgroundColor: "#000", width: "2vw"}}></div></div>
            <Typography paragraph style={{color: "rgba(255, 255, 255, 0.6)"}}>
                Programmer in various languages including C, C++, JavaScript, Python, PHP.
            </Typography>
            
        </CardContent>
        <CardActions>
            <Button style={{zIndex: 100, position: 'absolute', textAlign: 'center', marginBottom: 20, marginTop: 10, marginLeft: 10}} size="small">Learn More</Button>
        </CardActions>
        </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardContent>
        <LanguageIcon style={{color: "#fff", fontSize: 50}} />
            <Typography className={classes.title} color="textSecondary" variant="h6" gutterBottom>
                Web Development
            </Typography>
            <div style={{width: "6vw", height: 5, flexDirection: 'column', backgroundColor: "#fff", borderRadius: 5, marginBottom: 30}}><div style={{flex: 1, backgroundColor: "#037fff", width: "3vw", height: 5, borderRadius: 5}}></div><div style={{flex: 1, backgroundColor: "#000", width: "2vw"}}></div></div>
            <Typography paragraph style={{color: "rgba(255, 255, 255, 0.6)"}}>
                Adept in Frontend and Backend Development. Some skills- ReactJS, NodeJS, Django, PHP
            </Typography>
            
        </CardContent>
        <CardActions>
            <Button style={{zIndex: 100, position: 'absolute', textAlign: 'center', marginBottom: 20, marginTop: 10, marginLeft: 10}} size="small">Learn More</Button>
        </CardActions>
        </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardContent>
        <AndroidIcon style={{color: "#fff", fontSize: 50}} /><AppleIcon style={{color: "#fff", fontSize: 50, marginLeft: 20}} />
            <Typography className={classes.title} color="textSecondary" variant="h6" gutterBottom>
                App Development
            </Typography>
            <div style={{width: "6vw", height: 5, flexDirection: 'column', backgroundColor: "#fff", borderRadius: 5, marginBottom: 30}}><div style={{flex: 1, backgroundColor: "#037fff", width: "3vw", height: 5, borderRadius: 5}}></div><div style={{flex: 1, backgroundColor: "#000", width: "2vw"}}></div></div>
            <Typography paragraph style={{color: "rgba(255, 255, 255, 0.6)"}}>
                Cross-Platform App Developer in React Native. (Expo Cli + React Native Cli)
            </Typography>
            
        </CardContent>
        <CardActions>
            <Button style={{zIndex: 100, position: 'absolute', textAlign: 'center', marginBottom: 20, marginTop: 10, marginLeft: 10}} size="small">Learn More</Button>
        </CardActions>
        </Card>
        </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default Home;