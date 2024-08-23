# woographql-vue-apollo-examples

### Installation

- [woocommerce](https://wordpress.org/plugins/woocommerce) Ecommerce for WordPress.
- [wp-graphql](https://wordpress.org/plugins/wp-graphql) Exposes GraphQL for WordPress.
- [wp-graphql-woocommerce](https://github.com/wp-graphql/wp-graphql-woocommerce) Adds WooCommerce functionality to a WPGraphQL schema. Currently only confirmed to be working with version 0.62 of this plugin.
- [wp-graphql-cors](https://github.com/funkhaus/wp-graphql-cors) Ensures that CORS works correctly. Remember to add the domain to the store under `Extend "Access-Control-Allow-Origin” header`.

### Local SSL Setup

- Install [mkcert](https://github.com/FiloSottile/mkcert) on your machine.
- Run `mkcert localhost` to generate a certificate for localhost. You should now have a `localhost.pem` and `localhost-key.pem` file in your current directory. See the image below for an example.
- Then run `mkcert -install` to install the certificate authority.
- Finally, run `pnpm dev` to start the dev server with SSL.
