function convertDoubleSpaceToSingle(str) {
    // your code here
 let split = str.split('  ');
 let joinSpace = split.join(' ');
 return joinSpace
//return str.split("  ").join(" ");
    
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"