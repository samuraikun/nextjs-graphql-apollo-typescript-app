import gql from 'graphql-tag';

export const createArticleGraphQL = gql`
  mutation createArticleGraphQL($data: ArticleCreateInput!) {
    createRecipe(data: $data) {
      id
      status
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
