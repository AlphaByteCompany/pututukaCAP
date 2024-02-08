import { UserDataView } from "../../../../assets/modules/functions.js"; 
import { KEY } from "../../../../assets/modules/keys.js";
const DataArea = { 
    searchBar: () => document.getElementById('searchBar'), 
    area: () => document.getElementById('lead-area'), 
    
}

let UserDataViewInWindow =  new UserDataView(DataArea.area(), KEY); 

let database = UserDataViewInWindow.getData();   

UserDataViewInWindow.show(database); 