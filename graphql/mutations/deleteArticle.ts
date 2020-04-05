import gql from 'graphql-tag';

export const deleteArticleGraphQL = gql`
  mutation deleteArticleGraphQL($where: ArticleWhereUniqueInput!) {
    deleteArticle(where: $where) {
      id
    }
  }
`;
