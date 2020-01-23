const me = {}
const model = require('../models/department.model')
const modelmail=require('../models/employee.model')
me.createOne =async (req, res, next) => {
  const { department } = req.body
  console.log(department, '2')
  const body = await model.findOne({_id:department})
  console.log(body)
    if (body) {
    let patternEmail  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validEmail = patternEmail.test(req.body.email)
    let patternName = /[А-Я][а-я]+/
    let validFirstName = patternName.test(req.body.firstName)
    let validLastName = patternName.test(req.body.lastName)
    const users = await modelmail.findOne({email:req.body.email})
    console.log("11", users)
    if(!users && validEmail &&validFirstName&& validLastName && Number.isInteger(req.body.salary) && ["male", "female"].includes(req.body.sex))
    {
      console.log("111",users)
      next()
      return
    }
    console.log('123')
    next('err')
    return
  }
  next('err')
  return
}


module.exports = me
