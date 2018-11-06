const express = require('express')

const app = express();

app.get('/:entryNumber', (req, res) => {
    const dataRepository = [];
    dataRepository.push({
        date: 'Oct 11, 2018',
        waypoints: [
            {lat: 1.11, long: 12.34},
            {lat: 123.45, long: 111.1111}
        ],
        speed: [
            13, 14
        ]
    });
    dataRepository.push({
        date: 'Oct 12, 2018',
        waypoints: [
            {lat: 100, long: 110},
            {lat: 100.45, long: 111.1321}
        ],
        speed: [
            34, 23
        ]
    });
    const entryNumber = req.params.entryNumber;
    res.send(dataRepository[entryNumber]);
});

app.listen(8080, () => {
    console.log('app is running');
})
