const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const dbServer = require("./serverBackend")
const dbManager = require("./managerBackend");
const { Pool } = require('pg/lib');
const app = express()
const PORT = 3001

app.listen(PORT, () => {
  console.log("server has started on port", PORT);
});

var corsOptions = {
  origin: "http://localhost:3000"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// Routes for Menu Items
app.get('/MenuItems', dbManager.viewMenuItems)
app.post('/menuItems/insert', dbManager.insertMenuItem)
app.post('/menuItems/update', dbManager.updateMenuItem)
app.delete('/menuItems/:item_id', dbManager.deleteMenuItem)

// Routes for Inventory
app.get('/Inventory', dbManager.viewInventory)
app.post('/inventory/insert', dbManager.insertInventory)
app.post('/inventory/update', dbManager.updateInventory)
app.delete('/inventory/:inventory_id', dbManager.deleteInventory)


// Routes for Server GUI
app.get('/EntreeItems', dbServer.viewEntreeItems)
app.get('/SideItems', dbServer.viewSideItems)
app.get('/DrinkItems', dbServer.viewDrinkItems)
app.get('/DessertItems', dbServer.viewDessertItems)
