import { regexName, regexTell, regexEmail } from "./regexs.js"; 

export class CreateSignUp {
  constructor(nome, tell, email, errorName, errorTell, ErrorEmail, button) {
    this.nome = nome;
    this.errorName = errorName;
    this.tell = tell;
    this.errorTell = errorTell;
    this.email = email;
    this.ErrorEmail = ErrorEmail;
    this.formButton = button;
  } 
  // MÉTODO QUE RETORNA O DATABASE DO LOCAL STORAGE
  GetData(key) {
    let database = JSON.parse(localStorage.getItem(key) || "[]");
    return database;
  } 
  // METODO QUE MOSTRA MENSSAGEM DE ERRO
  errorMensage(mensage, Alert, ElementAlert, blockedElement) {
    Alert.innerHTML = mensage;
    ElementAlert.style.border = "1px solid red";
    blockedElement.setAttribute("disabled", "disabled");
  } 
  // MÉTODO QUE MOSTRA MENSSAGEM DE APROVAÇÃO
  correctMensage(Alert, ElementAlert, blockedElement) {
    Alert.innerHTML = "";
    ElementAlert.style.border = "1px solid green";
    blockedElement.removeAttribute('disabled', 'disabled');
  } 
  // Método que crie e adiciona no db um novo objeto. 
  SignUpCreate(key, database) {
    database.push({
      name: this.nome.value,
      tell: this.tell.value,
      email: this.email.value,
    });
    localStorage.setItem(key, JSON.stringify(database));
  } 
  // Método de validação de nome
  ValidationName() {
    let result = regexName.test(this.nome.value);
    if (!result) {
      this.errorMensage(
        "Não insira números !",
        this.errorName,
        this.nome,
        this.formButton
      );
    } else {
      this.correctMensage(this.errorName, this.nome, this.formButton);
    }
  } 
  // Método de Validação de Telefone
  ValidationTell() {
    $(this.tell).mask("(00) 0000-0000");
    let result = regexTell.test(this.tell.value);
    if (!result) {
      this.errorMensage('Insira um número correto !', this.errorTell, this.tell, this.ErrorEmail.formButton);
    } else {
      this.correctMensage(this.errorTell, this.tell, this.formButton);
    }

  } 
  // MÉtodo de Validação de E-mail 
  ValidationEmail() {
    let result = regexEmail.test(this.email.value);
    if (!result) {
      this.errorMensage('Insira uma E-mail Válido !', this.ErrorEmail, this.email, this.formButton);
    } else {
      this.correctMensage(this.ErrorEmail, this.email, this.formButton);
    }
  }
} 

export class UserDataView {
  constructor(DataAreaView,key) {
    this.DataAreaView = DataAreaView; 
    this.key = key;  
  } 
  getData() { 
    let database = JSON.parse(localStorage.getItem(this.key) || "[]"); 
    return database; 
  }
  show(database) {
    for (let i in database) {
        this.DataAreaView.innerHTML += ` <div class="lead-body">
        <div class="image">
          <img src="assets/utilites/user-foto.svg" alt="" />
        </div>
        <div class="lead-name">
          <p id="name-lead">${database[i].name}</p>
          <small class="qualification">Cliente</small>
        </div>
      </div>`
      }
  } 

}