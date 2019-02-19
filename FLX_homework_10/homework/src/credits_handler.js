const userCard = function(key) {
    let balance = 100; 
    let transactionLimit = 100;
    let historyLogs = [];
    const checkZero = 0;
    

    const getCardOptions = function () {
        return {
            'balance': balance,
            'transactionLimit': transactionLimit,
            'historyLogs': historyLogs,
            'key': key
        };
    };

    const putCredits = function (putSumCredits) {
        if (putSumCredits < checkZero) {
            console.error('The amount of put money is negative!')
        } else {
            log('Received credits', putSumCredits);
            balance = balance + putSumCredits;
        }        
    };

    const takeCredits = function (takeSumCredits) {
        if (balance < takeSumCredits) {
            console.error('The amount of taken money is greater than balance of card!');
        } else if (transactionLimit < takeSumCredits) {
            console.error('The amount of taken money is greater than transaction limit!');
        } else if (takeSumCredits < checkZero) {
            console.error('The amount of take money is negative!');
        } else {
            log('Withdrawal of credits', takeSumCredits);
            balance = balance - takeSumCredits;
        }
    };

    const setTransactionLimit = function (setSumLimit) {
        if (setSumLimit < checkZero) {
            console.error('The amount of set transaction limit is negative!');
        } else { 
            log('Transaction limit change', setSumLimit);
            transactionLimit = setSumLimit;
        }
    };

    const transferCredits = function (amountCredits, recipientCard) {
        const percent = 0.005;
        const sumTake = amountCredits + amountCredits * percent;
        if (sumTake > balance) {
            console.error('Not enough money in the balance');
        } else if (sumTake > transactionLimit) {
            console.error('Not enough money in the balance');
        } else {
            takeCredits(sumTake);
            recipientCard.putCredits(amountCredits);
        }
    };

    const log = function (operationType, credits) {
        const number = 2;
        const dateOperation = new Date();
        const formatDay = String(dateOperation.getDate()).padStart(number, '0');
        const formatMonth = String(dateOperation.getMonth() + 1).padStart(number, '0');
        const formatYear = dateOperation.getFullYear();
        const formatHours = String(dateOperation.getHours()).padStart(number, '0');
        const formatMinutes = String(dateOperation.getMinutes()).padStart(number, '0');
        const formatSeconds = String(dateOperation.getSeconds()).padStart(number, '0');
        const formatTime = formatHours + ':' + formatMinutes + ':' + formatSeconds;
        const formatDateOperation = formatDay + '/' + formatMonth + '/' + formatYear + ', ' + formatTime;

        const logItem = {
            'operationType': operationType,
            'credits': credits,
            'operationTime': formatDateOperation
        };

        historyLogs.push(logItem);
    };

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    };
};

const UserAccount = function (name) {
    this.name = name;
    this.cards = [];
    
};

UserAccount.prototype.addCard = function () {
    const countCard = 3;
    if (this.cards.length >= countCard) {
        console.error('User cannot have more than 3 cards');
    } else {
        const key = this.cards.length + 1;
        const card = userCard(key);
        this.cards.push(card);
    }
};

UserAccount.prototype.getCardByKey = function (number) {
    const checkZero = 0;
    const countCard = 3;
    if (number <= checkZero || number > countCard) {
        console.error('incorrect data entry');
    } else {
        return this.cards[number - 1];
    }
};
