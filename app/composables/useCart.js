export const useCart = () => {
  const cart = useState('cart', () => []);

  const handleAddToCart = size => {
    if (size) {
      addToCart({ productId: size.databaseId }).then(() => {
        cart.value.push({ size });
        localStorage.setItem('cart', JSON.stringify(cart.value));
      });
    } else {
      alert('Please select a size');
    }
  };

  onMounted(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      cart.value = JSON.parse(storedCart);
    }
  });

  return {
    cart,
    handleAddToCart,
  };
};
