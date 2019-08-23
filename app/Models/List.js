export default class List {
  //TODO You will need to create a constructor 
  //and the methods needed to create the view template for this model
  constructor(data) {
    this.listName = data.listName
    this.listItem = data.listItem || []
  }

  getTemplate(index) {
    let template =
      `
        <div class="col-4">
            <h1>${this.listName}</h1>
            <ul>`
    template += this.drawListItem(index)
    template += `    </ul>
            <form onsubmit="app.controllers.listController.addListItem(event, ${index})"> 
              <div class="form-group">
                <label for="listItem">List Item</label>
                <input type="text" class="form-control" name="listItem" placeholder="Add a list item" required>
                </div>
                <button type="submit">"Add Item"</button>
              </form>
              <button type ="button" class="btn-danger" onclick="app.controllers.listController.deleteList(${index})">"Remove"</button>
        </div>
    `
    return template
  }
  drawListItem(listIndex) {
    let listItemTemplate = ""
    this.listItem.forEach((t, listItemIndex) => {
      listItemTemplate += `<li>${t}<span class="btn-danger ml-3 pl-1 pr-1 rounded-circle justify-right" onclick="app.controllers.listController.deleteListItem(${listIndex}, ${listItemIndex})">X</span></li>`
    });
    return listItemTemplate
  }
}