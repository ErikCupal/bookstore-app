module.exports = {
  client: {
    excludes: ['**/__generated__/**/*'],
    service: {
      name: 'Bookstore GraphQL service',
      url: 'http://localhost:4567/graphql',
    },
  },
}
