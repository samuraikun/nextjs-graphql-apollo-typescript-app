import gql from 'graphql-tag';

export const articleGraphQL = gql`
  query articleGraphQL($where: ArticleWhereUniqueInput!) {
    article(where: $where) {
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
