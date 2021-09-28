const { ApolloServer } = require("apollo-server-express");
const express = require("express");
// const { typeDefs } = require("./schema/TypeDefs");
// const { resolvers } = require("./schema/Resolvers");
const { schema } = require("./api/schema");
const { context } = require("./api/context");

const app = express();
const server = new ApolloServer({ schema, context });

server.applyMiddleware({ app });

app.listen({ port: 3001 }, () => {
  console.log("server is running on port 3001");
});
