<script setup lang="ts">
const { cart } = useCart();
</script>

<template>
  <table v-if="cart.length" class="table cart">
    <thead>
      <tr>
        <th>ID</th>
        <th>Product Name</th>
        <th>Value</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ size } in cart" :key="size.databaseId">
        <td>
          <strong>{{ size.databaseId }}</strong>
        </td>
        <td>{{ size.name }}</td>
        <td v-for="attr in size.attributes.nodes" :key="attr.value">
          {{ attr.value.toUpperCase() }}
        </td>
        <td><button>Remove</button></td>
      </tr>
    </tbody>
  </table>
</template>
