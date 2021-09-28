const { gql } = require("apollo-server-express");
const { queryType } = require("nexus");

// const typeDefs = gql`
//   type User {
//     id: Int!
//     lastname: String!
//     firstname: String!
//     status: String!
//     phone: Int
//   }

//   #queries
//   type Query {
//     getAllUsers: [User!]!
//   }

//   #mutations
//   type Mutation {
//     createUser(
//       id: Int!
//       firstname: String
//       lastname: String!
//       phone: Int
//       status: String!
//     ): User!
//   }
// `;

module.exports = { types };
