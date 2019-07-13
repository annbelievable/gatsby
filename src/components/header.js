import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './header.scss';
export const Header = () => {

  const results = useStaticQuery( graphql`
    {
      site {
        siteMetadata {
          title
          keywords
          description
        }
      }
    }
  `);
  
  return (
    <header className="header">
      <div className="header-container">{results.site.siteMetadata.title}</div>
    </header>
  );
};