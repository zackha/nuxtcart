import { gql } from 'nuxt-graphql-request/utils';

export const getProductQuery = gql`
  query getProduct($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      ... on VariableProduct {
        databaseId
        name
        description
      }
    }
  }
`;
