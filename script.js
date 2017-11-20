var names = [];

function onamae() {
  var x = document.getElementById('userInfo').value;
  names.push(x);
  document.getElementById('userInfo').value = "";
}

function next() {
  localStorage.setItem("nombres",names);
  location.href="two.html";
  }
  
function reveal() {
  var w= localStorage.getItem("nombres");
  document.getElementById('cat').innerHTML = w;
}