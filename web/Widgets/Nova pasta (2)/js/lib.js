var xhttp = new XMLHttpRequest();
function Btn_start(){
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
    };
    alert('vai começar a putaria');
    xhttp.open('POST', '/send', true);
    xhttp.send('fname=Henry&lname=Ford');
  }
