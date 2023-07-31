module.exports.data = {
  posts: `{
    allContentfulPost(sort: {publishDate: DESC}) {
      edges {
        node {
          slug
          id
          publishDate
        }
      }
    }
  }`,
  pages: `{
    allContentfulPage {
      edges {
        node {
          slug
          id
        }
      }
    }
  }`,
  tags: `{
    allContentfulTag {
      edges {
        node {
          slug
          id
          post {
            id
          }
        }
      }
    }
  }`,
}
