function validate(){
  var submitSucceed = true;
  let inputIds = ['name', 'mail', 'pass', 'confirmPass'];
  inputIds.forEach(function(id){
    var inputElement = document.getElementById(id);
    if(isEmpty(id)){
      printError(id, "Rellene este campo");
      submitSucceed = false;
    }else{
      var inputText = inputElement.value; 
      var successInput = true
      switch(id) {
        case 'name':
          const regexName = /^(?!([a-zA-Z]+(\s[a-zA-Z]+)*$))/gm
          if(regexName.test(inputText)){
            printError(id, "Solo se admiten carácteres alfabéticos y un espacio entre palabras");
            submitSucceed = false;
            successInput = false;
          }
          break;
        case 'mail':
          const regexEmail = /^(?!([A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z]))/gm;
          if(regexEmail.test(inputText)){
            printError(id, "Email Inválido");
            submitSucceed = false;
            successInput = false;
          }
          break;
        case 'pass':
          if(inputText.length < 8){
            printError(id, "Debe tener al menos 8 caracteres");
            submitSucceed = false;
            successInput = false;
          }
          break;
        case 'confirmPass':
          if(inputText != document.getElementById('pass').value){
            printError(id, "Las contraseñas no coinciden");
            submitSucceed = false;
            successInput = false;
          }
          break;
        default:
          break;
      }
      if(successInput){
        printSuccess(id)
      }
    }
  })

  if(submitSucceed){
    setTimeout(function(){
      alert('Se ha inscrito correctamente');
    },1000) 
  }
  return submitSucceed
}

function printError(id, msg){
  changeErrorMessage(id, msg)
  switchClasses(id, "success", "error")
}

function printSuccess(id){
  changeErrorMessage(id, '')
  switchClasses(id, "error", "success")
}

function isEmpty(id){
  return !document.getElementById(id).value
}

function switchClasses(id, toRemoveClass, toAddClass){
  let element = document.getElementById(id);

  element.classList.remove(toRemoveClass);
  element.classList.add(toAddClass);
}

function changeErrorMessage(id, msg){
  document.getElementById(id+'Error').textContent=msg;
}

function showSuccesFullMessage() {
  var form = document.getElementById('f');
  if (form.checkValidity()) {
    alert('Se ha inscrito correctamente');
  }
}