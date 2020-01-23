const express = require('express')
const bodyParser = require('body-parser')
const app  = express()

const employeeRouter = require('./routes/employee.route')
const departmentRouter = require('./routes/department.route')
app.use(bodyParser.json())
app.use("/employee", employeeRouter)
app.use("/department", departmentRouter)

app.use((err, req, res, next) => {
    //respond with error
  res.json({err})
})

module.exports = app