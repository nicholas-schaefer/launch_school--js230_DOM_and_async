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

    //TODO: remove to remove, also html?
    cacheTemplate: function() {
      // document.querySelector("#inventory_item");
      var $iTmpl = $("#inventory_item").remove();
      this.template = $iTmpl.html();
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

    //TODO: might not be needed, TBD
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
      var id = this.findID($item),
          item = this.get(id);

      item.name = $item.find("[name^=item_name]").val();
      item.stock_number = $item.find("[name^=item_stock_number]").val();
      item.quantity = $item.find("[name^=item_quantity]").val();
    },

    //TODO:
    newItem: function(e) {
      e.preventDefault();
      var item = this.add(),
          $item = $(this.template.replace(/ID/g, item.id));

      $("#inventory").append($item);
    },

    //TODO
    findParent: function(e) {

      // const oldVar = $(e.target).closest("tr");
      // const newVar = (e.target).closest("tr");
      return $(e.target).closest("tr");
      // return [e.target.closest("tr")];

    },

    //TODO
    findID: function($item) {
      return +$item.find("input[type=hidden]").val();
    },

    //TODO
    deleteItem: function(e) {
      e.preventDefault();
      var $item = this.findParent(e).remove();

      this.remove(this.findID($item));
    },

    //TODO
    updateItem: function(e) {
      var $item = this.findParent(e);

      this.update($item);
    },

    //TODO
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
      // $("#add_item").on("click", $.proxy(this.newItem, this));
      // $("#inventory").on("click", "a.delete", $.proxy(this.deleteItem, this));
      // $("#inventory").on("blur", ":input", $.proxy(this.updateItem, this));
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
