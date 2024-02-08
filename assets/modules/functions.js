export class CreateSignUp {
  constructor(nome, tell, email, erroName, errorTell, ErrorEmail, button) {
    this.nome = nome;
    this.errorName = erroName;
    this.tell = tell;
    this.errorTell = errorTell;
    this.ErrorEmail = ErrorEmail;
    this.email = email;
    this.formButton = button;
  }
  GetData(key) {
    let database = JSON.parse(localStorage.getItem(key) || "[]");
    return database;
  }
  errorMensage(mensage, Alert, ElementAlert, blockedElement) {
    Alert.innerHTML = mensage;
    ElementAlert.style.border = "1px solid red";
    blockedElement.setAttribute("disabled", "disabled");
  }
  SignUpCreate(key, database) {
    database.push({
      name: this.nome,
      tell: this.tell,
      email: this.email,
    });
    localStorage.setItem(key, JSON.stringify(database));
  }
  ValidationName(name, callback, blockedElement) {
    const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    let result = regex.test(name);
    if (!result) {
      this.errorMensage(
        "Não insira números !",
        this.errorName,
        this.formButton
      );
    } else {
    }
  }
  ValidationTell() {
    $(elementForAlert).mask("(00) 0000-0000");
    const regex = /^\(\d{2}\) \d{4}-\d{4}$/;
  }
  ValidationEmail() {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }
}
