"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var itemToAdd = document.getElementById("itemToAdd");
var addButton = document.getElementById("addButton");
var itemList = document.getElementById("list");

var Item =
/*#__PURE__*/
function () {
  function Item(itemName) {
    _classCallCheck(this, Item);

    this.name = itemName;
    this.create();
  }

  _createClass(Item, [{
    key: "create",
    value: function create() {
      var _this = this;

      var listItem = document.createElement("div");
      listItem.classList.add("list-item");
      var input = document.createElement("input");
      input.type = "text";
      input.classList.add("item-name");
      input.value = this.name;
      input.disabled = true;
      var actions = document.createElement("div");
      actions.classList.add("item-actions");
      var updateButton = document.createElement("button");
      updateButton.classList.add("update");
      updateButton.innerText = "Update";
      updateButton.addEventListener("click", function () {
        return _this.update(input);
      });
      var removeButton = document.createElement("button");
      removeButton.classList.add("remove");
      removeButton.innerText = "Remove";
      removeButton.addEventListener("click", function () {
        return _this.remove(listItem);
      });
      actions.appendChild(updateButton);
      actions.appendChild(removeButton);
      listItem.appendChild(input);
      listItem.appendChild(actions);
      itemList.appendChild(listItem);
    }
  }, {
    key: "update",
    value: function update(input) {
      input.disabled = !input.disabled;
    }
  }, {
    key: "remove",
    value: function remove(listItem) {
      listItem.parentNode.removeChild(listItem);
    }
  }]);

  return Item;
}();

addButton.addEventListener("click", function () {
  return newItem();
});

function newItem() {
  if (itemToAdd.value != "") {
    new Item(itemToAdd.value);
    itemToAdd.value = "";
  }
}