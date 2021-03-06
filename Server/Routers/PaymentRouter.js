const Express = require('express');
const Controller = require('../Controllers/PaymentController');
const router = Express.Router();

router.post('/customer',function(req,res){
    Controller.AddCustomerPayment(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

router.post('/income',function(req,res){
    Controller.AddIncomeDetails(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

router.get('/customer/:name',function (req,res) {
    Controller.GetCustomerPayment(req.params.name).then(function (data) {
        res.status(data.status).send({data:data.customerdata});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

router.get('/customer/',function (req,res) {
    Controller.GetAllCustomerPayment(req.params.id).then(function (data) {
        res.status(data.status).send({data:data.allcustomerdata});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});


router.get('/income/:date',function (req,res) {
    Controller.GetDayIncome(req.params.date).then(function (data) {
        res.status(data.status).send({data:data.incomedata});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});


router.get('/income/fee/:date',function (req,res) {
    Controller.GetDayIncomeFee(req.params.date).then(function (data) {
        res.status(data.status).send({data:data.totalincome});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

router.put('/customer/:id',function (req,res) {
    Controller.UpdateCustomerPayment(req.params.date,req.body).then(function (data) {
        res.status(data.status).send({data:data.message});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

module.exports = router;