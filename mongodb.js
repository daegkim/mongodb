const mongoose = require('mongoose')
const member = require('./schema')

mongoose.Promise = global.Promise
mongoose.set('useUnifiedTopology', true) //prevent deprecation warnings
mongoose.connection.on('error', (err) => { if(err) console.log(err)} )
mongoose.connection.once('open', () => { console.log('mongo connected!!') })


mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true}, (err) => { if(err) console.log(err) })


//create
var newMember = {id: 1, name: 'paul'}
// member.create(newMember, (err) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('Created!!')

//     //Read after create
//     member.find((err, res) => {
//         if(err) {
//             console.log(err)
//             return
//         }
//         console.log('Find One')
//         console.log(res)
//         mongoose.disconnect()
//     })
// })


// member.deleteOne(newMember, (err) => {
//     if(err) {
//         console.log(err)
//         return
//     }

//     member.find(function(err, res){
//         if(err) {
//             console.log(err)
//             return
//         }
//         console.log('Find All')
//         console.log(res)
//         mongoose.disconnect()
//     })
// })

// var updateMember = {id: 1, name: 'david'}
// member.updateOne(newMember, updateMember, (err, raw) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     member.find((err, res) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log('Find One')
//     console.log(res)
//     mongoose.disconnect()
//     })
// })