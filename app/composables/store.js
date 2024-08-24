import { getProductsQuery } from '~/gql/queries/getProducts';
import { getProductQuery } from '~/gql/queries/getProduct';
import { addToCartMutation } from '~/gql/mutations/addToCart';
import { updateItemQuantitiesMutation } from '~/gql/mutations/updateItemQuantities';
import { checkoutMutation } from '~/gql/mutations/checkout';

async function fetchGraphQL(query, variables = {}) {
  const { $graphql } = useNuxtApp();
  const session = localStorage.getItem('woocommerce-session');

  if (!session) {
    const response = await $graphql.default.rawRequest(query, variables);
    localStorage.setItem('woocommerce-session', `Session ${response.headers.get('woocommerce-session')}`);
    return response.data;
  }

  return await $graphql.default.request(query, variables, { 'woocommerce-session': session });
}

//Query functions

export function listProducts() {
  return fetchGraphQL(getProductsQuery);
}

export function getProduct(slug) {
  return fetchGraphQL(getProductQuery, { slug });
}

//Mutation functions

export function addToCart(input) {
  return fetchGraphQL(addToCartMutation, { input });
}

export function updateItemQuantities(input) {
  return fetchGraphQL(updateItemQuantitiesMutation, { input });
}

export function checkout(input) {
  return fetchGraphQL(checkoutMutation, { input });
}
