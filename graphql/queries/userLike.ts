import gql from 'graphql-tag';

export const userLikeGraphQL = gql`
  query userLikeGraphQL($where: UserLikeWhereUniqueInput!) {
    userLike(where: $where) {
      id
      user
      article {
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
  }
`;
