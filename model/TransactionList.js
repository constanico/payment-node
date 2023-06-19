let arr = [];
let data = arr;

export default class TransactionList {

    static setTransactionList (transaction) {
        arr.push(transaction)
    }

    static getTransactionList() {
        return data;
    }
}
