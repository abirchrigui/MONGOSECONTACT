const express = require ('express') ;
const mongoose = require ('mongoose');
const router = require('./route/contacts')

const app = express() ;

// Middlewere json
app.use(express.json()) ;

const db='mongodb+srv://ABIR:1234@cluster0-o4chg.mongodb.net/test?retryWrites=true&w=majority' ;
mongoose.connect(db , 
    { useNewUrlParser: true ,  useUnifiedTopology: true,  useCreateIndex:true })
    .then(()=>console.log('mongoose running...'))
    .catch(err=>console.log(err))

app.use('/contact-list' , router) ;   

const PORT=process.env.PORT || 5000 ;
app.listen(PORT , (err)=>{
    err? console.log('failed to connect') : console.log(`server is runnig at port ${PORT}...`)
})