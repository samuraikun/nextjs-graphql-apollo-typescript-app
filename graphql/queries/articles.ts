import gql from 'graphql-tag';

export const articlesGraphQL = gql`
  query articlesGraphQL($where: ArticleWhereInput) {
    articles(where: $where) {
      id
      title
      content
      description
      tags
      userLikes {
        id
        user
      }
      owner
      images {
        id
        fileName
        height
        width
        size
        handle
      }
    }
  }
`;
