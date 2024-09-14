const moment = require('moment');

function getDate() {
    const currentDate = moment().format('YYYY/MM/DD HH:mm:ss');
    console.log(currentDate);
}

getDate();
