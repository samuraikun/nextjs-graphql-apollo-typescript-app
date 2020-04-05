import gql from 'graphql-tag';

export const updateRecipeGraphQL = gql`
  mutation updateArticleGraphQL($data: ArticleUpdateInput!, $where: ArticleWhereUniqueInput!) {
    updateArticle(data: $data, where: $where) {
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
