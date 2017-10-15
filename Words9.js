let words1 = [["the",1], 
["to",2],
["and", 1],
["a", 1],
["I", 1],
["you", 1],
["it", 1],
["in", 1],
["said", 1],
["for", 1],
["up", 1],
["look", 1], 
["is", 2],
["go", 1],
["we", 1],
["little", 1],
["down", 1],
["can", 1],
["see", 1],
["not", 1],
["one", 1],
["my", 1],
["me", 2],
["big", 2],
["come", 2],
["blue", 2],
["red", 2],
["where", 2],
["jump", 0],
["away", 0],
["here", 0],
["help", 0],
["make", 0],
["yellow", 0],
["two", 2],
["play", 0],
["run", 0],
["find", 0],
["three", 0],
["funny", 2]];
var score = 0;
var scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
var y = 0;
var x = 0;
var randomWord;
var g1;


function randomNumber(){
    x = Math.floor(Math.random()*words1.length);
    y = words1[x][1];
    findWord (words1);
    return randomNumber;
}


function findWord(words1) {
   if (y < 2){
        randomWord = words1[x][0];
        console.log (randomWord);
        g1 = randomWord
        alert (g1 + ' g1');
        alert (x);
       printHTML();
                }else {
                    console.log ('Oops! ' +randomWord+ ' has too many points!');
                    randomNumber();
                }
    return randomWord;
}

function print(message) {
  document.write(message);
}
//HTML generator
function printHTML(){
   var stringHTML = '<form id="Form">';
    var n = randomWord.length;
    for(var i = 0; i<n; i++) {
      var c = randomWord.charAt(i);
      stringHTML += '<input type="text" name="textbox'+i+'" size="1">';
    }
    stringHTML += '<br><br><input type="submit" onclick="Get()" value="Submit"> </form>';
    print(stringHTML);
   
    
}
function Get() {
    var Form = document.getElementById('Form');         
    var Name3 = '';
   
    var childs = Form.children;         
        for(I = 0; I < childs.length-3; I++) {                   
             var Name =Form[I].getAttribute("textbox");
        var Name2 = Form[I].value.toString();
         console.log(Name2);
          Name3 +=Name2;
        }
  alert (Name3);
  
  validate(Name3,randomWord);
  return Name3;
}

//initial validation of user submission
function validate(Name3,randomWord) { 
  var v1 = Name3;
  var v2 = randomWord;
  var n = v1.localeCompare(v2);
  console.log (n);
  if (n===0){
  
    if (words1[x][1] === 0) {
      let score = words1[x][1] +=1;
      let bob = words1.splice(x,1, [randomWord, 1]);
    }else {
        words1.splice(x,1, [randomWord, 2]);
    }
      console.log('You are right!');
    console.log ('New Score for '+words1[x][0]+ ' is ' + words1[x][1] + '!');
}else {
    console.log('You are wrong!');
      }
  return validate;
}


randomNumber();