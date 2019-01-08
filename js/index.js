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

function addlinks(){
  //Add Skype dinamic link.
  var skypeid = document.getElementById("sk");
  var s = skypeid.value;
  document.getElementById('skype').innerHTML= s;
  document.getElementById('skype').href="skype:"+s+"?userinfo";
//Add Phone dinamic link.
  var phoneid = document.getElementById("mb");
  var s = phoneid.value;
  document.getElementById('tel').innerHTML= s;
  document.getElementById('tel').href="callto:"+s;
//Add LinkedIn dinamic link.
  var linkedinid = document.getElementById("lk");
  var s = skypeid.value;
  document.getElementById('linkedin').innerHTML= s;
  document.getElementById('linkedin').href="https://linkedin.com/in/"+s;
//Add Email dinamic link.
  var emailid = document.getElementById("em");
  var s = emailid.value;
  document.getElementById('email').innerHTML= s;
  document.getElementById('email').href="mailto:"+s;
}
