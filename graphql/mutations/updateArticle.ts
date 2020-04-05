import gql from 'graphql-tag';

export const updateArticleGraphQL = gql`
  mutation updateArticleGraphQL($data: ArticleUpdateInput!, $where: ArticleWhereUniqueInput!) {
    updateArticle(data: $data, where: $where) {
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
