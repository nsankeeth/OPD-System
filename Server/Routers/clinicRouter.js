const Express = require('express');
const Controller = require('../Controllers/clinicController');
const router = Express.Router();

router.post('/',function(req,res){
    Controller.assigndoctor(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })
});

router.get('/:id',function (req,res) {
    Controller.findClinic(req.params.id).then(function (data) {
        res.status(data.status).send({data:data.clinicdata});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

router.get('/',function (req,res) {
    Controller.findAllClinic(req.params.date).then(function (data) {
        res.status(data.status).send({data:data.clinicsdata});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

router.put('/:id',function (req,res) {
    Controller.updateClinic(req.params.id,req.body).then(function (response) {
        res.status(response.status).send(response);
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

router.delete("/:id", function(request, resolve) {
    Controller.deleteClinic({id: request.params.id}).then(function(data) {
        response.status(data.status).send({message: data.message})
    }).catch(function(err) {
        response.status(err.status).send({message: err.message});
    });
});

module.exports = router;