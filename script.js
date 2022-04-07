
function count(){
var word = "bottles";
var count = 99;

document.getElementById("main").innerHTML+="<br/>" + (count + " " + word + " of beer on the wall");

while (count > 0) {
    if (count == 1){
        var word = "bottle"
      }
    
    document.getElementById("main").innerHTML+="<br/>" +("    "+ count + " " + word + " of beer,");
    document.getElementById("main").innerHTML+="<br/>" +("Take one down, pass it around,"); 
    document.getElementById("main").innerHTML+="<br/>" +( "     ------------->  ");
    document.getElementById("main").innerHTML+="<br/>" +( "      ");
    count = count - 1;
    if (count > 1) {
        document.getElementById("main").innerHTML+=( " " + count + " "+ word +" of beer on the wall.");
    } else if(count == 1) {
        document.getElementById("main").innerHTML+=(count + " bottle of beer on the wall."); 
    } else {
        document.getElementById("main").innerHTML+=("No more bottles of beer on the wall, no more bottles of beer! " + "Go to the store and buy some more, 99 bottles of beer on the wall");
    }
   
}
}
