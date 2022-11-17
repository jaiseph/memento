




let thingy = document.getElementById("thing");


//let numbers = ["1", "2", "3", "4", "5"]
let numbers = ["one", "two", "three", "four", "five"];




function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Used like so
//var arr = [2, 11, 37, 42];
shuffle(numbers);
//console.log(arr);



  let stuff = numbers.join('');

//alert(thingy);


let scribble = function(){
    
   let clone = thingy.value;
    
   //alert("hello world");
 alert(clone);
    alert(stuff);
   const compareValue = clone.localeCompare(stuff);

   if(compareValue === 0){
       
       
       alert("correct")
   }else{
       
       alert("wrong")
   }
   
   

    
}


//scribble();






/*const arrOfTargetWords = ["foo", "bar", "baz"];

const userInput = prompt("Gimme a word!");

if (arrOfTargetWords.includes(userInput)) {
  alert("Your word was in the array!");
} else {
  alert("Your word was not in the array.");
}*/





let magic = function(){
    const box = document.getElementById('red');
    
 box.style.display = 'block';
    
    
    setTimeout(() => {
  

    
    
  // 👇️ removes element from DOM
  box.style.display = 'none';

  // 👇️ hides element (still takes up space on page)
  // box.style.visibility = 'hidden';
}, 1000);
    
}
   

 const box = document.getElementById('red');
box.innerHTML = stuff;

setTimeout(() => {
  

    
    
  // 👇️ removes element from DOM
  box.style.display = 'none';

  // 👇️ hides element (still takes up space on page)
  // box.style.visibility = 'hidden';
}, 1000);

  
