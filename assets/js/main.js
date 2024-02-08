import { CreateSignUp } from "../modules/functions.js";  
import { KEY } from "../modules/keys.js";
const form =  {
  nomeInput : () => document.getElementById('name'), 
  nomeError : () => document.getElementById('errorName'), 
  tellInput: () => document.getElementById('tell'), 
  tellError: () => document.getElementById('errorTell'), 
 emailInput: () => document.getElementById('email'), 
    emailError: () => document.getElementById('errorEmail'),  
    formButton: () => document.getElementById("register"), 
}

let MyFormSign = new CreateSignUp(form.nomeInput(), form.nomeError(), form.tellInput(), form.tellError(), form.emailInput(), form.emailError()); 


let database = MyFormSign.GetData(KEY);   

form.formButton().addEventListener('click', () => {
    MyFormSign.SignUpCreate(KEY, database);
})