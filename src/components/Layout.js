import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './all.sass'

import { MuiThemeProvider, createMuiTheme, withTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffbc45',
      main: '#f98b00',
      dark: '#c05d00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#757de8',
      main: '#3f51b5',
      dark: '#002984',
      contrastText: '#000',
    },
  },
});

class TemplateWrapper extends React.Component {
  
  constructor(props) {
    super(props);
  }

  getChildren() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        theme: theme
      })
    })
  }
  
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Helmet>
            <html lang="en" />
            <title>{this.props.data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={this.props.data.site.siteMetadata.description}
            />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/img/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-16x16.png"
              sizes="16x16"
            />

            <link
              rel="mask-icon"
              href="/img/safari-pinned-tab.svg"
              color="#ff4400"
            />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={this.props.data.site.siteMetadata.title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpg" />
          </Helmet>
          <Navbar/>
          <div>{this.getChildren()}</div>
          <Footer theme={theme}/>
        </div>
      </MuiThemeProvider>
    )
  }
} 

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => (
      <TemplateWrapper data={data} children={children}/>
    )}
  />
)

export default withTheme(theme)(Layout)
