import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import typeDefs from '@/graphql/schema';
import resolvers from '@/graphql/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  await server.start();
  return startServerAndCreateNextHandler(server);
};

let handler;

export async function GET(req, res) {
  if (!handler) handler = await startServer();
  return handler(req, res);
}

export async function POST(req, res) {
  if (!handler) handler = await startServer();
  return handler(req, res);
}