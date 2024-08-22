<script setup lang="ts">
import { gql } from 'nuxt-graphql-request/utils';

const route = useRoute();

const product = ref<Product | null>(null);

const fetchProduct = async (slug: string): Promise<Product | null> => {
  const query = gql`
    query getProduct($slug: ID!) {
      product(idType: SLUG, id: $slug) {
        id
        name
        allPaSize {
          nodes {
            id
            name
          }
        }
      }
    }
  `;

  const { product } = await useNuxtApp().$graphql.default.request(query, { slug });
  return product;
};

onMounted(async () => {
  product.value = await fetchProduct(route.params.slug as string);
});
</script>

<template>
  <span v-if="product">
    <div>
      <p>
        <strong>ID:</strong>
        {{ product?.id }}
      </p>
      <p>
        <strong>Name:</strong>
        {{ product?.name }}
      </p>
      <p>
        <strong>Size:</strong>
        <span v-for="size in product.allPaSize.nodes" :key="size.id" style="margin: 0px 5px; border: 1px solid #000; padding: 2px 5px">{{ size.name }}</span>
      </p>
    </div>
  </span>
  <span v-else>Loading...</span>
</template>
