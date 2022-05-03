import React from "react"
import {graphql} from "gatsby"
import {Helmet} from "react-helmet"
import SEO from "../components/seo"
import {motion} from "framer-motion"
import img from "../images/hero25.jpg";
import FadeInWhenVisible from "../components/fadeWhenVisible";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Link, useI18next} from 'gatsby-plugin-react-i18next';

const transition = {delay: .8, duration: 1, ease: [0.6, 0.01, -0.05, 0.9]};
const exitTransition = {duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9]}

const variants = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    },
    exit: {
        y: 50,
        opacity: 0
    }
}
const ArticleSingle = ({data}) => {
    return <>
        <Helmet bodyAttributes={{
            id: 'article-page'
        }}/>
        {/*<SEO title={data.blog.title + ' Porady Prawne | Blog'} description={data.blog.description}/>*/}
        <motion.div className="article-page">

            <div className="hero hero--article">
                <div className="hero__left">
                    <motion.h1 className="hero__tag heading"
                               variants={variants}
                               animate={{
                                   y: 0,
                                   opacity: 1,
                                   transition: {...transition},
                               }}
                               initial="initial"
                               exit="exit"
                    >
                        {data.article.Title}
                    </motion.h1>
                </div>
                <motion.div className="hero__right"
                            initial={{
                                marginLeft: 0
                            }}
                            animate={{
                                marginLeft: '50%',
                                transition: {delay: .2, duration: 1.2, ease: [0.87, 0, 0.13, 1]},
                            }}
                            exit={{
                                marginLeft: 0,
                                transition: {delay: .2, ...exitTransition},
                            }}
                >
                    <figure>
                        <GatsbyImage image={data.article.Bild.localFile.childImageSharp.gatsbyImageData} alt="BBS Best building solutions"/>
                    </figure>
                </motion.div>
            </div>

            <section className="container">
                <div className="grid gap-xxl@md margin-top-xl">
                    <div className="col-6@md">
                        {/*<h2 className="heading">Our not-so-secret plan: power the global <span>transition</span></h2>*/}
                        <FadeInWhenVisible delay={0.1}>
                            <h3>BBS POLSKA - Best Building Solutions jest firmą wykonawczą z Elbląga. Firma ma jasno
                                sprecyzowany cel: dostarczać  kompleksową obsługę
                                inwestycji budowlanych.
                            </h3>
                        </FadeInWhenVisible>
                    </div>
                    <div className="col-6@md">

                    <FadeInWhenVisible delay={0.4}>
                        <p>
                            {data.article.Content}
                        </p>
                    </FadeInWhenVisible>

                    <Link to="/blog"  className="btn btn--dark margin-top-xxl"> Powrót do artykułów</Link>

                    </div>
                </div>
            </section>
            {/*<Contact></Contact>*/}

        </motion.div>
    </>
}

export const query = graphql`
  query GetSingleArticle($slug: String) {
    article: strapiArticle(Slug: { eq: $slug }) {
      id
      Content
      Title
      Bild{
         localFile {
            childImageSharp {
              gatsbyImageData
            }
         }
      }
    }
  }
`

export default ArticleSingle
// date(formatString: "D MMMM YYYY", locale: "pl")
