<script setup lang="ts">
const { cart, handleRemoveFromCart } = useCart();
</script>

<template>
  <table v-if="cart.length" class="table cart">
    <thead>
      <tr>
        <th>Key</th>
        <th>ID</th>
        <th>Product Name</th>
        <th>Value</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in cart" :key="product.key">
        <td>
          <strong>{{ product.key }}</strong>
        </td>
        <td>
          <strong>{{ product.variation.node.databaseId }}</strong>
        </td>
        <td>{{ product.variation.node.name }}</td>
        <td v-for="attr in product.variation.attributes" :key="attr.value">
          {{ attr.value.toUpperCase() }}
        </td>
        <td>
          <button @click="handleRemoveFromCart(product.key)">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>Sepetiniz boş.</p>
</template>
