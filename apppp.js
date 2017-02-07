//Javascript function using Closure
function Counter(){
   var count=0;
   //this is closure function to return value
   return function(){
       return ++count;
   } ;
};

var incrementCounter= Counter();
//this function is used to create 
function onbuttonclick(){
   var count= incrementCounter(); 
   //to display the count value on the page
   document.getElementById('clickcount').innerHTML=" You Clicked " +count+ " times(s).......!";
  //To display return count value in console.
   console.log(count);
}
 