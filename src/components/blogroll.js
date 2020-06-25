import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';


const Blogroll = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                title
                date 
                type
              }
              excerpt
            }
          }
        }
      }
    `)
  
  let count = data.allMarkdownRemark.edges.length;
  console.log("hola " + count);

    return(
            <div className="columns tile is-ancestor is-multiline">
                {data.allMarkdownRemark.edges.map((edge,index)=> {
                    return(

                        <div className="column tile is-parent is-4">
                          <div className={`tile is-child notification ${edge.node.frontmatter.type}`}>
                          {console.log(index)}
                          <p className="is-7">{edge.node.frontmatter.date}</p>
                          <h2 className="subtitle is-5">{edge.node.frontmatter.title}</h2>
                          <p>{edge.node.excerpt}</p>
                            
                          </div>
                        </div>
    
                    )
                })}
            </div>
    );
}
export default Blogroll;