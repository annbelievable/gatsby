import React from 'react';
import { graphql } from 'gatsby';

const AboutMePage = ({data}) => ( <div>
            <h1>Im a web developer</h1>
            <p>trying to learn gatsby js</p>
            <ul>
                {data.site.siteMetadata.keywords.map((keyword, index) => (
                    <li key={index}>{keyword}</li>
                ))}
            </ul>
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
}
`

export default AboutMePage;