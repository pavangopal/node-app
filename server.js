const express = require('express');
const hbs = require('hbs');
var port = process.env.PORT || 3000

var app = express();

hbs.registerPartials(__dirname+'/views/partials')

app.set('view engine','hbs')
app.use(express.static(__dirname+'/public'))


// app.use((req,res,next)=>{
// res.render('maintenance.hbs')
// })

hbs.registerHelper('getCurrentYear',()=>{
return new Date().getFullYear()
})

hbs.registerHelper("screemIt",(text)=>{
return text.toUpperCase()
})

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        name:'pavan',
        title:'this is title'
    })
 })

app.get('/about',(req,res)=>{
   res.render('about.hbs',{
       title:'this is title'
   })
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}!`);
    
});
