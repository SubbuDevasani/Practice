var feed=[];
function addFeedback(){
  var x=document.getElementById("feedback").ariaValueMax;
  feed.push(x);
}

function displayFeedback(){
  var i=0;
  var res="";
  res=res="Feedback"+(i+1)+"<br/>+feed[i]+"<br/>";

  document.getElementsByName("inner")[1].innerHTML=res;
  feed=[];
}

