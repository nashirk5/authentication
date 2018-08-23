const mongoose = require('mongoose');
//const dburl = 'mongodb://localhost:27017/authe';
const dburl = 'mongodb://nashirk5:nashirk5@ds225492.mlab.com:25492/authe';

mongoose.connect(dburl, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Connected to the DB');
    }
});