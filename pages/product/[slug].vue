<script setup>
import { gql } from 'nuxt-graphql-request/utils';
const route = useRoute();
const product = ref(null);

const fetchProduct = async slug => {
  const query = gql`
    query getProduct($slug: ID!) {
      product(idType: SLUG, id: $slug) {
        id
        name
        description
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
  product.value = await fetchProduct(route.params.slug);
});

const selectedSize = ref(null);
const cart = ref([]);

const addToCart = () => {
  if (product.value && selectedSize.value) {
    cart.value.push({ product: product.value, size: selectedSize.value });
    alert(`${product.value.name} (${selectedSize.value}) sepete eklendi!`);
  } else {
    alert('Lütfen bir beden seçin.');
  }
};

const selectSize = size => {
  selectedSize.value = size;
};
</script>

<template>
  <span v-if="product">
    <div>
      <p>
        <strong>ID:</strong>
        {{ product.id }}
      </p>
      <p>
        <strong>Name:</strong>
        {{ product.name }}
      </p>
      <p>
        <strong>Size:</strong>
        <span v-for="size in product.allPaSize.nodes" :key="size.id">
          <button
            :class="{ selected: size.name === selectedSize }"
            @click="selectSize(size.name)"
            :style="['margin: 0px 5px; border: 1px solid #000; padding: 2px 5px; cursor: pointer', size.name === selectedSize ? 'background-color: #000;color: #fff;' : '']">
            {{ size.name }}
          </button>
        </span>
      </p>
      <p>
        <strong>Description:</strong>
        <p v-html="product.description"/>
      </p>
      <button @click="addToCart" style="padding: 0.4rem 4rem">Sepete Ekle</button>
    </div>
  </span>
  <span v-else>Loading...</span>
</template>
