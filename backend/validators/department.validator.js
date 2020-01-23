const me = {}
const model = require('../models/department.model')
const modelEmployee = require('../models/employee.model')

me.createOne =async (req, res, next) => {
    const users = await model.findOne({"title":req.body.title})
    let patternTitle = /[A-Z][A-Za-z 0-9\-]+/
   let validTitle = patternTitle.test(req.body.title)
    console.log("11", users)
    if(!users && validTitle)
    {
        console.log("111",users)
        next()
        return
    }
    console.log('123')
    next('err')
    return
}

me.getEmployees = async (req, res, next) => {
    const { departmentId } = req.params
    const body = await model.findOne({_id:req.params.id})
    if(departmentId != model._id){
      next('Such department dont exist')
      return
    }
    const users = await modelEmployee.findOne({department:req.params.id})
    console.log("11", body)
    if(body && users)
    {
        console.log("111",body)
        next()
        return
    }
    if(body){
      next('Such department dont have employees')
      return
    }
    console.log('123')
    next('err')
    return
}

module.exports = me
