// Code your solutions in this file
let customMessages=[];

function writeCards(names,eventName){

    for (let i=0;i<names.length;i++){
        console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        customMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);

    }
return customMessages;
}


writeCardsn (["Ada, "Brendan", "Ali"], "birthday");

function countDown(x){
    while (x >= 0) {
        console.log(x);
        x--
    }
}