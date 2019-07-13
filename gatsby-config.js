module.exports={
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'src',
              path: `${__dirname}/src`,
            },
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'blogs',
              path: `${__dirname}/src/blogs`,
            },
        },

        'gatsby-transformer-remark',
    ],
    siteMetadata: {
        title: 'Gatsby JS',
        description: 'Kok Ann learning',
        keywords: ['Gatsby','Javascript','Learning'],
    },

}