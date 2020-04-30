/* Business Logic (Model)
 * 
 * An Application converts numbers to words 
 *
 * Description:

Numbers written in  words are written in the box (prompt) and press the button to run.

Steps:

1. The user writes what you want from the numbers to ten with words.
2. ayses number will be a sub math second number.
3. my app must return result of number difference..
4. output must be a word.. 
States:

1. box prompt
2.numbers entered in the box
 3. button pressed
  4.output  appeared on the screen.

@author: Rabia Taskin

 */

function change() {
    
  let text;
  let numbers = prompt(" HI Aysecik.. Enter your number", "one to nine");
  switch(numbers) {
    case "one":
      text = "nine";
      break;
    case "two":
      text = "eight";
      break;
    case "three":
      text = "seven";
      break;
      case "four":
      text = "six";
      break;
      case "five":
      text = "five";
      break;
      case "six":
      text = "four";
      break;
      case "seven":
      text = "three";
      break;
      case "eight":
      text = "two";
      break;
      case "nine":
      text = "one";
      break;
    default:
      text = "SORRY GIVE ME A  NEW NUMBER ";
  }
  document.getElementById("output").innerHTML = text;
}



