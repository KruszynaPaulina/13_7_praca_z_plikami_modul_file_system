var fs = require('fs');

fs.readdir('./',function(err, files){
   if (err) throw err;

   fs.writeFile('./list_files.txt', files, function(err) {
        if (err) throw err;
    });

   fs.readFile('./list_files.txt', 'utf-8', function(err, data) {
        console.log(data);
    });
});



//var fs = require('fs');
//fs.stat('./cat.jpg', function(err, stats) {
//    console.log(stats);
//});



//var fs = require('fs');
//var StatMode = require('stat-mode');

//fs.stat('./cat.jpg', function(err, stats) {
//    var statMode = new StatMode(stats);
//    console.log(statMode.toString());
//});



//var fs = require('fs');
//fs.readFile('./tekst.txt', function(err, data) {
//    console.log(data);
//});


//var fs = require('fs');
//fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//    console.log(data);
//});
//fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
//   if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
//    console.log('Zapisano!');
//});



//var fs = require('fs');
//var colors = require('colors');

//fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//    console.log('Dane przed zapisem!'.blue);
//    console.log(data);
//    //fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
//    fs.appendFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
//        if (err) throw err;
//        console.log('Zapisano!'.blue);
//        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//            console.log('Dane po zapisie'.blue)
//            console.log(data);
//        });
//    });
//});


