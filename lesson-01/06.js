let str = "zzzzyzz"

switch (true){
    case str.includes('y') == true:
        console.log("нашел");
        break;
    default:
        console.log("заблудился")
}