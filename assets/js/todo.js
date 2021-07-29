function findit(){
var url='';
  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('check');
  for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
             checkedValue = inputElements[i].value;
             url="/delete/?=id="+checkedValue;
             return url
        }

  }
}


