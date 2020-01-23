const model = require('../models/department.model')
const modelEmployee = require('../models/employee.model')
const dep = {}
dep.getEmployees = async (req,res,next) => {
    console.log('get employee', model)
    const users = await modelEmployee.find({department:req.params.id})
    console.log(users)
    res.json(users)
}
dep.getAll = async (req, res, next) => {
    console.log('get all', model)
    const users = await model.find();
    console.log(users)
    res.json(users)
}

dep.getOne = async (req, res, next) => {
    console.log('get one', model)
    const users = await model.findOne({_id:req.params.id}).populate('employees');
    console.log(users)
    res.json(users)
}

dep.createOne = async (req, res, next) => {
     console.log('post', req.body)
     const users = await model.create(req.body);
     console.log(users)
     res.json(users)
}

dep.updateAllFields = async (req, res, next) => {
    console.log('update all', model)
    const users = await model.updateOne({_id:req.params.id},req.body);
    console.log(users)
    res.json(users)
}

dep.updateSomeFields = async (req, res, next) => {

    console.log('update one', model)
    const users = await model.updateOne({_id:req.params.id},req.body);
    console.log(users)
    res.json(users)
}

dep.deleteOne = async (req, res, next) => {
    console.log('delete one', model)
    const users = await model.deleteOne({_id:req.params.id});
    console.log(users)
    res.json(users)
}

module.exports = dep