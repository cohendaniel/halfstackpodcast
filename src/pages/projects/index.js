import React from 'react'

import Layout from '../../components/Layout'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PageHeader from "../../components/PageHeader";


export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeader title={"Projects"}></PageHeader>
        <Grid container>
          <Grid item xs={4} style={{margin: "auto"}}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h2">KC</Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut porta orci, eu feugiat turpis. Etiam felis lectus, dapibus id eleifend dignissim, pulvinar in neque. Etiam tincidunt eros et facilisis mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    )
  }
}
