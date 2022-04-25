import React from "react"
import {graphql, Link} from "gatsby"
import ReactMarkdown from "react-markdown"
import {Helmet} from "react-helmet"
import SEO from "../components/seo"
import {motion} from "framer-motion"
import img from "../images/hero4.jpg";
import FadeInWhenVisible from "../components/fadeWhenVisible";
import Contact from "../components/contact";

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
const Privacy = ({data}) => {
    return <>
        <Helmet bodyAttributes={{
            id: 'privacy-page'
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
                        Polityka prywatności
                    </motion.h1>
                </div>
                <motion.div className="hero__right"
                            initial={{
                                // width: 0,
                                marginLeft: 0
                            }}
                            animate={{
                                // width: "100%",
                                marginLeft: '50%',
                                transition: {delay: .2, duration: 1.2, ease: [0.87, 0, 0.13, 1]},
                            }}
                            exit={{
                                // width: 0,
                                marginLeft: 0,
                                transition: {delay: .2, ...exitTransition},
                            }}
                >
                    <figure>
                        <img src={img} alt="BBS Best building solutions"/>
                    </figure>
                </motion.div>
            </div>

            <section className="container">
                <div className="grid gap-xxl@md margin-top-xl">
                    <div className="col-6@md">
                        {/*<h2 className="heading">Our not-so-secret plan: power the global <span>transition</span></h2>*/}
                        <FadeInWhenVisible>
                            <h3>Polityka prywatności naszej strony</h3>
                        </FadeInWhenVisible>
                    </div>
                    <div className="col-6@md">

                        <FadeInWhenVisible>
                            <p>
                                {/*{data.article.Content}*/}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum dolorem ducimus ex harum, id maiores maxime nulla odit optio, quos rem repudiandae sit tenetur ut. Dolores pariatur repellat tenetur.
                            </p>
                        </FadeInWhenVisible>

                        <Link to="/"  className="btn btn--dark margin-top-xxl"> Powrót do głównej</Link>

                    </div>
                </div>
            </section>
            {/*<Contact></Contact>*/}

        </motion.div>
    </>
}

// export const query = graphql`
//   query GetSingleArticle($slug: String) {
//     article: strapiArticle(Slug: { eq: $slug }) {
//       id
//       Content
//       Title
//     }
//   }
// `

export default Privacy
// date(formatString: "D MMMM YYYY", locale: "pl")
