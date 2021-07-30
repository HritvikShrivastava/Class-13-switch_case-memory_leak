var inputbox

var text 


function setup () {

  inputbox = createInput();
  inputbox.position(120, 190)

  text = createElement('h3','Enter a Letter');
  text.position(140,120)

}


function draw() 
{
background("lightblue")

const value= inputbox.value();
switch(value) {
case 'a':
  console.log("it's a vowel")
  break;
case 'e':
  console.log("it's a vowel")
  break;
case 'i':
  console.log("it's a vowel")
  break;
case 'o':
  console.log("it's a vowel")
  break;
case 'u':
  console.log("it's a vowel")
  break;
default:
  console.log("it's a consonant")
}

}

