import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  }

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
            <div className="carousel-container" style={{maxWidth: '400px', margin: '10px auto 50px auto', display: 'block', position: 'relative'}}>
                <Slider {...settings}>
                  <div className="bio-slide">
                    <figure>
                      <img src="https://media.licdn.com/dms/image/C4E03AQFiqT-huc-4Tw/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=-p4sRCF5wAt1EChcbuiFoWiLaXduS4Ik2o1oVBfbpbs"/>
                      <figcaption style={{textAlign: 'center', fontWeight: 'bold', fontSize: '18px'}}>Dan</figcaption>
                    </figure>
                  </div>
                  <div className="bio-slide">
                    <figure>
                      <img src="https://media.licdn.com/dms/image/C4E03AQFVIh10wuudcQ/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=cigyct1v7j8E2Vr-Og09CwK7QhJCtqeT-ORcq3AFRz0"/>
                      <figcaption style={{textAlign: 'center', fontWeight: 'bold', fontSize: '18px'}}>David (Destrich)</figcaption>
                    </figure>
                  </div>
                  <div className="bio-slide">
                    <figure>
                      <img src="https://media.licdn.com/dms/image/C4E03AQGV3jwhpnbjqw/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=7UsCaax-MiIfIA6ZTUc43NzfPLBCHc-iTS7_IeOWsU8"/>
                      <figcaption style={{textAlign: 'center', fontWeight: 'bold', fontSize: '18px'}}>Connor</figcaption>
                    </figure>
                  </div>
                </Slider>
              </div>
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
