var div = document.getElementById("result");
var feed = [];

function addFeedback(){
  var x=document.getElementById("feedback").value;
  feed.push(x);
  console.log(feed)
  div.innerHTML= "Successfully Added Feedback Details!";
}

function displayFeedback(){
  var i=0;
  var res="";
  for(var i=0;i<feed.length;i++){ 
  res = res + "Feedback "+(i+1)+"<br/>"+feed[i]+"<br/>";
   div.innerHTML = res;
  }
}
