var express= require('express');
var app= express();
const bodyparser= require('body-parser');
var ejs=require('ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyparser.urlencoded({
    extended:true
}));
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('index');

})
app.listen(3000,function(){
    console.log('listening to port 3000')
})