import { gql } from 'nuxt-graphql-request/utils';

export const getProductsQuery = gql`
  query getProducts {
    products(first: 99) {
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
