//Using prompt(), store the users name as a string variable.
var stuffInput = prompt("Relinquish your name, mortal!");

//Create a function to return the first letter from that name passed as an argument (In my example above, it should return l)
function iWantFirstLetter(word){
   return word.charAt(0).toLowerCase();
                               } 
//Create a function that looks through an Alphabet array and finds the first letter, then writing the index of that letter to the HTML Page (will return 11 from my example). It should take in the letter as an argument
function lookUpIndex(letter){
  //function looking up the index of the letter, starting with the alphabet to base the index off of
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 //for loop going letter by letter to match up with the letter in the alphabet until found by incrementing the index number and checking
for(i=0;i<26;i++){
//if the letter the loop is on is equal to the letter of the alphabet then display "here is index number"  
  if(letter == alphabet[i]){
   document.querySelector(".wrapper").innerHTML= "Your name's index is "+i;                       
      }
//if they give me something that is not a letter like a number or something then make fun of them 
  //else{
     //document.querySelector(".wrapper").innerHTML= "Do you not understand what a name is?";
          }
                   }  
                             
//lookUpIndex contains iWantFirstLetter contains stuffInput
lookUpIndex(iWantFirstLetter(stuffInput));