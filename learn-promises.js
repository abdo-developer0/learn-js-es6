
const playing = new Promise( (resolve, rejected) => {

    const isPlaying = true;

    if (isPlaying) {
        resolve("iam playing now!");
    }
    else {
        rejected('i new to slep!');
    }
});

const eating = new Promise( (resolve, rejected) => {

    const isEating = true;

    if (isEating) {
        resolve("im eating now!");
    }
    else {
        rejected('i need to eat!');
    }
});


const sleping = new Promise( (resolve, rejected) => {

    const isEating = true;

    if (isEating) {
        resolve("im sleping now!");
    }
    else {
        rejected('i need to slep!');
    }
});



eating.then( success => {
    console.log(success);
    playing.then(success => {
        console.log(success);

        sleping.then(success => {
            console.log(success);
        }).catch(e => {
            console.log(e);
        });
    }).catch(e => {
        console.log(e);
    });
}).catch(e => {
    console.log(e)
});