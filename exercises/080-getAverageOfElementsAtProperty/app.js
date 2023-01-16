// Write your function here
function getAverageOfElementsAtProperty ( obj, key){
if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0){
    return 0;
}
let sum = 0;
for (let element of obj[key]){
    sum += element;
}
return sum / obj[key].length;
}