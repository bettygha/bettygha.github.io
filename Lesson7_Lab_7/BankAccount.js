class Account {
    static accountInfoList = [];
    #accountName;
    #deposit;
    constructor(accountName, deposit) {
        this.#accountName = accountName;
        this.#deposit = deposit;
    }
    setAccount(accountName, deposit) {
        this.#accountName = accountName;
        this.#deposit = deposit;
        //Account.accountInfoList.push(this)
    }
    getAccountName() {
        return this.#accountName;
    }
    setAccountName(name) {
        this.#accountName = name;
    }
    getDeposit() {
        return this.#deposit;
    }
    setDeposit(deposit) {
        this.#deposit = deposit;
    }
    getAccount() {
        return this.#accountName + "   " + this.#deposit;
    }

}

// window.onload=function(){
//     const buttonHandler = document.querySelector('.formm');
//     buttonHandler.addEventListener('submit',createAccount);

// }

function createAccount() {
    var accountName = document.getElementById('accountName').value;
    var deposit = document.getElementById('deposit').value;
    const account = new Account();
    account.setAccount(accountName, deposit);
    Account.accountInfoList.push(account);
    storeLocally();
    display();

    // const accounts = BankAccount.getAcountInfoList();
    // alert(JSON.stringify(BankAccount.accountInfoList[0].getAccountName()))




    // for(let i = 0 ;i <accounts.length;i++){
    //     const singleAccount = document.createElement('li');
    //     singleAccount.innerHTML = accounts[i].accountName + " " + accounts[i].balance;
    //     unOrderdList.appendChild(singleAccount);

    // }


}

function storeLocally() {
    var accounts = Account.accountInfoList;
    const arr = [];
    for (let i = 0; i < accounts.length; i++) {
        var obj = {};
        obj["account"] = accounts[i].getAccountName();
        obj["Deposit"] = accounts[i].getDeposit();
        arr.push(obj)
    }
    localStorage.setItem('accounts', JSON.stringify(arr));

}
function display(e) {
    var accounts = Account.accountInfoList;
    var textarea = '';
    for (let i = 0; i < accounts.length; i++) {
        textarea += "Account Name: " + accounts[i].getAccountName() + ", " + " Deposit: " + accounts[i].getDeposit() + '\n';
    }
    document.getElementById('area').innerHTML = textarea;
    e.preventDefault();
}
function goToDebit() {
    location.href = "accountDebit.html";

}
function loadAccounts() {
    const options = document.querySelector('#accountlist');
    const accounts = localStorage.getItem('accounts');


    if (accounts.length != 0) {
        const arr = JSON.parse(accounts);
        for (let i = 0; i < arr.length; i++) {
            const option = document.createElement('option');
            option.appendChild(document.createTextNode(arr[i].account));
            option.value = arr[i].account;


            options.appendChild(option);
        }
    }
    else {
        alert("There is no account available");
    }
}
function debit() {

    const accounts = localStorage.getItem('accounts');
    const select = document.getElementById('accountlist');
    const valueSelected = select.options[select.selectedIndex].value;
    const debitAmount = document.getElementById('amount').value;
    const arr = JSON.parse(accounts);
    

    if(select.selectedIndex === 0){
        alert("Please select an account");
    }
    else{
        for (let i = 0; i < arr.length; i++) {

            if (arr[i].account == valueSelected) {
    
                const balance = arr[i].Deposit;
                if (balance < debitAmount) {
                    alert("Amount is greater than balance");
                }
                else {
                    arr[i].Deposit = balance - debitAmount;
                    alert("You have sucessfully debited from your balance");
                }
    
            }
        }
        localStorage.setItem('accounts', JSON.stringify(arr));
        location.href = "BankAccountApplication.html";

    }
    


}
function goToDeposit() {
    location.href = "accountDeposit.html";

}
function deposit() {
    const accounts = localStorage.getItem('accounts');
    const select = document.getElementById('accountlist');
    const valueSelected = select.options[select.selectedIndex].value;
    const depositAmount = document.getElementById('amount').value;

    const arr = JSON.parse(accounts);
    if(select.selectedIndex === 0){
        alert("Please select account")
    }
    else{
        for (let i = 0; i < arr.length; i++) {
            if (valueSelected == arr[i].account) {
                arr[i].Deposit = parseInt(arr[i].Deposit) + parseInt(depositAmount);
                alert("You have sucessfully deposited in your account");
    
    
            }
        }
        localStorage.setItem('accounts', JSON.stringify(arr));
        location.href = "BankAccountApplication.html";

    }

    
}
