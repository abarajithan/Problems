var a = [{a:1},{a:2}];
var b = [{a:3},{a:1}];
var c = [...a,...b];
let newArray =[];
c.map((x,i) => {
    let temp = newArray.filter(j => j.a === x.a);
    if(!temp.length){
        newArray.push(x);
    }
});
console.log(JSON.stringify(newArray));