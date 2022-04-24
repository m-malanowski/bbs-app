import React from "react"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import { motion } from "framer-motion"
const transition = {delay: .2, duration: 1, ease: [0.6, 0.01, -0.05, 0.9]};

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
const ArticleSingle = ({ data }) => {
    return <>
        <Helmet bodyAttributes={{
            id: 'article-page'
        }}   />
        {/*<SEO title={data.blog.title + ' Porady Prawne | Blog'} description={data.blog.description}/>*/}
        <div className="article-page">
            <div className="page-content container-fluid">
                <motion.div variants={variants} initial="initial" animate="animate" exit="exit" transition={transition} className="article">
                    <div className="article-header">
                        <div>
                            <h1> { data.article.title } </h1>
                            {/*<p>Data publikacji: { data.blog.date }</p>*/}
                        </div>
                    </div>
                    <div className="border-bottom"/>
                    <div className="article-body">
                        {/*<h6 className="mb-5">{data.blog.description}</h6>*/}
                        {/*<ReactMarkdown source={data.blog.content}/>*/}
                    </div>

                    <div className="back-button">
                        {/*<Button url='/blog' buttonDesc='Powrót'/>*/}

                    </div>

                </motion.div>
            </div>
        </div>
    </>
}

export const query = graphql`
  query GetSingleArticle($slug: String) {
    article: strapiArticle(Slug: { eq: $slug }) {
      Content
      Title
    }
  }
`

export default ArticleSingle
// date(formatString: "D MMMM YYYY", locale: "pl")
