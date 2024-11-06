setTimeout(()=>{
    console.log("Hello Everyone");
}, 2000)

setInterval(()=>{
    console.log("here karishma")
}, 3000)
clearInterval()

let count=0
const countid= setInterval(()=>{
    count++
    console.log(count)
    if(count>3){
        clearInterval(countid)
        console.log("Internal clear")
    }
}, 2000)