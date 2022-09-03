import { readFileSync } from 'node:fs';
import { ApolloServer } from 'apollo-server';
import { Resolvers } from './resolvers/resolvers-types';

const typeDefs = readFileSync('./src/schemas/schema.graphql', 'utf8');

const resolvers: Resolvers = {
    Query: {
        // typed resolvers!
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
