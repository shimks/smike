const express = require('express')
const cors = require('cors');

const app = express();
const dataRepository = [];
// buildFakeRepository(7);

app.use(cors({credentials: true, origin: true}));
app.get('/:entryNumber', (req, res) => {
    dataRepository.push(
        {
            date: new Date(),
            waypoints: [
                {lat: '52.5309916298853', long: '13.3846220493377'}, 
                {lat: '50.1120423728813', long: '8.68340740740811'}
            ], 
            speed: [
                80, 80
            ]
        }
    );
    dataRepository.push(
        {
            date: 'some date wow',
            waypoints: [
                {lat: '44.226445', long: '-76.495582'}, 
                {lat: '44.230329', long: '-76.492944'}
            ], 
            speed: [
                80, 80
            ]
        }
    );
    const entryNumber = req.params.entryNumber;
    console.log(entryNumber);
    console.log(dataRepository[entryNumber]);
    res.send(dataRepository[entryNumber]);
});

app.listen(8080, () => {
    console.log('app is running at localhost:8080');
})

function buildFakeRepository(number) {
    for (let i = 0; i < number; i++) {
        dataRepository.push({
            date: new Date(),
            waypoints: [
                {lat: Math.round(Math.random() * 10000) / 100, long: Math.round(Math.random() * 10000) / 100},
                {lat: Math.round(Math.random() * 10000) / 100, long: Math.round(Math.random() * 10000) / 100},
                {lat: Math.round(Math.random() * 10000) / 100, long: Math.round(Math.random() * 10000) / 100},
                {lat: Math.round(Math.random() * 10000) / 100, long: Math.round(Math.random() * 10000) / 100},
                {lat: Math.round(Math.random() * 10000) / 100, long: Math.round(Math.random() * 10000) / 100}
            ],
            speed: [
                Math.round(Math.random() * 100),
                Math.round(Math.random() * 100),
                Math.round(Math.random() * 100),
                Math.round(Math.random() * 100),
                Math.round(Math.random() * 100)
            ]
        })
    }
}
