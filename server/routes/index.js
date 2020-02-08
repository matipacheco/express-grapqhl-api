import express from 'express';
import graphqlHTTP from "express-graphql";
import schema from "../../src/graphql/schema";

let router = express.Router();

router.post('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: {
    hello: () => {
      return 'Hello world!';
    },
  },
  graphiql: false,
}));

router.get('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: {
    hello: () => {
      return 'Hello world!';
    },
  },
  graphiql: true,
}));

export default router;
