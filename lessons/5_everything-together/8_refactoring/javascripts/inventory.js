var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],

    //ok
    setDate: function() {
      var date = new Date();
      document.querySelector("#order_date").textContent = date.toUTCString();
    },

    //fixed
    cacheTemplate: function() {
      var inventoryItem = document.querySelector("#inventory_item");
      var iTmpl = inventoryItem.innerHTML;
      inventoryItem.remove();

      this.template = iTmpl;

      // var $iTmpl = $("#inventory_item").remove();
      // this.template = $iTmpl.html();
    },

    //ok
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },

    //TODO: fixed
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },

    //TODO: might not be needed
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },

    //TODO:
    update: function($item) {
      var id = this.deprecatedFindID($item)
      var item = this.get(id);

      item.name = $item.find("[name^=item_name]").val();
      item.stock_number = $item.find("[name^=item_stock_number]").val();
      item.quantity = $item.find("[name^=item_quantity]").val();
    },

    //TODO: fixed
    newItem: function(e) {
      e.preventDefault();
      var item = this.add()
      document.querySelector("#inventory").insertAdjacentHTML('beforeend', this.template.replace(/ID/g, item.id));
      // var item = this.add();
      // var $item = $(this.template.replace(/ID/g, item.id));

      // $("#inventory").append($item);
    },

    //TODO
    findParent: function(e) {

      // const oldVar = $(e.target).closest("tr");
      // const newVar = (e.target).closest("tr");
      return $(e.target).closest("tr");
      // return [e.target.closest("tr")];

    },

    //TODO
    deprecatedFindID: function($item) {
      return +$item.find("input[type=hidden]").val();
    },

    //TODO
    deleteItem: function(e) {
      e.preventDefault();

      var item = (e.target).closest("tr");
      var itemID = item.querySelector("input[type=hidden]").value;
      item.remove();
      this.remove(itemID);

    },

    //TODO
    updateItem: function(e) {
      var $item = this.findParent(e);

      this.update($item);
    },

    //fixed
    bindEvents: function() {
      document.querySelector('#add_item').addEventListener("click", this.newItem.bind(this));

      let inventory = document.querySelector('#inventory');

      inventory.addEventListener('click', (e)=> {
        if (e.target.closest("a.delete")) {
          this.deleteItem.call(this, e);
        }
      })

      inventory.addEventListener('click', (e)=> {
        if (e.target.closest("input")) {
          this.updateItem.call(this, e);
        }
      })
    },

    //ok
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

$($.proxy(inventory.init, inventory));
