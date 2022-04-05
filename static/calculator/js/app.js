const topCard = document.getElementsByClassName("top_card")[0]

const currencyPlaceholder = document.getElementById("symbol")
// const currentBalancePlaceholder = document.getElementById("balance")

const nameHolder = document.getElementById("transaction_name");
const incomeRadio = document.getElementById("income");
const expenseRadio = document.getElementById("expense");
const amountHolder = document.getElementById("transaction_amount");

const addTransactionButton =  document.getElementById("add_transaction");
const cancelEditButton = document.getElementById("cancel_edit");

const transactionList = document.getElementById("list_of_transactions")

let currencySymbol = "";
let transactions = [];
let balance = 0
let editing_id = -1;


// balance = Number(window.localStorage.getItem("balance")) || 0;
// transactions = JSON.parse(window.localStorage.getItem("transactions")) || [];
//
// const saveStatus = () => {
//     window.localStorage.setItem("currencySymbol", currencySymbol);
//     window.localStorage.setItem("balance", balance);
//     window.localStorage.setItem("transactions", JSON.stringify(transactions));
// }


function del(i) {
    transactions = transactions.filter((e,index) => i!=index);
    render();
}

function edit(i){
    transaction = transactions[i]
    editing_id = i
    cancelEditButton.style.display = "block"
    nameHolder.value = transaction.name;
    if(transaction.type == "income"){
        incomeRadio.checked = true;
        expenseRadio.checked = false;
    } else {
        expenseRadio.checked = true;
        incomeRadio.checked = false;
    }

    amountHolder.value = transaction.amount
}

const render = () => {
    currencyPlaceholder.innerHTML = `${currencySymbol}`

    // currentBalancePlaceholder.innerHTML = `${balance}`

    if(balance < 0){
        topCard.classList.add("red")
    } else{
        topCard.classList.remove("red")
    }
}


render();
// saveStatus();

let cancelEdit = () => {
    editing_id = -1;
    cancelEditButton.style.display = "none"
    nameHolder.value = "";
    amountHolder.value = "";
    render();
    // saveStatus();
}

addTransactionButton.addEventListener("click", () => {
    let name = nameHolder.value;
    let type = incomeRadio.checked ? "income" : "expense"
    let amount = Number(amountHolder.value)

    if(name == "" || amount == 0){
        alert("Name and amount can't be empty");
        return;
    }

    if(amount < 0){
        alert("Negetive amounts are not allowed");
        return;
    }

    let transaction = {
        name,
        amount, 
        type,
    }
    if(editing_id == -1){
        console.log('qushsak buladi', name, amount, type)
    var url = `/calculator/`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            'description':name,
            'amount': amount,
            'type': type
        })
    })
        .then((response) => {
            response.json().then((data) => {
                balance = document.getElementById('balance').innerHTML;
                balance = parseInt(balance)
                if (type == 'income'){
                    color = 'green'
                    inex = '+'
                    balance+=amount
                }
                else{
                    color = 'red'
                    inex = '-'
                    balance-=amount
                }
                html = `
                <li class="transaction income" style="background-color:${color}">
                        <p>${name}</p>
                        <div class="right">
                            <p>${ inex} ${ amount }</p>
                            <button class="link">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="link">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </li>
                `
                html1 = document.getElementById('list_of_transactions').innerHTML
                document.getElementById('balance').innerHTML = balance;
                document.getElementById('list_of_transactions').innerHTML=html+html1;
            })


        })
}

    else{
        transactions[editing_id] = transaction;
        editing_id = -1;
        cancelEditButton.style.display = "none"
    }
    nameHolder.value = "";
    amountHolder.value = "";
    render();
    // saveStatus();
})