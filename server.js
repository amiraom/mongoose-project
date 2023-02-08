const express = require('express');
const connection = require('./config/connectDb');
const PersonRouter = require('./routes/person');
const personSchema = require ('./models/person');
const app = express();
const PORT =5003;
app.use(express.json());
app.use('/api',PersonRouter)
app.listen(PORT,()=>{
    console.log('connected with sucess');
})
// const CreatePerson = async() =>
// { 
//     try {
//     let persons = await personSchema.create(
//         [
//             {
//               name: "ameni",
//               age: 24,
//               favoriteFoods:["couscous","ojja"]
//             },
//             {
//               name: "Ali",
//               age: 28,
//               favoriteFoods:["chocolat","pizza"]
//             },
//             {
//               name: "Mourad",
//               age: 40,
//               favoriteFoods:["couscous","pizza"]
//             }
//           ]
//         )
        
//       }
      
//       catch (error) {
//         throw error
//       }
// }
// CreatePerson();

connection();
// personSchema.find({ name: 'test2 ' }).then(docs => {
//     console.log(docs)
//   })
//  .catch(err => {
//     console.error(err)
//   })
// personSchema.findOne({ favoriteFoods: 'couscous' }).then(docs => {
//     console.log(docs)
//   })
//  .catch(err => {
//     console.error(err)
//   })

// personSchema.findByIdAndUpdate({_id:("63dd0d3fff33507d89661c27")},  { $push: { favoriteFoods: "hamburger"} }, { upsert: true }).then(docs => {
//         console.log(docs)
//       })
//      .catch(err => {
//         console.error(err)
//       })

// personSchema.findOneAndUpdate({name:"ameni"},  { $set: { age: 20} },{ new: true }).then(docs => {
//         console.log(docs)
//       })
//      .catch(err => {
//         console.error(err)
//       })
// personSchema.findByIdAndRemove({_id:("63dd0d3fff33507d89661c27")}).then(docs => {
//             console.log(docs)
//           })
//          .catch(err => {
//             console.error(err)
//           })
// personSchema.remove({name:"Mary"}).then(docs => {
//                 console.log(docs)
//               })
//              .catch(err => {
//                 console.error(err)
//               })
personSchema.find({favoriteFoods:"burritos"}).sort({name:-1}).limit(2).select('-age').then(docs => {
                    console.log(docs)
                  })
                 .catch(err => {
                    console.error(err)
                  })