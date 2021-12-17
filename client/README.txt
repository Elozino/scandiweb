PROJECT TYPE: E-Commerce

// const { data, loading, error } = useQuery(MyExampleQuery, {
//   variables: {
//     name,
//   },
//   skip: !name,
// })

// And without the useQuery hook:

// const response = await apolloClient.query({
//   query: MyExampleQuery,
//   variables: {
//     name,
//   },
// })


    // const response = await apolloClient.query({
    //   query: gql`
    //       query{
    //         category{
    //           products{
    //             brand
    //             gallery
    //             name
    //             id
    //             prices{
    //               currency
    //               amount
    //             }
    //           }
    //         }
    //       }
        
    // //   `
    // })

    // client.writeQuery({
    //   query: gql`
    //     query category {
    //       products
    //     }
    //   `,
    //   data: {
    //     category: []
    //   }
    // });