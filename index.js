import Transaction from './model/Transaction.js'
import TransactionList from './model/TransactionList.js'
import express from 'express'
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var status = ['FAILED','SUCCESS'];
var rand = Math.floor(Math.random()*status.length);

const postPayment = (req, res) => {
    const trx = new Transaction(req.body.tx_id, req.body.amount, status[rand]);
    const trxList = TransactionList.setTransactionList(trx);
    res.json(trxList);
}

const getPayment = (req, res) => {
    const get = TransactionList.getTransactionList();
    res.json({transactions: get});
}

app.get('/payment/sale', getPayment);
app.post('/payment/sale', postPayment);

app.listen(PORT, () => {
    console.log('App Listening on port ' + PORT); 
})