function reviewFunction(){
  if (document.getElementById('review').checked) {
    document.getElementById('name').innerHTML = nm.value;
    document.getElementById('position').innerHTML = pos.value;
    document.getElementById('email').innerHTML = em.value;
    document.getElementById('tel').innerHTML = mb.value;
    document.getElementById('skype').innerHTML = sk.value;
    document.getElementById('linkedin').innerHTML = lk.value;
  }
}
function getFunction(){
  if (document.getElementById('get').checked) {
    var e=document.getElementById("htmlcode");
    var content=e.innerHTML;
    document.getElementById("html").innerHTML = content;
  }
}

(function () {
  let trigger = document.getElementById('trigger');
  trigger.addEventListener("click", function() {
    let target = document.getElementById('target');
    let source = document.getElementById('source');
    target.innerHTML = source.innerHTML;
  });
})

function addskype(){
var skypeid = document.getElementById("sk");
var s = skypeid.value;
document.getElementById('skype').innerHTML= s;
document.getElementById('skype').href="skype:"+s+"?action";
}