// code your solution here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}// }saturdayFun('bathe my dog')

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`;
}

let  wrapAdjective=function(star='*'){
    return function innerwrapAdjective(wrap="special"){
        return `You are ${star}${wrap}${star}!`;
    }
    
}

