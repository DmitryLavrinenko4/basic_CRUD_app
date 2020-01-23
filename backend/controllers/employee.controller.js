const model = require('../models/employee.model')

const me = {}
me.getAll = async (req, res, next) => {
    console.log('get all', model)
    const users = await model.find();
    console.log(users)
    res.json(users)
}

me.getOne = async (req, res, next) => {
    console.log('get one', model)
    const users = await model.findOne({_id:req.params.id});
    console.log(users)
    res.json(users)
}

me.createOne = (req, res, next) => {
    console.log('post', req.body)
    model.create(req.body)
        .then(result => {
            res.json(result)
        })
        .catch(next)
}

me.updateAllFields = async (req, res, next) => {
    console.log('update all', model)
    const users = await model.updateOne({_id:req.params.id},req.body);
    console.log(users)
    res.json(users)
}

me.updateSomeFields = async (req, res, next) => {

    console.log('update one', model)
    const users = await model.updateOne({_id:req.params.id},req.body);
    console.log(users)
    res.json(users)
}

me.deleteOne = async (req, res, next) => {
    console.log('delete one', model)
    const users = await model.deleteOne({_id:req.params.id});
    console.log(users)
    res.json(users)
}

module.exports = me