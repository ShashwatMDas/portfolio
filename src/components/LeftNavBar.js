import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../App.css'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import { COLOR_CODES } from '../constants';


const drawerWidth = window.screen.width > 600 ? window.screen.width*0.2: window.screen.width*0.4;

const headerColor = window.screen.width > 600 ? 'transparent' : "#fff";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: "'Poppins', sans-serif !important"
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      fontFamily: "'Poppins', sans-serif !important"
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: 'transparent'
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
    backgroundColor: COLOR_CODES['jet'],
    fontFamily: "'Poppins', sans-serif !important"
  },
  navbarcont: {
    backgroundColor: COLOR_CODES['jet'],
    color: "#fff",
    fontFamily: "'Poppins', sans-serif !important"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    fontFamily: "'Poppins', sans-serif !important"
  },
  heading: {
    color: headerColor,
    fontFamily: "'Poppins', sans-serif !important"
  }
}));

function LeftNavBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.navbarcont}>
      <div className={classes.toolbar} />
      <Divider />
      <center>
      <img src="/shashwatclass.jpg" alt='shashwat' style={{width: "80%", height: "auto", borderRadius: "50%"}} />
      </center>
      <Divider />
      <List style={{marginTop: 30}}>
        {['Home|/', 'About|/about', 'Resume|/resume'].map((text, index) => (
          <NavLink exact activeClassName='is-active' style={{color: COLOR_CODES['dutchWhite'], textDecoration: 'none', backgroundColor: 'green'}} to={text.split('|')[1]}>
            <ListItem button key={text} style={{fontFamily: "'Poppins', sans-serif !important"}}>
              <ListItemText primary={text.split('|')[0]} style={{textAlign: 'center'}} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.heading} style={{fontFamily: "'Poppins', sans-serif !important"}}>
            Shashwat M. Das
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

LeftNavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default LeftNavBar;