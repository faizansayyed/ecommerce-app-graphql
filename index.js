const { ApolloServer, gql } = require("apollo-server");
const { categories } = require("./initial_data");
const { products } = require("./initial_data");

const typeDefs = gql`
    type Query {
      hello: String
      products: [Product!]!
      product(id:ID!): Product
      categories: [Category!]!
      category(id:ID!): Category
    }

    type Product {
      id:ID!,
      name: String!,
      description: String!,
      quantity: Int!,
      price: Float!,
      onSale: Boolean!,
    }
    
    type Category {
      id:ID!,
      name: String!,
    }
`

const resolvers = {
  Query: {
    hello: () => {
      return "World!"
    },
    products: () => products,
    categories: () => categories,
    product: (parent, args, context) => {
      const { id } = args;
      return products.find(d => d.id === id)
    },
    category: (parent, args, context) => {
      const { id } = args;
      return categories.find(d => d.id === id)
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
