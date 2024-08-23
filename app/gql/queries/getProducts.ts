import { gql } from 'nuxt-graphql-request/utils';

export const getProductsQuery = gql`
  query getProducts {
    products {
      nodes {
        ... on VariableProduct {
          slug
          databaseId
          name
        }
      }
    }
  }
`;
