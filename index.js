// Your code here
function mapToNegativize(integer) {
    let a = []
    for(let i = 0; i < integer.length; i++){
        a.push(-1 * integer[i])
    }
    return a

}

function mapToNoChange(integer){
    let a = []
    for(let i = 0; i < integer.length; i++){
        a.push(integer[i])
    }
    return a

}

function mapToDouble(integer){
    let a = []
    for(let i = 0; i< integer.length; i++){
        a.push(2 * integer[i])
    }
    return a

}

function mapToSquare(integer) {
    let a = []
    for(let i = 0; i < integer.length; i++){
        a.push(integer[i] * integer[i])
    }
    return a

}

function reduceToTotal(src, startingPoint = 0){
    let a  = startingPoint

    for(let i = 0; i < src.length; i++){
        a = a + src[i]
    }
    return a 

}

function reduceToAllTrue(src){
    for(let i = 0; i < src.length; i++){
        if (!src[i]) return false 
    }
    return true 

}


function reduceToAnyTrue(src){
    for(let i = 0; i < src.length; i++){
        if (src[i]) return true
    }
    return false

}