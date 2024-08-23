import { getProductsQuery } from '~/gql/queries/getProducts';
import { getProductQuery } from '~/gql/queries/getProduct';

async function fetchGraphQL(query, variables) {
  const { $graphql } = useNuxtApp();
  return await $graphql.default.request(query, variables);
}

export function listProducts() {
  return fetchGraphQL(getProductsQuery);
}

export function getProduct(slug, sku) {
  return fetchGraphQL(getProductQuery, { slug, sku });
}
