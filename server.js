var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var articleone={
    title:'Article One',
    header:'Article-One',
    date:'October 12,2016',
    content:    
              ` <p>
                Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test.Lets start doing this simple example test
                </p>
            <p>Hello naveen breaking line!!!!!!!!!!!!</p>
            <hr/ `
};
function myfunction(data)
{ var title= data.title;
  var header=data.header;
  var date=data.date;
  var content=data.content;
    
var template=`
    <!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
    </head>
    <body>
        <div>
            <a href='\'>Home</a>
        </div>
        <div>
          <h1> ${header} </h1>
        
        </div>
        <div>
          ${date}
         
        </div>
        <hr/>
    
         <div>
            ${content}
         </div>
        
        
    </body>
    
</html> `
;
return template;
}
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one', function (req, res) {
  res.send(myfunction(articleone));
});
app.get('/article-two', function (req, res) {
  res.send('This is article two serving you.....WElcome!!!');
});
app.get('/article-three', function (req, res) {
  res.send('This is article three serving you.....WElcome!!!');
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
