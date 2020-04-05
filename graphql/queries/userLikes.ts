import gql from 'graphql-tag';

export const userLikesGraphQL = gql`
  query userLikesGraphQL($where: UserLikeWhereInput) {
    userLikes(where: $where) {
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
