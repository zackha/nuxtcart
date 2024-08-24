import { gql } from 'nuxt-graphql-request/utils';

export const addToCartMutation = gql`
  mutation addToCart($input: AddToCartInput!) {
    addToCart(input: $input) {
      clientMutationId
    }
  }
`;
