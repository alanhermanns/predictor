// const graphQLHttp = require('express-graphql');
// const { buildSchema } = require('graphql');
// const UserLoginModel = require('./models/userLoginModel');
// const cookieParser = require('cookie-parser');

// const schema = buildSchema(`
// type Mutation {
//     createUserToLogin : (userName: String!, passwordHash : String!) : ${UserLoginModel.toJSON()}
// }
//     input UserLoginInput : {
//         userName : String!,
//         passwordHash : String!
//     }
// `);
// const root = {
//   createUserToLogin : async(UserLoginInput) => {
//     const cookies = await cookieParser();
//     const userLogin = await UserLoginModel.create(UserLoginInput);
//     cookies.session = userLogin.makeToken();
//   }
// };

// const graphql = graphQLHttp({
//   schema: schema,
//   rootValue: root,
//   graphiql: true
// });

// module.exports = { graphql };

// // .post('/auth/signup', (req, res, next) => {
// //     const userLoginModel = req.body;
// //     const cookies = req.cookies;
// //     console.log(cookies);
// //     UserLoginModel
// //       .create(userLoginModel)
// //       .then(userLoginModel =>{
// //         res.cookie('session', userLoginModel.makeToken());
// //         res.send(userLoginModel);
// //       })
// //       .catch(next);
// //   })
