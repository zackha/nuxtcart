<template>
  <NuxtPage />
  <Cart />
  <Checkout />
</template>

<style>
.table {
  border-collapse: collapse;
  margin: 20px 0;
}

.table.cart,
.table.cart tr:nth-child(even) {
  background-color: green;
  color: white;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table td ul {
  padding: 0px 20px;
  margin: 0px;
}

.table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.table.cart th {
  background-color: #000;
}

.table tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
