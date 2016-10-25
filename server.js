var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var articles = {
    

'article-one' : {
    title : 'Article One',
    heading : 'Article One - Aalia',
    date : 'Oct 25, 2016',
    content : `<p>
                    This is article one. Today is a beautiful sunny day :). Lots of smiles and laughter 
                </p>
                <p>
                    Studying online is cool. Brain getting refreshed at the comfort of your home and a hot cuppa of tea!!
                </p>`
 },

 'article-two' : {
     title : 'Article Two',
     heading : 'Article Two - Aalia',
     date : 'Oct 25, 2016',
     content : `<p>
                    This is content for Article two
                </p>`
     
 },
                
 'article-three' : {
      title : 'Article three', 
      heading : 'Article three - Aalia',
     date : 'Oct 25, 2016',
     content : `<p>
                    This is content for Article three
                </p>`
     
 }
 

};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

var htmlTemplate =
     `
      <html>
      <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content = "width=device=width , initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
        <div>
            <a href='/'>Home</a>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
        </div>
    </body>
</html>`
 
return htmlTemplate;  
} 
  
app.get('/:articleName',function(req,res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));

});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
