// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from "graphql";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function comments(req, res) {  
  const graphQLCLient  = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPCMS_TOKEN}`
    }
  })

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!){
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) {id}
    }
  `

  const result = await graphQLCLient.request(query, req.body)
  return res.status(200).send(result);

}
