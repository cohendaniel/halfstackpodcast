import React from 'react'
//import { Link, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import logo from '../img/logo.png'
import NavMenu from '../components/NavMenu';

class IndexPage extends React.Component {

  componentWillMount() {
    document.body.classList.add("dark")
  }

  componentWillUnmount() {
    document.body.classList.remove("dark")
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} style={{background: "black", height: "100%", textAlign: "center"}}>
          <img src={logo} style={{ width: "550px" }}/>
        </Grid>
        <Grid item xs={12}>
          <NavMenu className={"navbar-center has-text-centered dark"}/>
        </Grid>
      </Grid>
    )
  }
}

export default IndexPage
