import gql from 'graphql-tag';

export const createArticleGraphQL = gql`
  mutation createArticleGraphQL($data: ArticleCreateInput!) {
    createArticle(data: $data) {
      id
      title
      content
      description
      tags
      userLikes {
        id
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
