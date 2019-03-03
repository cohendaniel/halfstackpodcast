import React from "react"
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Layout from "../../components/Layout"
import { Typography } from "@material-ui/core";

const listProducts = (data) => {
  return data.allPodcastsJson.edges.map((edge) => {
    const urlPath = "/" + edge.node.fields.slug
    return (
      <Grid item xs={4}>
        <Paper>
          <Link style={{textAlign: 'center'}} to={urlPath} key={edge.node.name}>
            <div>
              <img src="https://images.pexels.com/photos/76172/pexels-photo-76172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            </div>
            <div>
            <Typography variant="subtitle1">{edge.node.name}</Typography>
            </div>
              <Typography variant="caption">{('Episode ' + edge.node.number).toUpperCase()}</Typography>
          </Link>
        </Paper>
      </Grid>
    )
  });
}

const IndexPage = ({data}) => (
  <Layout>
    <Typography style={{
        margin: '80px 0px', 
        textAlign: 'center',
        background: '#bb7a44',
        padding: '100px',
        color: 'white'
      }} 
      variant="h2">
        Podcasts
    </Typography>
    <div style={{width: "90%", margin:"auto"}}>
      <Grid container justify={"flex-start"} spacing={24}>
        {listProducts(data)}
      </Grid>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allPodcastsJson {
      edges {
        node {
          name
          number
          fields {
            slug
          }
        }
      }
    }
  }
`
