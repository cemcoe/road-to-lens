// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // 可以改成测试的地址
  // https://docs.lens.xyz/docs/api-links

  uri: "https://api.lens.dev",
  cache: new InMemoryCache(),
});

export default client;
