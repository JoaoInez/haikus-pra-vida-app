module.exports = {
  schema: "http://localhost:4000/graphql",
  extensions: {
    endpoints: {
      default: {
        url: "http://localhost:4000",
      },
    },
  },
};
