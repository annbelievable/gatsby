import React from 'react';
import { graphql } from 'gatsby';

const AboutMePage = ({data}) => ( <div>
            <h1>Im a web developer</h1>
            <p>trying to learn gatsby js</p>
            <p>site keyords below:</p>
            <ul>
                {data.site.siteMetadata.keywords.map((keyword, index) => (
                    <li key={index}>{keyword}</li>
                ))}
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>relativePath</th>
                        <th>prettySize</th>
                        <th>extension</th>
                        <th>birthTime</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({ node }, index) => (
                        <tr key={index}>
                            <td>{node.relativePath}</td>
                            <td>{node.prettySize}</td>
                            <td>{node.extension}</td>
                            <td>{node.birthTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> )


export const pageQuery = graphql`
{
    site {
        siteMetadata {
            title
            keywords
            description
        }
    }
    allFile {
        edges {
          node {
            relativePath
            prettySize
            extension
            birthTime(fromNow: true)
          }
        }
    }
}
`

export default AboutMePage;