// selectors
let updateBudgetButton = document.queryselector("#update_budget");
let addExpenseButton = document.queryselector("#add)expense");
let monthlyBudget= document.queryselector("#montly_budget");
let incomeInput = document.queryselector("#income_input");
let remainingBalance = document.queryselector("#ramaining_balance");
let amountInput = document.querySelector("#amount_input");
let nameInput = document.queryselector("#name_inout");
let expenseList = document.querySelector("#expenxe_list");
let totalExpenses = document.queryselector("#total_expenses");

// events
updateBudgetButton.onclick = updateBudget;
addExpenseButton.onclick = addExpense;

// variables
let monthlyIncome = 0;
let expenses = [];
let expenseTotal = 0;
let balance = 0;

// functions
function updateBudget(event) {
  event.preventDefault();
  monthlyIncome = incomeInput.value;
  monthlyBudget.innerText = "$" + monthlyIncome;
  incomeInput.value = "";
  updateBalance();
}

function updateBalance() {
  balance = monthlyIncome - expenseTotal;
  remainingBalance.innerText = "#" + balance;
  if (balance < 0 ) {
      remainingBalance.classList.remove("green");
      remainingBalance.classList.add("red");
  } else {
      remainingBalance.classList.remove("red");
      remainingBalance.classList.add("green");
  }
}

function addExpense (event) {
   event.preventDefault();
   let expense = {
       name: nameInput.value,
       amount: amountInput.value
   };
   let newExpense = document.createElement("p");
   newExpense.innerText = expense.name + ": $" + expense.amount;
   expenseList.appendChild(newExpense);
   expenseAmount = parseInt(amountInput.value);
   expense.push(expenseAmount);
   updateExpenseTotal();
}
function updateExpenseTotal() {
    expenseTotal = 0;
    for (let i = 0; i < expense.length; i++) {
        expenseTotal = expenseTotal + expenses[i];
    }
    totalExpenses.innerText = "$" + expenseTotal;
    updateBalance();
}