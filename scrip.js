let text=document.getElementById("text_input");
let result=document.getElementById("txt_result");
let kind=document.getElementById("change");



text.addEventListener("input",()=>{
    makeresult();
});
    

kind.addEventListener("change",()=>{
    makeresult();
});


function makeresult(){
    if (kind.value == "encode"){
        result.value = window.btoa(text.value);
    }else if(kind.value == "decode"){
        result.value = window.atob(text.value);
    }
}