const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
 
const app = express();
app.use(express.static(__dirname));
 
app.use(bodyParser.json()); // support json encoded bodies
 
// some data for the API
var students = [
    {
      "name": "Aswathi",
      "date": "01-03-2019"
    },
    {
      "name": "Vinnu",
      "date": "01-03-2019"
    },
    {
      "name": "Saranya",
      "date": "01-03-2019"
    }
  ];
 
 
// the "index" route, which serves the Angular app
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'/dist/index.html'))
});
 
// the GET "students" API endpoint
app.get('/api/students', function (req, res) {
    res.send(students);
});
 
// POST endpoint for creating a new food
app.post('/api/students', function (req, res) {
    // calculate the next ID
    let id = 1;
    if (students.length > 0) {
        let maximum = Math.max.apply(Math, foods.map(function (f) { return f.id; }));
        id = maximum + 1;
    }
    let new_student = {"id": id, "name": req.body.name};
    students.push(new_student);
    res.send(new_student);
});
 
// PUT endpoint for editing food
app.put('/api/students/:id', function (req, res) {
    let id = req.params.id;
    let f = students.find(x => x.id == id);
    f.name = req.body.name;
    res.send(f);
});
 
// DELETE endpoint for deleting food
app.delete('/api/students/:id', function (req, res) {
    let id = req.params.id;
    let f = students.find(x => x.id == id);
    foods = students.filter(x => x.id != id);
    res.send(f);
});
 
// HTTP listener
app.listen(3000, function () {
    console.log('Example listening on port 3000!');
});
module.exports = app;