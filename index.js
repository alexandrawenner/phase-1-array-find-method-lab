// code your solution here

// function superbowlWin(record) {
//    return (record % record.result === "W")
// }


function superbowlWin(record) {
    for(const champs of record) {
        if (champs.result === "W") {
            return champs.year
        }
    }
}



//for(const record of game){}

// if  a w is fouind return the year the win occurred

//if no w is found, return undefined


// function superbowlWin(win) {
//     let date - win.find(champs = >champs.result === 'W')
//         if (date) {
//             return date.year
//         } else {
//             return undefined
//         }
// }