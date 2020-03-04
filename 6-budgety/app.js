// Budget Controller
var budgetController = (function() {

  let Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

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
    let input = UICtrl.getInput();
    console.log(input);
  }

  return {
    init: function() {
      console.log('Applications has been started!');
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();