//modules
express = require("express")
app = express()
expressEjsLayouts = require("express-ejs-layouts")

//routers
indexRouter = require("./routes/index")
quizRouter = require("./routes/quiz")

//directories
publicDir = __dirname + '/public'
viewsDir = __dirname + '/views'

//settings
app.set("view engine","ejs")
app.set("views", viewsDir)
app.set("layout", "layouts/layout")

//middleware
app.use(express.static(publicDir))

//use routers
app.use("/",indexRouter)
app.use("/quiz",quizRouter)

//start server
app.listen(process.env.PORT || 3000)