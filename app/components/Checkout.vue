<script setup>
const { cart } = useCart();

const userDetails = ref({ email: '', firstName: '', lastName: '', phone: '', city: '', address1: '' });

const handleCheckout = async () => {
  const checkoutData = {
    billing: { ...userDetails.value },
    paymentMethod: 'cod',
  };

  await checkout(checkoutData).then(() => {
    cart.value = [];
    localStorage.setItem('cart', JSON.stringify(cart.value));
  });
};
</script>

<template>
  <form @submit.prevent="handleCheckout">
    <div>
      <label for="email">Email:</label>
      <input type="email" v-model="userDetails.email" id="email" required />
    </div>
    <div>
      <label for="firstName">First Name:</label>
      <input type="text" v-model="userDetails.firstName" id="firstName" required />
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input type="text" v-model="userDetails.lastName" id="lastName" required />
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="text" v-model="userDetails.phone" id="phone" required />
    </div>
    <div>
      <label for="city">City:</label>
      <input type="text" v-model="userDetails.city" id="city" required />
    </div>
    <div>
      <label for="address1">Address:</label>
      <input type="text" v-model="userDetails.address1" id="address1" required />
    </div>
    <button type="submit">Create Order</button>
  </form>
</template>
