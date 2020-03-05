// Budget Controller
var budgetController = (function() {

  let Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  let Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  let data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      let newItem, ID;

      // create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      // Push it into our data structure
      data.allItems[type].push(newItem);

      // Return the new element:
      return newItem;
    },

    testing: function() {
      console.log(data);
    }
  };

}) ();




// UI Controller
var UIController = (function(){

  let DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn'
  }

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    addListItem: function(obj, type) {

      // Create HTML string with placeholder text

      // Replace the placeholder text with some actual data

      // Insert the HTML into the DOM
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  }


})();




// Global App Controller
var controller = (function(budgetCtrl, UICtrl){

  let setupEventListeners = function() {
    let DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
      // event.which is used to older version of other browsers.
      if (event.keyCode === 13 || event.which === 13 ) {
        ctrlAddItem();
      }
    });
  };


  let ctrlAddItem = function() {
    let input, newItem;

    input = UICtrl.getInput();

    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
  }

  return {
    init: function() {
      console.log('Applications has been started!');
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();