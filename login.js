const element = document.getElementById("name1");

element.addEventListener('input',val=>{
    console.log(val);
    
})

function onChange() {
    const password = document.querySelector('input[name=pass]');
    const confirm = document.querySelector('input[name=cnfrm]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }