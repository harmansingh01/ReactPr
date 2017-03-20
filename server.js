let express =  require('express');

let app =express();
app.use(express.static('public'));

app.listen(3050, function(){
    console.log('Express server is up on port 3050')
});