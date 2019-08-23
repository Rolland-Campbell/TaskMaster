export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this.listsName = data.listsName
        this.listItem = data.listItem || []
    }

    get Template(index) {
        return `
      <div class="col-4 border">
        <h2>${this.listsName}</h2>
        <h3>${this.listItem}</h3>
        <button class="btn btn-danger" onclick="app.controllers.listController.deleteList(${this._idex})">Delete List</button>
      </div>
    `
    }
}