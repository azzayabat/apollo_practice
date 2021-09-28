const { users } = require("../fakeData");

const resolvers = {
  Query: {
    getAllUsers() {
      return users;
    },
  },
  Mutation: {
    createUser(_, args) {
      const newUser = args;
      users.push(newUser);
      return newUser;
    },
  },
};

module.exports = { resolvers };
