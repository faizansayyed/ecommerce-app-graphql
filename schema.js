const { gql } = require("apollo-server");

exports.typeDefs = gql`
type Query {
  hello: String
  products(filter: ProdutsFilterInput): [Product!]!
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
  category: Category,
  reviews:[Review!]!
}

type Category {
  id:ID!,
  name: String!,
  products(filter: ProdutsFilterInput): [Product!]!
}

type Review {
  id:ID!,
  date:String!,
  title:String!,
  comment:String!,
  rating:Int!
}

input ProdutsFilterInput {
  onSale: Boolean,
  avgRating: Int
}
`