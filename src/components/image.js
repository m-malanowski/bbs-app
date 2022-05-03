// import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
// // import Img from 'gatsby-image';
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
//
// // Note: You can change "images" to whatever you'd like.
//
// const Image = props => (
//     <StaticQuery
//         query={graphql`
//           query {
//            images: allFile {
//                 edges {
//                   node {
//                       childrenImageSharp {
//                               gatsbyImageData
//                             }
//                   }
//                 }
//               }
//           }
//     `}
//         render={data => {
//             data.images.edges.map(edge => (
//                 console.log(edge.node.childrenImageSharp)
//             ))
//
//             // const image = data.images.edges.find(n => {
//             //
//             //         // console.log(n.node.childImageSharp.gatsbyImageData.images.fallback, 'graphQL object')
//             //     // console.log(n.node.childImageSharp.gatsbyImageData.fallback, 'graphQL object')
//             //
//             //     return n.node.childrenImageSharp.includes(props.filename);
//             // });
//             // if (!image) {
//             //     return null;
//             // }
//
//             // return <GatsbyImage alt={props.alt} image={image.node.childrenImageSharp.gatsbyImageData} />;
//         }}
//     />
// );
//
// export default Image;