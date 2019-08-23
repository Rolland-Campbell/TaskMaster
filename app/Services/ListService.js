import List from "../models/List.js";

//Private
let _state = {
    lists: []
}


//Public
export default class ValuesService {
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?
    constructor() {
        console.log("ValuesService here")
    }

    addList(newList) {
        _state.lists.push(new List(newList))
        console.log(_state.lists)
    }

    get List() {
        return _state.lists.map(lists => new List(lists))
    }

    deleteList(id) {
        _state.lists.forEach((lists, i) => {
            if (lists._id == id) {
                _state.lists.splice(i, 1)
            }
        })
    }



    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
