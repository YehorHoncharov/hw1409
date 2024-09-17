const express = require('express'); 
const app = express(); 


function getCurrentDate() {
    const now = new Date(); 
    return now.toString(); 
}


app.get('/date', (req, res) => {
    const currentDate = getCurrentDate(); 
    console.log('Текущая дата и время:', currentDate);
    res.send(`Текущая дата и время: ${currentDate}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Готово! Перевірте на сайті!')
});
