const { ApolloServer, gql } = require("apollo-server");
const { products } = require("./initial_data");

const typeDefs = gql`
    type Query {
      hello: String
      products: [Product!]!
      product(id:ID!): Product
    }

    type Product {
      name: String!,
      description: String!,
      quantity: Int!,
      price: Float!,
      onSale: Boolean!,
    }
`

const resolvers = {
  Query: {
    hello: () => {
      return "World!"
    },
    products: () => products,
    product: (parent, args, context) => {
     
      const productId = args.id;
      const product = products.find(d => d.id === productId)
      if (!product) return null;
      return product
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log("Server is up at " + url);
});
